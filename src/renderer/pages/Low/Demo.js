import React, { useEffect, useState } from 'react';
import { Button, Steps, Modal } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import Topology from './Topology';
import styles from './Demo.less';

const { Step } = Steps;

const initStatus = v => ({
  FZX11: v,
  FZX12: v,
  FZX13: v,
  FZX14: v,
  G1: v,
  G2: v,
  G3: v,
  G4: v,
  G5: v,
});

export default ({ location, orders, steps, result, target, onCurrent }) => {
  const [status, setStatus] = useState(initStatus(true));
  const [current, setCurrent] = useState(0);

  const updateStatus = v => setStatus({ ...status, ...v });

  const handleStart = () => {
    if (current > 0) {
      Modal.confirm({
        title: '请问你确定要退出演示吗？',
        okText: '退出',
        cancelText: '继续',
        onOk: () => {
          setCurrent(0);
          setStatus(initStatus(true));
        },
      });
    } else {
      setCurrent(1);
    }
  };

  const handleUpdate = ({ key, value }) => {
    if (!value) {
      if (key === 'FZX11') {
        setStatus(initStatus(false));
      } else if (key === 'FZX12') {
        updateStatus({ FZX12: false, G1: false, G2: false });
      } else if (key === 'FZX13') {
        updateStatus({ FZX13: false, G3: false, G4: false });
      } else if (key === 'FZX14') {
        updateStatus({ FZX14: false, G5: false });
      } else {
        updateStatus({ [key]: value });
      }
    } else {
      updateStatus({ [key]: value });
    }

    onCurrent({ current, setCurrent, key });
  };

  return (
    <MyLayout location={location}>
      <marquee className={styles.marquee} behavior="behavior">
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

        <div className={styles.buttons}>
          <Steps size="small" direction="vertical" current={current}>
            {steps.map((desc, i) => (
              <Step key={i} description={desc} />
            ))}
          </Steps>

          {current === steps.length - 1 && (
            <h3 className={styles.result}>{result}</h3>
          )}

          <Button
            block
            type={current > 0 ? 'danger' : 'primary'}
            style={{ marginBottom: 20 }}
            onClick={handleStart}
          >
            {current === 0
              ? '开始'
              : current === steps.length - 1
              ? '完成'
              : '停止'}
          </Button>
        </div>
      </div>
    </MyLayout>
  );
};
