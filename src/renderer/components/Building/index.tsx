import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { showModal, askModal } from '@/utils/svgUtils';
import styles from './index.less';

const genG = v => {
  return Array(20)
    .fill(0)
    .reduce((r, _, i) => {
      r[i + 1] = v;
      return r;
    }, {});
};

export default ({ name, value, onOk }) => {
  const [status, setStatus] = useState(genG(true));
  const [times, setTimes] = useState(0);

  const handleRoom = key => {
    setTimes(times + 1);

    showModal({
      title: `电表-${key}`,
      value,
      onOk: () => {
        setStatus({ ...status, [key]: value });
      },
    });
  };

  const handleBack = () => {
    if (times === 0) {
      message.warn('请先召测任意一个房间的电表');
    } else {
      askModal({ title: `楼栋-${name}`, value, onOk });
    }
  };

  return (
    <div className={styles.group}>
      <h2 style={{ color: '#777' }}>{`楼栋${name}电表详细示意图`}</h2>

      <div className={styles.floors}>
        {Object.keys(status).map(key => {
          const color = status[key] ? 'green' : 'red';
          const style = { border: `1px solid ${color}`, color };
          return (
            <div
              key={key}
              className={styles.item}
              style={style}
              onClick={() => handleRoom(key)}
            >
              {key}
            </div>
          );
        })}
      </div>

      <Button className={styles.finish} type="primary" onClick={handleBack}>
        返回
      </Button>
    </div>
  );
};
