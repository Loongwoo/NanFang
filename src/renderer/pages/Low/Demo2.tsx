import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import Building from '@/components/Building';
import {
  addClkEvt,
  setStroke,
  askModal,
  blinkBlue,
  clearFill,
} from '@/utils/svgUtils';
import low from '@/assets/low.svg';

const warnings = [
  '工单1：楼栋G3用户7报修故障；',
  '工单2：楼栋G3用户18报修故障；',
  '工单3：楼栋G3用户19报修故障；',
  '工单4：楼栋G4用户6报修故障；',
  '工单5：楼栋G5用户11报修；',
];

const steps = [
  '点击开始',
  '召测楼栋G3或G4中任一电表',
  '确认楼栋G3或G4停电',
  '召测开关FZX1-3',
  '确认开关FZX1-3停电',
  '召测开关FZX1-1',
  '确认开关FZX1-1有电',
  '召测开关FZX1-2或FZX1-4',
  '确认开关FZX1-2或FZX1-4有电',
  '得出结论',
];

const result = [
  '工单1-4合并为同一抢修工单，FZX1-1至FZX1-3段故障',
  '楼栋G5用户11报修',
];

export default ({ location }) => {
  const [buildin, setBuildin] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current > 1) {
      setStroke('rect-g3', 'red');
      setStroke('line-g3', 'red', false);
      setStroke('rect-g4', 'red');
      setStroke('line-g4', 'red', false);
    }
    if (current > 3) {
      setStroke('rect-f3', 'red');
      setStroke('line-f3', 'red', false);
    }

    if (current === 0) {
      setBuildin(null);
      setStroke('rect-g3', 'green');
      setStroke('line-g3', 'green', true);
      setStroke('rect-g4', 'green');
      setStroke('line-g4', 'green', true);
      setStroke('rect-f3', 'green');
      setStroke('line-f3', 'green', true);

      clearFill('rect-g3');
      clearFill('rect-g4');
      clearFill('rect-f1');
      clearFill('rect-f2');
      clearFill('rect-f3');
      clearFill('rect-f4');
    } else if (current === 1) {
      blinkBlue('rect-g3');
      blinkBlue('rect-g4');
    } else if (current === 2) {
      setBuildin(null);
      clearFill('rect-g3');
      clearFill('rect-g4');
    } else if (current === 3) {
      blinkBlue('rect-f3');
    } else if (current === 4) {
      clearFill('rect-f3');
    } else if (current === 5) {
      blinkBlue('rect-f1');
    } else if (current === 6) {
      clearFill('rect-f1');
    } else if (current === 7) {
      blinkBlue('rect-f2');
      blinkBlue('rect-f4');
    } else if (current === 8) {
      clearFill('rect-f2');
      clearFill('rect-f4');
    }
  });

  const handleOk = v => {
    setCurrent(v);
    setTimeout(() => setCurrent(v + 1), 200);
  };

  const onLoad = () => {
    addClkEvt('rect-g3', () =>
      setBuildin({ name: 'G3', value: false, onOk: () => handleOk(2) })
    );
    addClkEvt('rect-g4', () =>
      setBuildin({ name: 'G4', value: false, onOk: () => handleOk(2) })
    );
    addClkEvt('rect-f1', () =>
      askModal({ title: '开关FZX1-1', value: true, onOk: () => handleOk(6) })
    );
    addClkEvt('rect-f2', () =>
      askModal({ title: '开关FZX1-2', value: true, onOk: () => handleOk(8) })
    );
    addClkEvt('rect-f3', () =>
      askModal({ title: '开关FZX1-3', value: false, onOk: () => handleOk(4) })
    );
    addClkEvt('rect-f4', () =>
      askModal({ title: '开关FZX1-4', value: true, onOk: () => handleOk(8) })
    );
  };

  const child = buildin ? <Building {...buildin} /> : null;

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={{ title: '拓扑图', src: low, child, onLoad }}
      title="示例二"
      steps={steps}
      result={result}
      current={current}
      changeCurrent={setCurrent}
    />
  );
};
