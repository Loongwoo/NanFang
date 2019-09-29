import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import styles from './Demo.less';

const xmlns = 'http://www.w3.org/2000/svg';

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

const result = 'FZX1-2至楼宇G1段有故障，工单1-4可以合并处理';

const blinkBlue = () => {
  const animate = document.createElementNS(xmlns, 'animate');
  animate.setAttributeNS(null, 'id', 'blink-blue');
  animate.setAttributeNS(null, 'attributeName', 'fill');
  animate.setAttributeNS(null, 'dur', '1s');
  animate.setAttributeNS(null, 'repeatCount', 'indefinite');
  animate.setAttributeNS(null, 'keyTimes', '0;0.5;1');
  animate.setAttributeNS(null, 'calcMode', 'linear');
  animate.setAttributeNS(
    null,
    'values',
    'rgba(0, 0, 255, 0.8);rgba(0, 0, 255, 0);rgba(0, 0, 255, 0.8)'
  );
  return animate;
};

export default ({ location }) => {
  const handleChanged = ({ current, setCurrent }) => {
    console.log('current', current);
    if (current === 1) {
      const rect5 = document.getElementById('rect-g1');
      console.log('rect-g1', rect5);
      rect5.setAttribute('stroke', 'red');
      // rect5.setAttribute('fill', '#00f');
      rect5.appendChild(blinkBlue());
      rect5.addEventListener('click', () => {
        setCurrent(2);
      });

      const lineG1 = document.getElementById('line-g1');
      lineG1.setAttribute('stroke', '#f00');
      lineG1.innerHTML = '';
    }
  };

  const svg = {
    src: 'https://kast.oss-cn-hangzhou.aliyuncs.com/images/svg/low.svg',
    title: '拓扑图',
    lengend: (
      <>
        <div style={{ color: '#0f0' }}>绿色线条代表有电</div>
        <div style={{ color: '#f00' }}>红色线条代表停电</div>
      </>
    ),
  };

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={svg}
      title="示例一"
      steps={steps}
      result={result}
      currentChanged={handleChanged}
    />
  );
};
