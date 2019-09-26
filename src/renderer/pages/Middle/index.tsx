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
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState(null);

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
          <Topology
            // status={status}
            // target={target}
            // onUpdate={handleUpdate}
            style={{ width: '100%', height: '100%' }}
          />
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
