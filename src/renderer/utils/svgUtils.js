import { Modal, message } from 'antd';

export const xmlns = 'http://www.w3.org/2000/svg';

export const showModal = ({ value, ...rest }) =>
  Modal[value ? 'success' : 'error']({
    content: value ? '恭喜你，电路正常！' : '糟糕，停电了！',
    okText: '知道了',
    ...rest,
  });

export const askModal = ({ title, value, onOk }) =>
  Modal.confirm({
    title,
    content: '请问此处是否停电？',
    okText: '有电',
    cancelText: '停电',
    onOk: () => {
      if (value) {
        onOk();
      } else {
        message.info('判断错误，请重新判断');
      }
    },
    onCancel: () => {
      if (!value) {
        onOk();
      } else {
        message.info('判断错误，请重新判断');
      }
    },
  });

export const blinkBlue = (id, n = 'fill') => blink(id, 0, 0, 255, 0.8, n);

export const blinkYellow = (id, n = 'fill') => blink(id, 255, 255, 0, 0.8, n);

export const blinkRed = (id, n = 'fill') => blink(id, 255, 0, 0, 0.8, n);

export const getEl = o =>
  typeof o === 'string' ? document.getElementById(o) : o;

export const blink = (id, r, g, b, a, n) => {
  const el = getEl(id);
  if (el) {
    const values = `rgba(${r}, ${g}, ${b}, ${a});rgba(${r}, ${g}, ${b}, 0);rgba(${r}, ${g}, ${b}, ${a})`;
    const animate = document.createElementNS(xmlns, 'animate');
    animate.setAttributeNS(null, 'id', 'blink-yellow');
    animate.setAttributeNS(null, 'attributeName', n);
    animate.setAttributeNS(null, 'dur', '1s');
    animate.setAttributeNS(null, 'repeatCount', 'indefinite');
    animate.setAttributeNS(null, 'keyTimes', '0;0.5;1');
    animate.setAttributeNS(null, 'calcMode', 'linear');
    animate.setAttributeNS(null, 'values', values);
    el.appendChild(animate);
  }
};

export const dashAnimate = id => {
  const el = getEl(id);
  if (el) {
    const animate = document.createElementNS(xmlns, 'animate');
    animate.setAttributeNS(null, 'id', 'dash-green');
    animate.setAttributeNS(null, 'attributeName', 'stroke-dashoffset');
    animate.setAttributeNS(null, 'dur', '1s');
    animate.setAttributeNS(null, 'repeatCount', 'indefinite');
    animate.setAttributeNS(null, 'keyTimes', '0;1');
    animate.setAttributeNS(null, 'calcMode', 'linear');
    animate.setAttributeNS(null, 'values', '40;0');
    el.appendChild(animate);
  }
};

export const clearFill = id => {
  const el = getEl(id);
  if (el) {
    el.setAttribute('fill', 'none');
    el.innerHTML = '';
  }
};

export const addClkEvt = (id, event) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', event, false);
  }
};

export const rmvClkEvt = (id, event) => {
  const el = document.getElementById(id);
  if (el) {
    el.removeEventListener('click', event, false);
  }
};

export const setStroke = (id, color, dash) => {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute('stroke', color);

    if (dash) {
      dashAnimate(el);
    } else {
      el.innerHTML = '';
    }
  }
};

export const setHref = (id, href) => {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute('xlink:href', href);
  }
};

export const setSW = (id, width) => {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute('stroke-width', width);
  }
};
