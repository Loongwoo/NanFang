import React, { useEffect, useState } from 'react';
import { Button, Steps, Modal } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import SVGView from '@/components/SVGView';
import styles from './index.less';
import { connect } from 'dva';
import { ipcRenderer } from 'electron';
import { WINDOW_MAX } from '../../../constants';

const { Step } = Steps;

const FlowPage = ({
  location,
  warnings,
  svg,
  steps = [],
  result,
  title,
  nexts = [],
  current,
  changeCurrent,
  setBefore,
  setAfter,
}) => {
  if (current === 0) {
    setBefore(0);
  } else if (current === 1) {
    setBefore(warnings.length);
  } else if (current === steps.length - 1) {
    setAfter(result.length);
  }

  const finished = current === steps.length - 1;

  const handleStart = () => {
    if (current > 0) {
      Modal.confirm({
        title: finished ? '你确定要重新开始吗？' : '你确定要退出演示吗？',
        okText: finished ? '重新开始' : '退出',
        cancelText: '继续',
        onOk: () => changeCurrent(0),
      });
    } else {
      Modal.warning({
        title: `发现${warnings.length}条告警`,
        content: (
          <div>
            {warnings.map((a, i) => (
              <div key={i} style={{ marginBottom: 3 }}>
                {a}
              </div>
            ))}
          </div>
        ),
        okText: '知道了',
        onOk: () => changeCurrent(1),
      });
    }
  };

  const handleMax = () => {
    ipcRenderer.send(WINDOW_MAX);
  };

  return (
    <MyLayout location={location}>
      <div className={styles.header} onDoubleClick={handleMax}>
        {current > 0 && warnings ? (
          <marquee
            className={styles.marquee}
            scrollamount={10}
            behavior="scroll"
          >
            {warnings}
          </marquee>
        ) : (
          <div className={styles.nowarnings}>目前没有新增报修工单！</div>
        )}
      </div>

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

          {finished &&
            result.map((r, i) => (
              <h4 key={i} className={styles.result}>
                {r}
              </h4>
            ))}

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
)(FlowPage);
