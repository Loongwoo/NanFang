import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import { Modal } from 'antd';
import * as _ from '@/utils/svgUtils';

const warnings = [
  [
    '2019-10-3 21:43:21:225，大信置业G专用配电站602与大信置业D专用配电站603之间出现故障，开关大信置业G专用配电站602与大信置业D专用配电站603分开，隔离故障。',
  ],
];

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

const result = [
  '通知供电分局人员进行巡线排查故障：巡线起点为大信置业专用配电站602；终点为大信置业D专用配电站603',
];

export default ({ location }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= 4) {
      _.setStroke('rect-f', '#f00');
      _.setStroke('line-f', '#f00', false);
    }
    if (current >= 5) {
      _.setStroke('rect-x', '#f00');
      _.setStroke('rect-d', '#f00');
      _.setStroke('line-d', '#f00');
      _.blinkRed('rect-x', 'stroke', false);
      _.blinkRed('rect-d', 'stroke', false);
      _.setSW('rect-x', 4);
      _.setSW('rect-d', 4);
    }

    if (current === 0) {
      _.setStroke('rect-f', '#000');
      _.setStroke('line-f', '#0f0', true);
      _.setStroke('g-circle', 'none', false);
      _.setStroke('d-circle', 'none', false);
      _.setStroke('rect-x', '#000');
      _.setStroke('rect-d', '#f0f');
      _.clearFill('rect-x');
      _.clearFill('rect-d');
      _.clearFill('rect-c');
      _.clearFill('rect-f');

      _.setSW('rect-x', 2);
      _.setSW('rect-d', 2);
    } else if (current === 1) {
      _.blinkBlue('rect-c');
    } else if (current === 2) {
      _.clearFill('rect-c');
      _.blinkGreen('g-circle', 'stroke');
    } else if (current === 3) {
      _.setStroke('g-circle', 'none', false);
      _.blinkBlue('rect-f');
    } else if (current === 4) {
      _.clearFill('rect-f');
      _.blinkRed('d-circle', 'stroke');
    } else if (current === 5) {
      _.setStroke('d-circle', 'none', false);
      Modal.warning({
        title: '更新告警',
        content: '大信置业G专用配电站602合位，大信置业D专用配电站603开关分位',
        okText: '知道了',
        onOk: () => setCurrent(6),
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

  const onLoad = () => {
    _.addClkEvt('rect-c', () =>
      _.showModal({
        title: '万城大信充电桩专用箱变',
        value: true,
        onOk: () => setCurrent(2),
      })
    );
    _.addClkEvt('rect-f', () =>
      _.showModal({
        title: '大信D段专用电房',
        value: false,
        onOk: () => setCurrent(4),
      })
    );
  };

  const src = require('@/assets/liantang.svg') as string;

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={{ lengend: false, src, onLoad }}
      title="莲塘天明线706"
      steps={steps}
      nexts={[2, 4]}
      result={result}
      current={current}
      changeCurrent={setCurrent}
    />
  );
};
