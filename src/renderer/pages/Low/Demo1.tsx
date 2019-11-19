import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import Building from '@/components/Building';
import * as _ from '@/utils/svgUtils';

const warnings = [
  '工单1：楼栋G1用户2报修故障；',
  '工单2：楼栋G1用户3报修故障；',
  '工单3：楼栋G1用户9报修故障；',
  '工单4：楼栋G1用户16报修故障；',
];

const steps = [
  '点击开始',
  '召测楼栋G1中任一电表',
  '确认楼栋G1停电',
  '召测开关FZX1-2',
  '确认开关FZX1-2有电',
  '召测楼栋G2中任一电表',
  '确认楼栋G2有电',
  '得出结论',
];

const result = ['工单1-4合并为同一抢修工单，FZX1-2至楼宇G1段有故障'];

export default ({ location }) => {
  const [buildin, setBuildin] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current > 1) {
      _.setStroke('rect-g1', 'red');
      _.setStroke('line-g1', 'red', false);
    }
    if (current === 0) {
      setBuildin(null);
      _.setStroke('rect-g1', 'green');
      _.setStroke('line-g1', 'green', true);
      _.clearFill('rect-g1');
      _.clearFill('rect-f2');
      _.clearFill('rect-g2');
    } else if (current === 1) {
      _.blinkBlue('rect-g1');
    } else if (current === 2) {
      setBuildin(null);
      _.clearFill('rect-g1');
    } else if (current === 3) {
      _.blinkBlue('rect-f2');
    } else if (current === 4) {
      _.clearFill('rect-f2');
    } else if (current === 5) {
      _.blinkBlue('rect-g2');
    } else if (current === 6) {
      setBuildin(null);
      _.clearFill('rect-g2');
    }
  }, [current]);

  const handleOk = v => {
    setCurrent(v);
    setTimeout(() => setCurrent(v + 1), 200);
  };

  const onLoad = () => {
    _.addClkEvt('rect-g1', () =>
      setBuildin({ name: 'G1', value: false, onOk: () => handleOk(2) })
    );
    _.addClkEvt('rect-f2', () =>
      _.showModal({ title: '开关FZX1-2', value: true, onOk: () => handleOk(4) })
    );
    _.addClkEvt('rect-g2', () =>
      setBuildin({ name: 'G2', value: true, onOk: () => handleOk(6) })
    );
  };

  const src = require('@/assets/low.svg') as string;
  const child = buildin ? <Building {...buildin} /> : null;

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={{ title: '拓扑图', src, child, onLoad }}
      title="示例一"
      steps={steps}
      result={result}
      current={current}
      changeCurrent={setCurrent}
    />
  );
};
