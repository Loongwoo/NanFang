import React from "react";
import Demo from "./Demo";

const orders = [
  "工单1：楼栋G1用户2报修故障；",
  "工单2：楼栋G1用户3报修故障；",
  "工单3：楼栋G1用户9报修故障；",
  "工单4：楼栋G1用户16报修故障；",
];

const steps = [
  "点击开始",
  "召测楼宇G1中任一电表",
  "确认G1楼栋停电",
  "召测开关FZX1-2",
  "确认开关FZX1-2有电",
  "召测楼宇G2中任一电表",
  "确认G2楼栋有电",
  "得出结论",
];

const result = "FZX1-2至楼宇G1段有故障，工单1-4可以合并处理";

const target = {
  FZX11: true,
  FZX12: true,
  FZX13: true,
  FZX14: true,
  G1: false,
  G2: true,
  G3: true,
  G4: true,
  G5: true,
};

const onCurrent = ({ current, setCurrent, key }) => {
  if (current === 1 && key === "G1") {
    setCurrent(2);
    setTimeout(() => {
      setCurrent(3);
    }, 1000);
  }
  if (current === 3 && key === "FZX12") {
    setCurrent(4);
    setTimeout(() => {
      setCurrent(5);
    }, 1000);
  }
  if (current === 5 && key === "G2") {
    setCurrent(6);
    setTimeout(() => {
      setCurrent(7);
    }, 1000);
  }
};

const title = "示例一";

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
