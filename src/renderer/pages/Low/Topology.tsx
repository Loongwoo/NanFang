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

const elecMsg = v => (v ? '恭喜你，电路正常！' : '糟糕，停电了！');

const elecClr = v => (v ? 'green' : 'red');

const elecPath = v => (v ? styles.path1 : styles.path2);

export default ({ status, target, onUpdate, style }) => {
  const [selectedG, setSelectedG] = useState(null);
  const [gStatus, setGStatus] = useState(genG(true));

  if (selectedG) {
    const hasElec = target[selectedG];

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
          onUpdate({ key: selectedG, value: hasElec });
          setSelectedG(null);
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
  }

  const checkFloor = floor => {
    const value = status[floor];
    const gs = genG(value);
    setGStatus(gs);
    setSelectedG(floor);
  };

  const handleSwich = key => {
    const value = target[key];
    const s = key.length - 1;
    Modal[value ? 'success' : 'error']({
      title: `开关-${key.slice(0, s)}-${key.slice(s)}`,
      content: elecMsg(value),
      okText: '知道了',
      onOk: () => onUpdate({ key, value }),
    });
  };

  return (
    <>
      <h3 className={styles.title}>拓扑图</h3>
      <div className={styles.legend}>
        <div className={styles.l1}>绿色线条代表有电</div>
        <div className={styles.l2}>红色线条代表停电</div>
      </div>

      <svg
        className={styles.main}
        height="1000"
        width="1000"
        viewBox="0 0 800 1000"
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
          <text
            x="700"
            y="81.5"
            transform="rotate(90,700,81.5)"
            fill="green"
            stroke="none"
          >
            701
          </text>

          <path className={styles.path1} d="m700 110v23h-200v50" />
          <path className={styles.path1} d="m500 154h-60" />

          {/* Tr1-1 */}
          <text x="410" y="120" fill="green" stroke="none">
            Tr1-1
          </text>
          <circle cx="400" cy="154" r="20" />
          <circle cx="420" cy="154" r="20" />

          {/* Cb1-1 */}
          <text x="440" y="210" fill="green" stroke="none">
            Cb1-1
          </text>
          <rect x="485" y="183" width="30" height="55" />
          <path className={styles.path1} d="m500 238v111" />

          <rect x="558" y="218" width="100" height="155" strokeDasharray="20" />

          {/* Tr1-2 */}
          <path className={styles.path1} d="m500 265h73" />
          <circle cx="593" cy="265" r="20" />
          <circle cx="613" cy="265" r="20" />
          <text x="700" y="265" fill="green" stroke="none">
            Tr1-2
          </text>

          {/* Tr1-3 */}
          <path className={styles.path1} d="m500 328h73" />
          <circle cx="593" cy="328" r="20" />
          <circle cx="613" cy="328" r="20" />
          <text x="700" y="328" fill="green" stroke="none">
            Tr1-3
          </text>

          {/* Cb1-2 */}
          <text x="440" y="377" fill="green" stroke="none">
            Cb1-2
          </text>
          <rect x="485" y="350" width="30" height="55" />

          {/* Cb1-3 */}
          <path className={styles.path1} d="m500 422h-55" />
          <rect x="390" y="407" width="55" height="30" />
          <text x="350" y="422" fill="green" stroke="none">
            Cb1-3
          </text>

          {/* Cb1-4 */}
          <path className={styles.path1} d="m500 405v40" />
          <rect x="473" y="445" width="55" height="30" />
          <text x="570" y="460" fill="green" stroke="none">
            Cb1-4
          </text>

          {/* Tr1-4 */}
          <path className={styles.path1} d="m500 475v35" />
          <circle cx="500" cy="530" r="20" />
          <circle cx="500" cy="550" r="20" />
          <text x="570" y="540" fill="green" stroke="none">
            Tr1-4
          </text>

          {/* FZX1-1 */}
          <path
            className={elecPath(status.FZX11)}
            d="m500 570v40"
            stroke={elecClr(status.FZX11)}
          />
          <rect
            x="473"
            y="610"
            width="55"
            height="30"
            stroke={elecClr(status.FZX11)}
            onClick={() => handleSwich('FZX11')}
          />
          <text x="425" y="610" fill={elecClr(status.FZX11)} stroke="none">
            FZX1-1
          </text>

          {/* FZX1-2 */}
          <path
            className={elecPath(status.FZX12)}
            d="m473 625l-213 75"
            stroke={elecClr(status.FZX12)}
          />
          <rect
            x="233"
            y="700"
            width="55"
            height="30"
            stroke={elecClr(status.FZX12)}
            onClick={() => handleSwich('FZX12')}
          />
          <text x="180" y="715" fill={elecClr(status.FZX12)} stroke="none">
            FZX1-2
          </text>

          {/* FZX1-3 */}
          <path
            className={elecPath(status.FZX13)}
            d="M500 640v60"
            stroke={elecClr(status.FZX13)}
          />
          <rect
            x="473"
            y="700"
            width="55"
            height="30"
            stroke={elecClr(status.FZX13)}
            onClick={() => handleSwich('FZX13')}
          />
          <text x="420" y="715" fill={elecClr(status.FZX13)} stroke="none">
            FZX1-3
          </text>

          {/* FZX1-4 */}
          <path
            className={elecPath(status.FZX14)}
            d="m527 625l213 75"
            stroke={elecClr(status.FZX14)}
          />
          <rect
            x="713"
            y="700"
            width="55"
            height="30"
            stroke={elecClr(status.FZX14)}
            onClick={() => handleSwich('FZX14')}
          />
          <text x="660" y="715" fill={elecClr(status.FZX14)} stroke="none">
            FZX1-4
          </text>

          {/* G1 */}
          <path
            className={elecPath(status.G1)}
            d="m260 730l-160 70"
            stroke={elecClr(status.G1)}
          />
          <rect
            x="70"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G1')}
            stroke={elecClr(status.G1)}
          />
          <text x="100" y="960" fill={elecClr(status.G1)} stroke="none">
            G1
          </text>

          {/* G2 */}
          <path
            className={elecPath(status.G2)}
            d="m260 730v70"
            stroke={elecClr(status.G2)}
          />

          <rect
            x="230"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G2')}
            stroke={elecClr(status.G2)}
          />
          <text x="260" y="960" fill={elecClr(status.G2)} stroke="none">
            G2
          </text>

          {/* G3 */}
          <path
            className={elecPath(status.G3)}
            d="m500 730l-80 70"
            stroke={elecClr(status.G3)}
          />
          <rect
            x="390"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G3')}
            stroke={elecClr(status.G3)}
          />
          <text x="410" y="960" fill={elecClr(status.G3)} stroke="none">
            G3
          </text>

          {/* G4 */}
          <path
            className={elecPath(status.G4)}
            d="m500 730l80 70"
            stroke={elecClr(status.G4)}
          />
          <rect
            x="550"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G4')}
            stroke={elecClr(status.G4)}
          />
          <text x="580" y="960" fill={elecClr(status.G4)} stroke="none">
            G4
          </text>

          {/* G5 */}
          <path
            className={elecPath(status.G5)}
            d="m740 730v70"
            stroke={elecClr(status.G5)}
          />
          <rect
            x="710"
            y="800"
            width="60"
            height="130"
            onClick={() => checkFloor('G5')}
            stroke={elecClr(status.G5)}
          />
          <text x="740" y="960" fill={elecClr(status.G5)} stroke="none">
            G5
          </text>
        </g>
      </svg>
    </>
  );
};
