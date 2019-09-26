import React, { useEffect, useState } from 'react';
import { Button, Steps, Modal } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import Topology from './Topology';
import styles from './index.less';

const { Step } = Steps;

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
    let sX = 0;
    let sY = 0;

    const handleDrag = e => {
      const { type, clientX, clientY } = e;
      const el = document.getElementById('main');
      if (type === 'mousedown') {
        started = true;
        const { scrollTop, scrollLeft } = el;
        eX = scrollTop;
        eY = scrollLeft;
        sX = clientX;
        sY = clientY;
      } else if (type === 'mouseup' || type === 'mouseout') {
        started = false;
      } else if (type === 'mousemove' && started) {
        eX = eX - (clientY - sY);
        eY = eY - (clientX - sX);
        el.scrollTop = eX;
        el.scrollLeft = eY;
        sX = clientX;
        sY = clientY;
      }
    };
    if (el) {
      el.addEventListener('mousedown', handleDrag, false);
      el.addEventListener('mousemove', handleDrag, false);
      el.addEventListener('mouseout', handleDrag, false);
      el.addEventListener('mouseup', handleDrag, false);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousedown', handleDrag, false);
        el.removeEventListener('mousemove', handleDrag, false);
        el.removeEventListener('mouseout', handleDrag, false);
        el.removeEventListener('mouseup', handleDrag, false);
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
              style={{ width: `${100 * scale}%`, height: `${100 * scale}%` }}
            />
          </div>
          <div className={styles.footer}>
            {[1, 2, 3, 4].map(a => (
              <Button
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
