import React, { useEffect, useState } from 'react';
import { Button, Steps, Modal } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import Topology from './Topology';
import styles from './LTOld.less';

const { Step } = Steps;

const StartLeft = 240;
const StartTop = 44;

const orders =
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

const nexts = [2, 4, 5];

const result =
  '通知供电分局人员进行巡线排查故障：巡线起点为大信置业专用配电站602；终点为大信置业D专用配电站603';

export default ({ location }) => {
  const [scale, setScale] = useState(1);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = document.getElementById('main');

    let started = false;
    let eX = 0;
    let eY = 0;

    const handleDrag = e => {
      if (scale === 1) {
        return;
      }
      const { type, clientX, clientY } = e;
      const el = document.getElementById('main');
      if (type === 'mousedown') {
        const { scrollLeft, scrollTop } = el;
        started = true;
        eY = scrollTop + clientY;
        eX = scrollLeft + clientX;
      } else if (type === 'mouseup') {
        started = false;
      } else if (type === 'mousemove' && started) {
        el.scrollTop = eY - clientY;
        el.scrollLeft = eX - clientX;
        const px = clientX - StartLeft;
        const py = clientY - StartTop;
        const { clientWidth: w1, clientHeight: h1 } = el;
        if (px <= 5 || py <= 5 || px >= w1 - 5 || py >= h1 - 5) {
          started = false;
        }
      }
    };

    const doubleClick = e => {
      if (scale === 8) {
        setScale(1);
        return;
      }
      const el = document.getElementById('main');
      const { clientX, clientY } = e;
      const { scrollTop, scrollLeft, scrollWidth: w1, scrollHeight: h1 } = el;
      const rx = clientX - StartLeft;
      const ry = clientY - StartTop;
      const x = (scrollLeft + rx) / w1;
      const y = (scrollTop + ry) / h1;

      setScale(scale * 2);

      const { scrollWidth: w2, scrollHeight: h2 } = el;
      el.scrollTop = h2 * y - ry;
      el.scrollLeft = w2 * x - rx;
    };

    if (el) {
      el.addEventListener('mousedown', handleDrag, false);
      el.addEventListener('mousemove', handleDrag, false);
      el.addEventListener('mouseup', handleDrag, false);
      el.addEventListener('dblclick', doubleClick, false);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousedown', handleDrag, false);
        el.removeEventListener('mousemove', handleDrag, false);
        el.removeEventListener('mouseup', handleDrag, false);
        el.removeEventListener('dblclick', doubleClick, false);
      }
    };
  });

  const finished = current === steps.length - 1;

  const handleStart = () => {
    if (current > 0) {
      Modal.confirm({
        title: finished ? '你确定要重新开始吗？' : '你确定要退出演示吗？',
        okText: finished ? '重新开始' : '退出',
        cancelText: '继续',
        onOk: () => {
          setCurrent(0);
        },
      });
    } else {
      Modal.warning({
        title: '告警',
        content: orders,
        okText: '知道了',
        onOk: () => {
          setCurrent(1);
        },
      });
    }
  };

  const handleScale = s => {
    if (scale === s) {
      return;
    }
    const el = document.getElementById('main');
    const {
      scrollTop,
      scrollLeft,
      clientWidth,
      clientHeight,
      scrollWidth: w1,
      scrollHeight: h1,
    } = el;
    const x = (scrollLeft + clientWidth / 2) / w1;
    const y = (scrollTop + clientHeight / 2) / h1;

    setScale(s);

    const recovery = () => {
      const {
        clientHeight: ch2,
        clientWidth: cw2,
        scrollWidth: w2,
        scrollHeight: h2,
      } = el;
      if (w1 !== w2 && h1 !== h2) {
        el.scrollTop = h2 * y - ch2 / 2;
        el.scrollLeft = w2 * x - cw2 / 2;
      } else {
        setTimeout(recovery, 100);
      }
    };
    setTimeout(recovery, 100);
  };

  const handleNext = () => {
    setCurrent(current + 1);
    if (current === 4) {
      Modal.warning({
        title: '告警',
        content: '大信置业G专用配电站602合位，大信置业D专用配电站603开关分位',
        okText: '知道了',
      });
    } else if (current === 5) {
      Modal.info({
        title: '合并工单',
        content:
          '大信置业G专用配电站602与大信置业D专用配电站603之间公变报修95598工单合并',
        okText: '知道了',
        onOk: () => setCurrent(7),
      });
    }
  };

  return (
    <MyLayout location={location}>
      <marquee className={styles.marquee} behavior="scroll">
        {orders}
      </marquee>

      <div className={styles.content}>
        <div className={styles.topology}>
          <div id="main" className={styles.main} style={{ cursor: 'pointer' }}>
            <Topology
              current={current}
              onCurrent={setCurrent}
              style={{
                width: `${100 * scale}%`,
                height: `${100 * scale - 1}%`,
              }}
            />
          </div>
          <div className={styles.footer}>
            {[1, 2, 4, 8].map(a => (
              <Button
                key={a}
                ghost={scale !== a}
                type="primary"
                shape="circle"
                style={{ marginLeft: a > 1 ? 20 : 0 }}
                onClick={() => handleScale(a)}
              >
                {`${a}X`}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <Steps
            size="small"
            direction="vertical"
            current={current}
            style={{ marginTop: 16 }}
          >
            {steps.map((desc, i) => [
              <Step key={i} description={desc} />,
              nexts && nexts.findIndex(a => a === i) !== -1 && current === i ? (
                <div style={{ marginBottom: 10, textAlign: 'center' }}>
                  <Button type={'primary'} onClick={handleNext}>
                    下一步
                  </Button>
                </div>
              ) : null,
            ])}
          </Steps>

          {finished && <h3 className={styles.result}>{result}</h3>}

          <div style={{ marginBottom: 20, textAlign: 'center' }}>
            <Button
              type={current > 0 ? 'danger' : 'primary'}
              onClick={handleStart}
            >
              {current === 0 ? '开始' : finished ? '完成' : '停止'}
            </Button>
          </div>
        </div>
      </div>
    </MyLayout>
  );
};
