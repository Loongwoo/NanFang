import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import styles from './index.less';

const genG = v => {
  return Array(20)
    .fill(0)
    .reduce((r, _, i) => {
      r[i + 1] = v;
      return r;
    }, {});
};

const elecMsg = v => (v ? '恭喜你，电路正常！' : '糟糕，停电了！');

const elecClr = v => (v ? 'green' : 'red');

export default ({ selectedG, hasElec, onFinish }) => {
  const [gStatus, setGStatus] = useState(genG(true));

  const handleRoom = key => {
    Modal[hasElec ? 'success' : 'error']({
      title: `电表-${key}`,
      content: elecMsg(hasElec),
      okText: '知道了',
      onOk: () => {
        setGStatus({ ...gStatus, [key]: hasElec });
      },
    });
  };

  const handleBack = () => {
    Modal[hasElec ? 'success' : 'error']({
      title: `楼房-${selectedG}`,
      content: elecMsg(hasElec),
      okText: '知道了',
      onOk: () => {
        onFinish({ key: selectedG, value: hasElec });
      },
    });
  };

  return (
    <div className={styles.group}>
      <h2 style={{ color: '#777' }}>{`楼房${selectedG}`}</h2>

      <div className={styles.floors}>
        {Object.keys(gStatus).map(key => {
          const color = elecClr(gStatus[key]);
          return (
            <div
              key={key}
              className={styles.item}
              style={{ border: `1px solid ${color}`, color }}
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
