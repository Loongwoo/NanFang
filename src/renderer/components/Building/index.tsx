import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { showModal } from '@/utils/svgUtils';
import styles from './index.less';

const genG = v => {
  return Array(20)
    .fill(0)
    .reduce((r, _, i) => {
      r[i + 1] = v;
      return r;
    }, {});
};

export default ({ name, value, onFinish }) => {
  const [status, setStatus] = useState(genG(true));
  const [times, setTimes] = useState(0);

  const handleRoom = key => {
    setTimes(times + 1);

    const onOk = () => setStatus({ ...status, [key]: value });
    showModal({ title: `电表-${key}`, value, onOk });
  };

  const handleBack = () => {
    if (times === 0) {
      message.warn('请先召测任意一个房间的电表');
    } else {
      showModal({ title: `楼房-${name}`, value, onOk: onFinish });
    }
  };

  return (
    <div className={styles.group}>
      <h2 style={{ color: '#777' }}>{`楼房${name}`}</h2>

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
