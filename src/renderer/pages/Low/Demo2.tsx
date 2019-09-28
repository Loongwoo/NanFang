import React from 'react';
import Demo from './Demo';

const orders = [
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

const result = 'FZX1-1至FZX1-3段故障，工单1-5合并为同一抢修工单';

const target = {
  FZX11: true,
  FZX12: true,
  FZX13: false,
  FZX14: true,
  G1: true,
  G2: true,
  G3: false,
  G4: false,
  G5: true,
};

const onCurrent = ({ current, setCurrent, key }) => {
  if (current === 1 && (key === 'G3' || key === 'G4')) {
    setCurrent(2);
    setTimeout(() => setCurrent(3), 1000);
  }
  if (current === 3 && key === 'FZX13') {
    setCurrent(4);
    setTimeout(() => setCurrent(5), 1000);
  }
  if (current === 5 && key === 'FZX11') {
    setCurrent(6);
    setTimeout(() => setCurrent(7), 1000);
  }
  if (current === 7 && (key === 'FZX12' || key === 'FZX14')) {
    setCurrent(8);
    setTimeout(() => setCurrent(9), 1000);
  }
};

const title = '示例二';

export default ({ location }) => {
  return (
    <Demo
      location={location}
      orders={orders}
      steps={steps}
      result={result}
      target={target}
      onCurrent={onCurrent}
      title={title}
    />
  );
};
