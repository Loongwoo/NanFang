import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import SVG from '@/components/ReactSVG';
import styles from './index.less';
import Loading from '../Loading';
import { AutoSizer } from 'react-virtualized';
import classNames from 'classnames';

const StartLeft = 240;
const StartTop = 44;
const ScaleArray = [1, 2, 4, 8];

export default ({ className, src, title, lengend = true, child, onLoad }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = document.getElementById('svg-container');

    let started = false;
    let eX = 0;
    let eY = 0;

    const handleDrag = e => {
      if (scale === 1) {
        return;
      }
      const { type, clientX, clientY } = e;
      if (type === 'mousedown') {
        const { scrollLeft, scrollTop } = el;
        started = true;
        eY = scrollTop + clientY;
        eX = scrollLeft + clientX;
      } else if (type === 'mouseup') {
        started = false;
      } else if (type === 'mousemove' && started) {
        el.scrollTop = eY - clientY;
        el.scrollLeft = eX - clientX;
        const px = clientX - StartLeft;
        const py = clientY - StartTop;
        const { clientWidth: w1, clientHeight: h1 } = el;
        if (px <= 5 || py <= 5 || px >= w1 - 5 || py >= h1 - 5) {
          started = false;
        }
      }
    };

    const doubleClick = e => {
      if (scale === 8) {
        setScale(1);
        return;
      }

      const { clientX, clientY } = e;
      const { scrollTop, scrollLeft, scrollWidth: w1, scrollHeight: h1 } = el;
      const rx = clientX - StartLeft;
      const ry = clientY - StartTop;
      const x = (scrollLeft + rx) / w1;
      const y = (scrollTop + ry) / h1;

      setScale(scale * 2);

      const { scrollWidth: w2, scrollHeight: h2 } = el;
      setScroll({
        top: h2 * y - ry,
        left: w2 * x - rx,
      });
    };

    let timer = null;
    const handleScroll = e => {
      const { scrollTop: top0, scrollLeft: left0 } = e.target;
      clearTimeout(timer);
      timer = setTimeout(() => {
        const { scrollTop: top, scrollLeft: left } = e.target;
        if (top0 === top && left0 === left) {
          setScroll({ top, left });
        }
      }, 1000);
    };

    if (el) {
      el.addEventListener('mousedown', handleDrag, false);
      el.addEventListener('mousemove', handleDrag, false);
      el.addEventListener('mouseup', handleDrag, false);
      el.addEventListener('dblclick', doubleClick, false);
      el.addEventListener('scroll', handleScroll, false);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousedown', handleDrag, false);
        el.removeEventListener('mousemove', handleDrag, false);
        el.removeEventListener('mouseup', handleDrag, false);
        el.removeEventListener('dblclick', doubleClick, false);
        el.removeEventListener('scroll', handleScroll, false);
      }
      clearTimeout(timer);
    };
  }, [scale]);

  const [scroll, setScroll] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const el = document.getElementById('svg-container');
    if (el) {
      el.scrollTop = scroll.top;
      el.scrollLeft = scroll.left;
    }
  }, [scroll]);

  const handleScale = s => {
    if (scale === s) {
      return;
    }
    const el = document.getElementById('svg-container');
    const {
      scrollTop,
      scrollLeft,
      clientWidth,
      clientHeight,
      scrollWidth: w1,
      scrollHeight: h1,
    } = el;
    const x = (scrollLeft + clientWidth / 2) / w1;
    const y = (scrollTop + clientHeight / 2) / h1;

    setScale(s);

    const recovery = () => {
      const {
        clientHeight: ch2,
        clientWidth: cw2,
        scrollWidth: w2,
        scrollHeight: h2,
      } = el;
      if (w1 !== w2 && h1 !== h2) {
        setScroll({
          top: h2 * y - ch2 / 2,
          left: w2 * x - cw2 / 2,
        });
      } else {
        setTimeout(recovery, 100);
      }
    };
    setTimeout(recovery, 100);
  };

  const style = { width: `${100 * scale}%`, height: `${100 * scale - 1}%` };

  return (
    <div className={classNames(className, styles.main)}>
      {child ? (
        child
      ) : (
        <>
          <div
            id="svg-container"
            className={styles.svgContainer}
            style={{ cursor: 'pointer' }}
          >
            <AutoSizer style={style}>
              {({ width, height }) => (
                <SVG
                  id="my-svg"
                  src={src}
                  loader={<Loading />}
                  onLoad={onLoad}
                  onError={e => {
                    // tslint:disable-next-line: no-console
                    console.log('svg', e);
                    message.error(e.message);
                  }}
                  width="100%"
                  height="100%"
                />
              )}
            </AutoSizer>

            {title && <h3 className={styles.title}>{title}</h3>}
            {lengend && (
              <div className={styles.legend}>
                <div className={styles.l1}>绿色线条代表有电</div>
                <div className={styles.l2}>红色线条代表停电</div>
              </div>
            )}
          </div>

          <div className={styles.footer}>
            {ScaleArray.map(a => (
              <Button
                key={a}
                ghost={scale !== a}
                type="primary"
                shape="circle"
                style={{ marginLeft: a > 1 ? 20 : 0 }}
                onClick={() => handleScale(a)}
              >
                {`${a}X`}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
