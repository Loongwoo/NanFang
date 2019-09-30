import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import Building from '@/components/Building';
import { addClkEvt, rmvClkEvt, setStroke, showModal } from '@/utils/svgUtils';

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

const src = 'https://kast.oss-cn-hangzhou.aliyuncs.com/images/svg/low.svg';

const result = 'FZX1-1至FZX1-3段故障，工单1-5合并为同一抢修工单';

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

      rmvClkEvt('rect-g3', g3Click);
      rmvClkEvt('rect-g4', g4Click);
      rmvClkEvt('rect-f1', f1Click);
      rmvClkEvt('rect-f2', f2Click);
      rmvClkEvt('rect-f3', f3Click);
      rmvClkEvt('rect-f4', f4Click);
    } else if (current === 1) {
      addClkEvt('rect-g3', g3Click);
      addClkEvt('rect-g4', g4Click);
    } else if (current === 3) {
      addClkEvt('rect-f3', f3Click);
    } else if (current === 5) {
      addClkEvt('rect-f1', f1Click);
    } else if (current === 7) {
      addClkEvt('rect-f2', f2Click);
      addClkEvt('rect-f4', f4Click);
    }
  });

  const g3Click = () => {
    const onFinish = () => {
      setCurrent(2);
      setBuildin(null);
      setTimeout(() => setCurrent(3), 200);
    };
    setBuildin({ name: 'G3', value: false, onFinish });
  };

  const g4Click = () => {
    const onFinish = () => {
      setCurrent(2);
      setBuildin(null);
      setTimeout(() => setCurrent(3), 200);
    };
    setBuildin({ name: 'G4', value: false, onFinish });
  };

  const f1Click = () => {
    const onOk = () => {
      rmvClkEvt('rect-f1', f3Click);
      setCurrent(6);
      setTimeout(() => setCurrent(7), 200);
    };
    showModal({ title: '开关FZX1-1', value: true, onOk });
  };

  const f2Click = () => {
    const onOk = () => {
      rmvClkEvt('rect-f2', f2Click);
      rmvClkEvt('rect-f4', f4Click);
      setCurrent(8);
      setTimeout(() => setCurrent(9), 200);
    };
    showModal({ title: '开关FZX1-2', value: true, onOk });
  };

  const f3Click = () => {
    const onOk = () => {
      rmvClkEvt('rect-f3', f3Click);
      setCurrent(4);
      setTimeout(() => setCurrent(5), 200);
    };
    showModal({ title: '开关FZX1-3', value: false, onOk });
  };

  const f4Click = () => {
    const onOk = () => {
      rmvClkEvt('rect-f2', f2Click);
      rmvClkEvt('rect-f4', f4Click);
      setCurrent(8);
      setTimeout(() => setCurrent(9), 200);
    };
    showModal({ title: '开关FZX1-4', value: true, onOk });
  };

  const child = buildin ? <Building {...buildin} /> : null;

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={{ title: '拓扑图', src, child }}
      title="示例二"
      steps={steps}
      result={result}
      current={current}
      changeCurrent={setCurrent}
    />
  );
};
