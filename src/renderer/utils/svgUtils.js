import { Modal } from 'antd';

export const xmlns = 'http://www.w3.org/2000/svg';

export const showModal = ({ value, ...rest }) =>
  Modal[value ? 'success' : 'error']({
    content: value ? '恭喜你，电路正常！' : '糟糕，停电了！',
    okText: '知道了',
    ...rest,
  });

export const blinkBlue = () => {
  const animate = document.createElementNS(xmlns, 'animate');
  animate.setAttributeNS(null, 'id', 'blink-blue');
  animate.setAttributeNS(null, 'attributeName', 'fill');
  animate.setAttributeNS(null, 'dur', '1s');
  animate.setAttributeNS(null, 'repeatCount', 'indefinite');
  animate.setAttributeNS(null, 'keyTimes', '0;0.5;1');
  animate.setAttributeNS(null, 'calcMode', 'linear');
  animate.setAttributeNS(
    null,
    'values',
    'rgba(0, 0, 255, 0.5);rgba(0, 0, 255, 0);rgba(0, 0, 255, 0.5)'
  );
  return animate;
};

export const dashGreen = () => {
  const animate = document.createElementNS(xmlns, 'animate');
  animate.setAttributeNS(null, 'id', 'dash-green');
  animate.setAttributeNS(null, 'attributeName', 'stroke-dashoffset');
  animate.setAttributeNS(null, 'dur', '1s');
  animate.setAttributeNS(null, 'repeatCount', 'indefinite');
  animate.setAttributeNS(null, 'keyTimes', '0;1');
  animate.setAttributeNS(null, 'calcMode', 'linear');
  animate.setAttributeNS(null, 'values', '40;0');
  return animate;
};

export const addClkEvt = (id, event) => {
  const el = document.getElementById(id);
  if (el) {
    el.appendChild(blinkBlue());
    el.addEventListener('click', event, false);
  }
};

export const rmvClkEvt = (id, event) => {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = '';
    el.removeEventListener('click', event, false);
    el.setAttribute('fill', 'none');
  }
};

export const setStroke = (id, color, dash) => {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute('stroke', color);

    if (dash) {
      el.appendChild(dashGreen());
    } else {
      el.innerHTML = null;
    }
  }
};
