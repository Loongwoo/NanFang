import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import Building from '@/components/Building';
import { addClkEvt, rmvClkEvt, setStroke, showModal } from '@/utils/svgUtils';

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

const src = 'https://kast.oss-cn-hangzhou.aliyuncs.com/images/svg/low.svg';

const result = 'FZX1-2至楼宇G1段有故障，工单1-4可以合并处理';

export default ({ location }) => {
  const [buildin, setBuildin] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current > 1) {
      setStroke('rect-g1', 'red');
      setStroke('line-g1', 'red', false);
    }
    if (current === 0) {
      setBuildin(null);
      setStroke('rect-g1', 'green');
      setStroke('line-g1', 'green', true);
      rmvClkEvt('rect-g1', g1Click);
      rmvClkEvt('rect-f2', f2Click);
      rmvClkEvt('rect-g2', g2Click);
    } else if (current === 1) {
      addClkEvt('rect-g1', g1Click);
    } else if (current === 3) {
      addClkEvt('rect-f2', f2Click);
    } else if (current === 5) {
      addClkEvt('rect-g2', g2Click);
    }
  });

  const g1Click = () => {
    const onFinish = () => {
      setCurrent(2);
      setBuildin(null);
      setTimeout(() => setCurrent(3), 200);
    };
    setBuildin({ name: 'G1', value: false, onFinish });
  };

  const f2Click = () => {
    const onOk = () => {
      rmvClkEvt('rect-f2', f2Click);
      setCurrent(4);
      setTimeout(() => setCurrent(5), 200);
    };
    showModal({ title: '开关FZX1-2', value: true, onOk });
  };

  const g2Click = () => {
    const onFinish = () => {
      setCurrent(6);
      setBuildin(null);
      setTimeout(() => setCurrent(7), 200);
    };
    setBuildin({ name: 'G2', value: true, onFinish });
  };

  const child = buildin ? <Building {...buildin} /> : null;

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={{ title: '拓扑图', src, child }}
      title="示例一"
      steps={steps}
      result={result}
      current={current}
      changeCurrent={setCurrent}
    />
  );
};
