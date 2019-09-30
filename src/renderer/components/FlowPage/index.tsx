import React, { useEffect, useState } from 'react';
import { Button, Steps, Modal } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import SVGView from '@/components/SVGView';
import styles from './index.less';

const { Step } = Steps;

export default ({
  location,
  warnings,
  svg,
  steps = [],
  result,
  title,
  nexts = [],
  current,
  changeCurrent,
  readyStart = null,
}) => {
  const finished = current === steps.length - 1;

  const handleStart = () => {
    if (current > 0) {
      Modal.confirm({
        title: finished ? '你确定要重新开始吗？' : '你确定要退出演示吗？',
        okText: finished ? '重新开始' : '退出',
        cancelText: '继续',
        onOk: () => changeCurrent(0),
      });
    } else if (readyStart) {
      readyStart();
    } else {
      changeCurrent(1);
    }
  };

  return (
    <MyLayout location={location}>
      {warnings && (
        <marquee className={styles.marquee} behavior="scroll">
          {warnings}
        </marquee>
      )}

      <div className={styles.content}>
        <div className={styles.svgView}>
          <SVGView {...svg} />
        </div>

        <div className={styles.right}>
          {title && <h3 className={styles.title}>{title}</h3>}

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
                  <Button
                    type={'primary'}
                    onClick={() => changeCurrent(current + 1)}
                  >
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
