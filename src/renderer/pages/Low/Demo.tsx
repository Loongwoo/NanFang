import React, { useEffect, useState } from 'react';
import { Button, Steps, Modal } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import Topology from './Topology';
import styles from './Demo.less';

const { Step } = Steps;

const initStatus = v =>
  ['FZX11', 'FZX12', 'FZX13', 'FZX14', 'G1', 'G2', 'G3', 'G4', 'G5'].reduce(
    (r, a) => {
      r[a] = v;
      return r;
    },
    {}
  );

export default ({
  location,
  orders,
  steps,
  result,
  target,
  onCurrent,
  title,
}) => {
  const [status, setStatus] = useState(initStatus(true));
  const [current, setCurrent] = useState(0);

  const finished = current === steps.length - 1;

  const handleStart = () => {
    if (current > 0) {
      Modal.confirm({
        title: finished ? '你确定要重新开始吗？' : '你确定要退出演示吗？',
        okText: finished ? '重新开始' : '退出',
        cancelText: '继续',
        onOk: () => {
          setCurrent(0);
          setStatus(initStatus(true));
        },
      });
    } else {
      setStatus(initStatus(true));
      setCurrent(1);
    }
  };

  const handleUpdate = ({ key, value }) => {
    if (!value) {
      if (key === 'FZX11') {
        setStatus(initStatus(false));
      } else if (key === 'FZX12') {
        setStatus({ ...status, FZX12: false, G1: false, G2: false });
      } else if (key === 'FZX13') {
        setStatus({ ...status, FZX13: false, G3: false, G4: false });
      } else if (key === 'FZX14') {
        setStatus({ ...status, FZX14: false, G5: false });
      } else {
        setStatus({ ...status, [key]: value });
      }
    } else {
      setStatus({ ...status, [key]: value });
    }

    onCurrent({ current, setCurrent, key });
  };

  return (
    <MyLayout location={location}>
      <marquee className={styles.marquee} behavior="scroll">
        {orders}
      </marquee>

      <div className={styles.content}>
        <div className={styles.topology}>
          <Topology
            status={status}
            target={target}
            onUpdate={handleUpdate}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className={styles.right}>
          {title && <h3 className={styles.title}>{title}</h3>}

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
