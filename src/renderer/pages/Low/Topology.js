import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import styles from './Topology.less';

const genG = v => {
  return Array(20)
    .fill(0)
    .reduce((r, _, i) => {
      r[i + 1] = v;
      return r;
    }, {});
};

export default ({ status, target, onUpdate, style }) => {
  const [selectedG, setSelectedG] = useState(null);
  const [gStatus, setGStatus] = useState(genG(true));

  if (selectedG) {
    const hasElec = target[selectedG];
    return (
      <div className={styles.group}>
        <h2>{`楼房${selectedG}`}</h2>

        <div className={styles.floors}>
          {Object.keys(gStatus).map(key => {
            const value = gStatus[key];
            const color = value ? 'green' : 'red';
            return (
              <div
                key={key}
                className={styles.item}
                style={{ border: `1px solid ${color}`, color }}
                onClick={() => {
                  if (hasElec) {
                    Modal.success({
                      title: `电表${key}有电`,
                      okText: '确定',
                      onOk: () => {
                        setGStatus({ ...gStatus, [key]: true });
                      },
                    });
                  } else {
                    Modal.error({
                      title: `电表${key}停电了`,
                      okText: '确定',
                      onOk: () => {
                        setGStatus({ ...gStatus, [key]: false });
                      },
                    });
                  }
                }}
              >
                {key}
              </div>
            );
          })}
        </div>

        <Button
          className={styles.finish}
          type="primary"
          size="large"
          onClick={() => {
            if (hasElec) {
              Modal.success({
                title: `楼房${selectedG}有电`,
                okText: '确定',
                onOk: () => {
                  onUpdate({ key: selectedG, value: true });
                  setSelectedG(null);
                },
              });
            } else {
              Modal.error({
                title: `楼房${selectedG}停电了`,
                okText: '确定',
                onOk: () => {
                  onUpdate({ key: selectedG, value: false });
                  setSelectedG(null);
                },
              });
            }
          }}
        >
          完成
        </Button>
      </div>
    );
  }

  const checkFloor = floor => {
    const value = status[floor];
    const gs = genG(value);
    setGStatus(gs);
    setSelectedG(floor);
  };

  return (
    <svg
      className={styles.main}
      height="1000"
      width="1000"
      viewBox="50 0 800 1000"
      style={style}
    >
      <g
        fill="#fff"
        strokeWidth="1"
        stroke="green"
        fontSize="20"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        <path d="m640 40h110" />
        <path className={styles.path1} d="m700 40v15" />
        {/* 701 */}
        <rect x="685" y="55" width="30" height="55" />
        <text x="700" y="81.5" transform="rotate(90,700,81.5)">
          701
        </text>

        <path className={styles.path1} d="m700 110v23h-200v50" />
        <path className={styles.path1} d="m500 154h-60" />

        {/* Tr1-1 */}
        <text x="410" y="120">
          Tr1-1
        </text>
        <circle cx="400" cy="154" r="20" />
        <circle cx="420" cy="154" r="20" />

        {/* Cb1-1 */}
        <text x="440" y="210">
          Cb1-1
        </text>
        <rect x="485" y="183" width="30" height="55" />
        <path className={styles.path1} d="m500 238v111" />

        <rect x="558" y="218" width="100" height="155" strokeDasharray="20" />

        {/* Tr1-2 */}
        <path className={styles.path1} d="m500 265h73" />
        <circle cx="593" cy="265" r="20" />
        <circle cx="613" cy="265" r="20" />
        <text x="700" y="265">
          Tr1-2
        </text>

        {/* Tr1-3 */}
        <path className={styles.path1} d="m500 328h73" />
        <circle cx="593" cy="328" r="20" />
        <circle cx="613" cy="328" r="20" />
        <text x="700" y="328">
          Tr1-3
        </text>

        {/* Cb1-2 */}
        <text x="440" y="377">
          Cb1-2
        </text>
        <rect x="485" y="350" width="30" height="55" />

        {/* Cb1-3 */}
        <path className={styles.path1} d="m500 422h-55" />
        <rect x="390" y="407" width="55" height="30" />
        <text x="350" y="422">
          Cb1-3
        </text>

        {/* Cb1-4 */}
        <path className={styles.path1} d="m500 405v40" />
        <rect x="473" y="445" width="55" height="30" />
        <text x="570" y="460">
          Cb1-4
        </text>

        {/* Tr1-4 */}
        <path className={styles.path1} d="m500 475v35" />
        <circle cx="500" cy="530" r="20" />
        <circle cx="500" cy="550" r="20" />
        <text x="570" y="540">
          Tr1-4
        </text>

        {/* FZX1-1 */}
        <g stroke={status.FZX11 ? 'green' : 'red'}>
          <path className={styles.path1} d="m500 570v40" />
          <rect
            x="473"
            y="610"
            width="55"
            height="30"
            onClick={() => {
              const hasElec = target.FZX11;
              if (hasElec) {
                Modal.success({
                  title: '开关FZX11有电',
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX11', value: true });
                  },
                });
              } else {
                Modal.error({
                  title: `开关FZX11停电了`,
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX11', value: false });
                  },
                });
              }
            }}
          />
          <text x="425" y="610">
            FZX1-1
          </text>
        </g>

        {/* FZX1-2 */}
        <g stroke={status.FZX11 && status.FZX12 ? 'green' : 'red'}>
          <path className={styles.path1} d="m473 625l-213 75" />
          <rect
            x="233"
            y="700"
            width="55"
            height="30"
            onClick={() => {
              const hasElec = target.FZX12;
              if (hasElec) {
                Modal.success({
                  title: '开关FZX12有电',
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX12', value: true });
                  },
                });
              } else {
                Modal.error({
                  title: `开关FZX12停电了`,
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX12', value: false });
                  },
                });
              }
            }}
          />
          <text x="180" y="715">
            FZX1-2
          </text>
        </g>

        {/* FZX1-3 */}
        <g stroke={status.FZX11 && status.FZX13 ? 'green' : 'red'}>
          <path className={styles.path1} d="M500 640v60" />
          <rect
            x="473"
            y="700"
            width="55"
            height="30"
            onClick={() => {
              const hasElec = target.FZX13;
              if (hasElec) {
                Modal.success({
                  title: '开关FZX13有电',
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX13', value: true });
                  },
                });
              } else {
                Modal.error({
                  title: `开关FZX13停电了`,
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX13', value: false });
                  },
                });
              }
            }}
          />
          <text x="420" y="715">
            FZX1-3
          </text>
        </g>

        {/* FZX1-4 */}
        <g stroke={status.FZX11 && status.FZX14 ? 'green' : 'red'}>
          <path className={styles.path1} d="m527 625l213 75" />
          <rect
            x="713"
            y="700"
            width="55"
            height="30"
            onClick={() => {
              const hasElec = target.FZX14;
              if (hasElec) {
                Modal.success({
                  title: '开关FZX14有电',
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX14', value: true });
                  },
                });
              } else {
                Modal.error({
                  title: `开关FZX14停电了`,
                  okText: '确定',
                  onOk: () => {
                    onUpdate({ key: 'FZX14', value: false });
                  },
                });
              }
            }}
          />
          <text x="660" y="715">
            FZX1-4
          </text>
        </g>

        {/* G1 */}
        <g stroke={status.FZX11 && status.FZX12 && status.G1 ? 'green' : 'red'}>
          <path className={styles.path1} d="m260 730l-160 70" />
          <rect
            x="70"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G1')}
          />
          <text x="100" y="960">
            G1
          </text>
        </g>

        {/* G2 */}
        <g stroke={status.FZX11 && status.FZX12 && status.G2 ? 'green' : 'red'}>
          <path className={styles.path1} d="m260 730v70" />
          <rect
            x="230"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G2')}
          />
          <text x="260" y="960">
            G2
          </text>
        </g>

        {/* G3 */}
        <g stroke={status.FZX11 && status.FZX13 && status.G3 ? 'green' : 'red'}>
          <path className={styles.path1} d="m500 730l-80 70" />
          <rect
            x="390"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G3')}
          />
          <text x="410" y="960">
            G3
          </text>
        </g>

        {/* G4 */}
        <g stroke={status.FZX11 && status.FZX13 && status.G4 ? 'green' : 'red'}>
          <path className={styles.path1} d="m500 730l80 70" />
          <rect
            x="550"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G4')}
          />
          <text x="580" y="960">
            G4
          </text>
        </g>

        {/* G5 */}
        <g stroke={status.FZX11 && status.FZX14 && status.G5 ? 'green' : 'red'}>
          <path className={styles.path1} d="m740 730v70" />
          <rect
            x="710"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G5')}
          />
          <text x="740" y="960">
            G5
          </text>
        </g>
      </g>
    </svg>
  );
};
