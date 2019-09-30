import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import {
  addClkEvt,
  rmvClkEvt,
  setStroke,
  showModal,
  blinkYellow,
  clearChild,
} from '@/utils/svgUtils';
import { Modal } from 'antd';

const warnings =
  '2019-10-3 21:43:21:225，大信置业G专用配电站602与大信置业D专用配电站603之间出现故障，开关大信置业G专用配电站602与大信置业D专用配电站603分开，隔离故障。';

const steps = [
  '点击开始',
  '召测万城大信充电桩专用箱变电表',
  '大信置业G专用配电站602合位',
  '召测大信D段专用电房电表信息',
  '大信置业D专用配电站603开关分位',
  '更新告警信息',
  '合并工单',
  '得到结论',
];

const src = 'https://kast.oss-cn-hangzhou.aliyuncs.com/images/svg/liantang.svg';

const nexts = [2, 4, 5];

const result =
  '通知供电分局人员进行巡线排查故障：巡线起点为大信置业专用配电站602；终点为大信置业D专用配电站603';

export default ({ location }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= 2) {
      setStroke('rect-g', 'green');
      setStroke('rect-c', 'green');
      setStroke('line-x', 'green', true);
      setStroke('line-c', 'green', true);
    }
    if (current >= 4) {
      setStroke('rect-f', 'red');
      setStroke('line-f', 'red', true);
    }

    if (current === 0) {
      load(true);

      setStroke('rect-g', '#000');
      setStroke('rect-c', '#000');
      setStroke('line-x', '#000');
      setStroke('line-c', '#000');

      setStroke('rect-f', '#000');
      setStroke('line-f', '#000');

      rmvClkEvt('rect-c', cClick);
      rmvClkEvt('rect-f', fClick);
    } else if (current === 1) {
      load(false);
      addClkEvt('rect-c', cClick);
    } else if (current === 2) {
      rmvClkEvt('rect-c', cClick);
    } else if (current === 3) {
      addClkEvt('rect-f', fClick);
    } else if (current === 4) {
      rmvClkEvt('rect-f', fClick);
    } else if (current === 5) {
      Modal.warning({
        title: '告警',
        content: '大信置业G专用配电站602合位，大信置业D专用配电站603开关分位',
        okText: '知道了',
      });
    } else if (current === 6) {
      Modal.info({
        title: '合并工单',
        content:
          '大信置业G专用配电站602与大信置业D专用配电站603之间公变报修95598工单合并',
        okText: '知道了',
        onOk: () => setCurrent(7),
      });
    }
  });

  const cClick = () =>
    showModal({
      title: '万城大信充电桩专用箱变',
      value: true,
      onOk: () => setCurrent(2),
    });

  const fClick = () =>
    showModal({
      title: '大信D段专用电房',
      value: false,
      onOk: () => setCurrent(4),
    });

  const handleReady = () =>
    Modal.warning({
      title: '告警',
      content: warnings,
      okText: '知道了',
      onOk: () => setCurrent(1),
    });

  const load = v => {
    if (v) {
      blinkYellow('rect-g');
      blinkYellow('rect-x');
      blinkYellow('rect-d');
    } else {
      clearChild('rect-g');
      clearChild('rect-x');
      clearChild('rect-d');
    }
  };

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={{ lengend: false, src, onLoad: () => load(true) }}
      title="莲塘天明线706"
      steps={steps}
      nexts={nexts}
      result={result}
      current={current}
      changeCurrent={setCurrent}
      readyStart={handleReady}
    />
  );
};
