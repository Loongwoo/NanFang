import React, { useEffect, useState } from 'react';
import FlowPage from '@/components/FlowPage';
import { Modal } from 'antd';
import { connect } from 'dva';
import liantang from '@/assets/liantang.svg';
import {
  addClkEvt,
  rmvClkEvt,
  setStroke,
  showModal,
  blinkRed,
  blinkYellow,
  clearChild,
  setHref,
  setSW,
} from '@/utils/svgUtils';

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

const result =
  '通知供电分局人员进行巡线排查故障：巡线起点为大信置业专用配电站602；终点为大信置业D专用配电站603';

const LianTang = ({ location, setBefore, setAfter }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= 2) {
      setStroke('rect-g', '#0f0');
      setStroke('rect-c', '#0f0');
      setStroke('line-x', '#0f0', true);
      setStroke('line-c', '#0f0', true);
      setHref('g-602', '#o');
      setHref('g-6024', '#m');
      setHref('c-601', '#f');
      setHref('c-801', '#t');
    }
    if (current >= 4) {
      setStroke('rect-f', '#f00');
      setStroke('line-f', '#f00', true);
    }
    if (current >= 5) {
      setStroke('rect-x', '#f00');
      setStroke('rect-d', '#f00');
      setStroke('line-d', '#f00');
      blinkRed('rect-x', 'stroke');
      blinkRed('rect-d', 'stroke');
      setSW('rect-x', 4);
      setSW('rect-d', 4);
    }

    if (current === 0) {
      setBefore(0);

      setStroke('rect-g', '#000');
      setStroke('rect-c', '#000');
      setStroke('line-x', '#000', false);
      setStroke('line-c', '#000', false);
      setHref('g-602', '#n');
      setHref('g-6024', '#l');
      setHref('c-601', '#g');
      setHref('c-801', '#j');

      setStroke('rect-f', '#000');
      setStroke('line-f', '#000', false);

      setStroke('rect-x', '#000');
      setStroke('rect-d', '#f0f');
      setStroke('line-d', '#000');
      clearChild('rect-x');
      clearChild('rect-d');
      setSW('rect-x', 2);
      setSW('rect-d', 2);

      rmvClkEvt('rect-c', cClick);
      rmvClkEvt('rect-f', fClick);

      load(true);
    } else if (current === 1) {
      load(false);
      setBefore(2);
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
    } else if (current === 7) {
      setAfter(1);
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

  const svg = {
    lengend: false,
    src: liantang,
    onLoad: () => load(true),
  };

  return (
    <FlowPage
      location={location}
      warnings={warnings}
      svg={svg}
      title="莲塘天明线706"
      steps={steps}
      nexts={[2, 4, 5]}
      result={result}
      current={current}
      changeCurrent={setCurrent}
      readyStart={handleReady}
    />
  );
};

export default connect(
  ({}) => ({}),
  dispatch => ({
    setBefore(before) {
      dispatch({
        type: 'order/setOrder',
        values: { before, after: 0 },
      });
    },
    setAfter(after) {
      dispatch({
        type: 'order/setOrder',
        values: { after },
      });
    },
  })
)(LianTang);
