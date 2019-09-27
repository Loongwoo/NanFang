import React, { useEffect, useState } from 'react';
import { Button, Steps, Modal } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import Topology from './Topology';
import styles from './index.less';

const { Step } = Steps;

const StartLeft = 240;
const StartTop = 44;

const orders =
  '2019.10.3 21:43:21:225，大信置业G专用配电站602与大信置业D专用配电站603之间出现故障，开关大信置业G专用配电站602与大信置业D专用配电站603分开，隔离故障。';

const steps = ['点击开始', '得到结论'];

const result =
  '通知供电分局人员进行巡线排查故障：巡线起点为大信置业G专用配电站602；终点为大信置业D专用配电站603';

export default ({ location }) => {
  const [scale, setScale] = useState(1);
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState(null);

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
      } else if (type === 'mouseup' || type === 'mouseout') {
        started = false;
      } else if (type === 'mousemove' && started) {
        el.scrollTop = eY - clientY;
        el.scrollLeft = eX - clientX;
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
      if (w1 !== w2 && h1 !== h2) {
        el.scrollTop = h2 * y - ry;
        el.scrollLeft = w2 * x - rx;
      }
    };

    if (el) {
      el.addEventListener('mousedown', handleDrag, false);
      el.addEventListener('mousemove', handleDrag, false);
      el.addEventListener('mouseout', handleDrag, false);
      el.addEventListener('mouseup', handleDrag, false);
      el.addEventListener('dblclick', doubleClick, false);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousedown', handleDrag, false);
        el.removeEventListener('mousemove', handleDrag, false);
        el.removeEventListener('mouseout', handleDrag, false);
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
          setStatus(null);
        },
      });
    } else {
      setStatus(null);
      setCurrent(1);
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
              // status={status}
              // target={target}
              // onUpdate={handleUpdate}
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
                onClick={() => setScale(a)}
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
            {steps.map((desc, i) => (
              <Step key={i} description={desc} />
            ))}
          </Steps>

          {finished && <h3 className={styles.result}>{result}</h3>}

          <div style={{ margin: '0 auto 20px', textAlign: 'center' }}>
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
