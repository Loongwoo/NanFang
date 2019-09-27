import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import styles from './Topology.less';

export default ({ style }) => {
  useEffect(() => {
    const el = document.getElementById('topology');

    const arr = el.getElementsByTagName('text');
    console.log('arr', arr);
    const res = Array.from(arr).map(a => {
      const key = Object.keys(a).filter(
        b => b.indexOf('__reactEventHandlers') !== -1
      )[0];
      return a[key];
    });
    console.log('res', JSON.stringify(res));
  });

  return (
    <>
      <svg
        id="topology"
        width="2866"
        height="2027"
        viewBox="0 0 2866 2027"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={style}
      >
        <symbol id="a" preserveAspectRatio="xMidYMid">
          <circle r="1" visibility="hidden" />
        </symbol>

        <symbol id="b" preserveAspectRatio="xMidYMid" viewBox="0 0 12 17.3">
          <use x="6" xlinkHref="#a" y="1" />
          <use x="6" xlinkHref="#a" y="16" />
          <path d="m5 16 5-8h-10z" stroke="#000" />
          <path d="m6 7.6v-6.6" stroke="#000" />
        </symbol>

        <symbol id="c" preserveAspectRatio="xMidYMid" viewBox="0 0 14.2 36.7">
          <use x="7.1" xlinkHref="#a" y=".4" />
          <use x="7.1" xlinkHref="#a" y="35.4" />
          <path d="m2.3 8.5h10v20h-10z" fill="#f00" stroke="#ffb0b0" />
          <path d="m12 31-6 4-5-4" fill="none" stroke="#ffb0b0" />
          <path d="m12 5-6-4-5 4" fill="none" stroke="#ffb0b0" />
          <path d="m7.1 8.4-.1-7.4" stroke="#ffb0b0" />
          <path d="m7 35.7.1-7.3" stroke="#ffb0b0" />
        </symbol>

        <symbol id="d" preserveAspectRatio="xMidYMid" viewBox="0 0 12 17.3">
          <use x="6" xlinkHref="#a" y="1" />
          <use x="6" xlinkHref="#a" y="16" />
          <path d="m5 16 5-8h-10z" stroke="#000" />
          <path d="m6 7.6v-6.6" stroke="#000" />
        </symbol>

        <symbol id="e" preserveAspectRatio="xMidYMid" viewBox="0 0 34 71.7">
          <use x="17" xlinkHref="#a" y="1" />
          <circle
            cx="17"
            cy="34.7"
            fill="none"
            r="16"
            stroke="#000"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="54.7"
            fill="none"
            r="16"
            stroke="#000"
            strokeWidth="2"
          />
          <path d="m17 19v-18" stroke="#000" strokeWidth="2" />
        </symbol>

        <symbol id="f" preserveAspectRatio="xMidYMid" viewBox="0 0 16.3 37">
          <use x="8.1" xlinkHref="#a" y="1" />
          <use x="8.1" xlinkHref="#a" y="36" />
          <path d="m8.1 36v-11" stroke="#0f0" />
          <path d="m8.1 12v-11" stroke="#0f0" />
          <path d="m4.1 12h8.1" stroke="#0f0" />
          <circle cx="8.1" cy="14.3" fill="none" r="2" stroke="#0f0" />
          <path d="m8.1 24.6-7.1-12.1" stroke="#0f0" />
        </symbol>

        <symbol id="g" preserveAspectRatio="xMidYMid" viewBox="0 0 16.3 37">
          <use x="8.1" xlinkHref="#a" y="1" />
          <use x="8.1" xlinkHref="#a" y="36" />
          <path d="m8.1 36v-11" stroke="#f00" />
          <path d="m8.1 12v-11" stroke="#f00" />
          <path d="m4.1 12h8.1" stroke="#f00" />
          <circle cx="8.1" cy="14.3" fill="none" r="2" stroke="#f00" />
          <path d="m8.2 24.4-3.9-12.3" stroke="#f00" />
        </symbol>

        <symbol id="h" preserveAspectRatio="xMidYMid" viewBox="0 0 23 32">
          <use x="22" xlinkHref="#a" y="1" />
          <path d="m7 7v-6" stroke="#000" />
          <path d="m5 7h4" stroke="#000" />
          <path d="m7 17-.1 8" stroke="#000" />
          <path d="m2 25.5h10" stroke="#000" />
          <path d="m4 28.2h6" stroke="#000" />
          <path d="m5 31h4" stroke="#000" />
          <path d="m1.5 6.9 5.2 9" stroke="#000" />
          <path d="m7 1h15" stroke="#000" />
        </symbol>

        <symbol id="i" preserveAspectRatio="xMidYMid" viewBox="0 0 34 71.7">
          <use x="17" xlinkHref="#a" y="1" />
          <path d="m17 19v-18" stroke="#000" strokeWidth="2" />
          <circle
            cx="17"
            cy="34.7"
            fill="none"
            r="16"
            stroke="#000"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="54.7"
            fill="none"
            r="16"
            stroke="#000"
            strokeWidth="2"
          />
          <path
            d="m5.6 45 .7.7 1 .9 1.3 1 1.4.8 1.8.7 1.7.6 2.3.4h2l2.1-.2 2.2-.6 1.8-.61.5-1.1 1.4-1 1-1 .8-.8-1.4-1.4-1.7-1.3-2-1.1-2.2-.8-2.5-.5-2.2-.2-2.3.3-1.9.5-2.2.9-1.8 1.1-1.4 1.2-1.3 1.3z"
            stroke="#000"
          />
        </symbol>

        <symbol id="j" preserveAspectRatio="xMidYMid" viewBox="0 0 18.2 37">
          <use x="9.1" xlinkHref="#a" y="1" />
          <use x="9.1" xlinkHref="#a" y="36" />
          <path
            d="m9.6 22.3-2.2-6.4-3.4 1.2 2.3 6.5z"
            fill="none"
            stroke="#f00"
          />
          <path d="m9.1 36v-10" stroke="#f00" />
          <path d="m9.1 11v-10" stroke="#f00" />
          <circle cx="9.2" cy="13.1" fill="none" r="2" stroke="#f00" />
          <path d="m4.1 11h10" stroke="#f00" />
          <path d="m9.1 26.1-5.1-14.6" stroke="#f00" />
        </symbol>

        <symbol id="k" preserveAspectRatio="xMidYMid" viewBox="0 0 37 42">
          <use x="1" xlinkHref="#a" y="1" />
          <use x="1" xlinkHref="#a" y="41" />
          <path d="m30 1v12" stroke="#000" />
          <path d="m30 29v6" stroke="#000" />
          <path d="m24 35h12" stroke="#000" />
          <path d="m27 38h6" stroke="#000" />
          <path d="m28 41h4" stroke="#000" />
          <path d="m26 9h8v20h-8z" fill="none" stroke="#000" />
          <path d="m29 19 2-6h-4z" stroke="#000" />
          <path d="m1 1h29" stroke="#000" />
        </symbol>

        <symbol id="l" preserveAspectRatio="xMidYMid" viewBox="0 0 16 37">
          <use x="8" xlinkHref="#a" y="1" />
          <use x="8" xlinkHref="#a" y="36" />
          <path d="m8 25v11" stroke="#f00" />
          <path d="m5.5 12h5" stroke="#f00" />
          <path d="m8 12v-11" stroke="#f00" />
          <path d="m8.2 25.3-3.6-14" stroke="#f00" />
        </symbol>

        <symbol id="m" preserveAspectRatio="xMidYMid" viewBox="0 0 16 37">
          <use x="8" xlinkHref="#a" y="1" />
          <use x="8" xlinkHref="#a" y="36" />
          <path d="m8 25v11" stroke="#0f0" />
          <path d="m5.5 12h5" stroke="#0f0" />
          <path d="m8 12v-11" stroke="#0f0" />
          <path d="m8.2 25.3-7.2-13.3" stroke="#0f0" />
        </symbol>

        <symbol id="n" preserveAspectRatio="xMidYMid" viewBox="0 0 18.8 37">
          <use x="9.4" xlinkHref="#a" y="1" />
          <use x="9.4" xlinkHref="#a" y="36" />
          <path d="m9.4 36v-11" stroke="#f00" />
          <path d="m9.4 12v-11" stroke="#f00" />
          <path d="m6.4 9.7 6 5" stroke="#f00" />
          <path d="m9.5 24.6-4.4-14" stroke="#f00" />
          <path d="m6.6 14.7 5.6-5" stroke="#f00" />
          <path d="m3.3 16.9 1.5 4.6 3-.9-1.4-4.6z" fill="#f00" stroke="#f00" />
        </symbol>

        <symbol id="o" preserveAspectRatio="xMidYMid" viewBox="0 0 18.8 37">
          <use x="9.4" xlinkHref="#a" y="1" />
          <use x="9.4" xlinkHref="#a" y="36" />
          <path d="m9.4 36v-11" stroke="#0f0" />
          <path d="m9.4 12v-11" stroke="#0f0" />
          <path d="m6.4 9.7 6 5" stroke="#0f0" />
          <path d="m9.5 25.2-7.1-12.2" stroke="#0f0" />
          <path d="m6.6 14.7 5.6-5" stroke="#0f0" />
          <path
            d="m1 19.1 2.5 4.2 3.5-1.8-2.6-4.4z"
            fill="#0ff"
            stroke="#0f0"
          />
        </symbol>

        <symbol id="p" preserveAspectRatio="xMidYMid" viewBox="0 0 19 27">
          <use x="9.5" xlinkHref="#a" y="1" />
          <use x="9.5" xlinkHref="#a" y="26" />
          <path d="m9.5 1v4.3" stroke="#000" />
          <path d="m6 5.5v15.6h7l.1-15.5z" fill="none" stroke="#000" />
          <path d="m9.5 6v15" stroke="#000" />
          <path d="m9.5 21.1v4.9" stroke="#000" />
        </symbol>

        <symbol id="q" preserveAspectRatio="xMidYMid" viewBox="0 0 20 22">
          <use x="10" xlinkHref="#a" y="1" />
          <path d="m10 1v5" stroke="#000" />
          <circle cx="10" cy="11" fill="none" r="5" stroke="#000" />
          <circle cx="6" cy="16" fill="none" r="5" stroke="#000" />
          <circle cx="14" cy="16" fill="none" r="5" stroke="#000" />
        </symbol>

        <symbol id="r" preserveAspectRatio="xMidYMid" viewBox="0 0 12 25.1">
          <use x="6" xlinkHref="#a" y="1" />
          <path d="m3 9 3 5 3-5" fill="none" stroke="#000" />
          <path d="m3 17 3 5 3-5" fill="none" stroke="#000" />
          <path d="m6 1v5" stroke="#000" />
          <circle cx="6" cy="11" fill="none" r="5" stroke="#000" />
          <circle cx="6" cy="19.1" fill="none" r="5" stroke="#000" />
        </symbol>

        <symbol id="s" preserveAspectRatio="xMidYMid" viewBox="0 0 22 21.9">
          <use x="11" xlinkHref="#a" y="10.9" />
          <circle cx="10.9" cy="10.9" fill="none" r="8" stroke="#000" />
          <path d="m9 7h4l-2-6z" stroke="#000" />
          <path d="m1 11h20" stroke="#000" />
          <path d="m11 20.9v-13.9" stroke="#000" />
        </symbol>

        {/* 莲塘变电站 */}
        <path
          d="m157.6 1749.3v-96.7h167.1v96.7z"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />

        <g fill="none" stroke="#141414" strokeWidth="2">
          <path d="m860.1 1151.3v-271h223v271z" />
          <path d="m2450.6 845.8v-250h235v250z" />
          <path d="m2128.6 1015.8v-119h56v119z" strokeWidth="1" />
          <path d="m313.6 1293.8v-297h499v297z" />
          <path d="m224.6 794.8v-296h390v296z" />
          <path d="m1902.6 747.8v-281h364v281z" />
          <path d="m1595.6 747.8v-246h189v246z" />
          <path d="m1210.6 745.8v-246h234v246z" />
          <path d="m885.6 757.8v-258h191v258z" />
          <path d="m680.6 751.8v-246h109v246z" />
          <path d="m243.6 347.8v-259h411v259z" />
          <path d="m909.6 279.8v-135h306v135z" />
          <path d="m1126.6 1243.8v-299h466v299z" />
          <path d="m1462.6 1666.8v-296h495v296z" />
          <path d="m2008.6 1582.8v-245h179v245z" strokeWidth="1" />
          <path d="m1639.1 1218.8v-246h198v246z" />
          <path d="m1879.6 1214.8v-216h192v216z" />
        </g>

        <g transform="scale(.81)">
          <use x="539.1" y="1331.4" width="12" height="17.3" xlinkHref="#b" />
          <use x="433" y="1331.4" width="12" height="17.3" xlinkHref="#b" />
          <use x="484.8" y="1331.4" width="12" height="17.3" xlinkHref="#b" />
          <use x="593.4" y="1331.4" width="12" height="17.3" xlinkHref="#b" />
          <use x="403.9" y="211.1" width="12" height="17.3" xlinkHref="#b" />
          <use x="603.9" y="211.1" width="12" height="17.3" xlinkHref="#b" />
          <use x="512.6" y="211.1" width="12" height="17.3" xlinkHref="#b" />
          <use x="2100.9" y="222.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="1295.3" y="238.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="1184.2" y="238.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="1437.3" y="285.1" width="12" height="17.3" xlinkHref="#b" />
          <use x="1754.6" y="1267.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="1437.3" y="1267.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="1702.7" y="1267.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="1115.7" y="1143.8" width="12" height="17.3" xlinkHref="#b" />
          <use x="2014.4" y="1794.4" width="12" height="17.3" xlinkHref="#b" />
          <use x="2068.8" y="1794.4" width="12" height="17.3" xlinkHref="#b" />
          <use x="2786.7" y="1317.8" width="12" height="17.3" xlinkHref="#b" />
          <use x="3133.6" y="1317.8" width="12" height="17.3" xlinkHref="#b" />
          <use x="3087.3" y="791.9" width="12" height="17.3" xlinkHref="#b" />
          <use x="488.5" y="716.6" width="12" height="17.3" xlinkHref="#b" />
          <use x="423.1" y="716.6" width="12" height="17.3" xlinkHref="#b" />
          <use x="550.2" y="716.6" width="12" height="17.3" xlinkHref="#b" />
          <use x="858.3" y="681.4" width="12" height="17.3" xlinkHref="#b" />
          <use x="2565.7" y="676.5" width="12" height="17.3" xlinkHref="#b" />
          <use x="2623.7" y="676.5" width="12" height="17.3" xlinkHref="#b" />
          <use x="2155.2" y="676.5" width="12" height="17.3" xlinkHref="#b" />
          <use x="1735.4" y="674" width="12" height="17.3" xlinkHref="#b" />
          <use x="1673.7" y="674" width="12" height="17.3" xlinkHref="#b" />
          <use x="1281.1" y="674" width="12" height="17.3" xlinkHref="#b" />
          <use x="2865.7" y="245" width="12" height="17.3" xlinkHref="#b" />
          <use x="2459.5" y="676.5" width="12" height="17.3" xlinkHref="#b" />
          <use x="2510.1" y="676.5" width="12" height="17.3" xlinkHref="#b" />
          <use x="1803.9" y="1267.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="2041.6" y="1258" width="12" height="17.3" xlinkHref="#b" />
          <use x="2104.6" y="1258" width="12" height="17.3" xlinkHref="#b" />
          <use x="2948.4" y="245" width="12" height="17.3" xlinkHref="#b" />
          <use x="2045.3" y="222.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="2163.8" y="222.2" width="12" height="17.3" xlinkHref="#b" />
          <use x="2758.3" y="245" width="12" height="17.3" xlinkHref="#b" />
          <use x="2370" y="1290.1" width="12" height="17.3" xlinkHref="#b" />
          <use x="3050.9" y="1317.8" width="12" height="17.3" xlinkHref="#b" />
          <use x="2497.1" y="1708.6" width="12" height="17.3" xlinkHref="#b" />
          <use x="2123.1" y="1794.4" width="12" height="17.3" xlinkHref="#b" />
        </g>

        <g transform="scale(.9)">
          <use x="640.2" y="1198.2" width="12" height="17.3" xlinkHref="#d" />
          <use x="1136.8" y="1058.2" width="12" height="17.3" xlinkHref="#d" />
          <use x="1092.4" y="1029.3" width="12" height="17.3" xlinkHref="#d" />
          <use x="2916.8" y="718.2" width="12" height="17.3" xlinkHref="#d" />
          <use x="543.5" y="644.8" width="12" height="17.3" xlinkHref="#d" />
          <use x="599.1" y="644.8" width="12" height="17.3" xlinkHref="#d" />
          <use x="2158.5" y="608.7" width="12" height="17.3" xlinkHref="#d" />
          <use x="1827.9" y="608.7" width="12" height="17.3" xlinkHref="#d" />
          <use x="1883.5" y="608.7" width="12" height="17.3" xlinkHref="#d" />
          <use x="1389.1" y="606.5" width="12" height="17.3" xlinkHref="#d" />
          <use x="1444.6" y="606.5" width="12" height="17.3" xlinkHref="#d" />
          <use x="1030.2" y="606.5" width="12" height="17.3" xlinkHref="#d" />
          <use x="1107.9" y="606.5" width="12" height="17.3" xlinkHref="#d" />
          <use x="2526.3" y="220.4" width="12" height="17.3" xlinkHref="#d" />
          <use x="821.3" y="613.2" width="12" height="17.3" xlinkHref="#d" />
          <use x="316.3" y="189.8" width="12" height="17.3" xlinkHref="#d" />
          <use x="411.8" y="189.8" width="12" height="17.3" xlinkHref="#d" />
          <use x="489.6" y="338.7" width="12" height="17.3" xlinkHref="#d" />
          <use x="584.1" y="338.7" width="12" height="17.3" xlinkHref="#d" />
          <use x="1126.3" y="214.3" width="12" height="17.3" xlinkHref="#d" />
          <use x="1220.7" y="262.1" width="12" height="17.3" xlinkHref="#d" />
          <use x="1781.3" y="199.8" width="12" height="17.3" xlinkHref="#d" />
          <use x="1477.4" y="1140.4" width="12" height="17.3" xlinkHref="#d" />
          <use x="1422.9" y="1140.4" width="12" height="17.3" xlinkHref="#d" />
          <use x="1704.6" y="1614.8" width="12" height="17.3" xlinkHref="#d" />
          <use x="1757.9" y="1614.8" width="12" height="17.3" xlinkHref="#d" />
          <use x="2554.1" y="1186" width="12" height="17.3" xlinkHref="#d" />
          <use x="2619.6" y="1186" width="12" height="17.3" xlinkHref="#d" />
          <use x="2690.7" y="1186" width="12" height="17.3" xlinkHref="#d" />
          <use x="2363.5" y="1537.6" width="12" height="17.3" xlinkHref="#d" />
          <use x="1997.9" y="1132.1" width="12" height="17.3" xlinkHref="#d" />
          <use x="1947.9" y="1132.1" width="12" height="17.3" xlinkHref="#d" />
          <use x="1053.5" y="1029.3" width="12" height="17.3" xlinkHref="#d" />
        </g>

        <use
          transform="matrix(-.9 0 0 -.9 2057.2 2112.8)"
          x="1136.9"
          y="1165.1"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 5261.2 1500.8)"
          x="2916.9"
          y="825.1"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(.89986293 -.01570717 .01570717 .89986293 -18.876158 9.406483)"
          x="582.4"
          y="1198.2"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 1163.2 2364.8)"
          x="640.2"
          y="1305.1"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 1059.2 2398.8)"
          x="582.5"
          y="1324"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 989.2 1368.8)"
          x="543.6"
          y="751.7"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 1089.2 1368.8)"
          x="599.1"
          y="751.7"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 3896.2 1303.8)"
          x="2158.6"
          y="715.6"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 3301.2 1303.8)"
          x="1828"
          y="715.6"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 2511.2 1299.8)"
          x="1389.1"
          y="713.4"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 1865.2 1299.8)"
          x="1030.2"
          y="713.4"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 4558.2 604.8)"
          x="2526.4"
          y="327.3"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 1489.2 1311.8)"
          x="821.4"
          y="720.1"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 3217.2 567.8)"
          x="1781.4"
          y="306.7"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(.89986293 -.01570717 .01570717 .89986293 -17.862401 21.571616)"
          x="1357.4"
          y="1140.4"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 2672.2 2258.8)"
          x="1478.6"
          y="1246.2"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 2572.2 2266.8)"
          x="1423"
          y="1250.6"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.89986293 .01570717 -.01570717 -.89986293 2473.698394 2257.212361)"
          x="1357.3"
          y="1257.3"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.89986293 .01570717 -.01570717 -.89986293 3107.945752 3087.677368)"
          x="1705.7"
          y="1721.7"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 3177.2 3120.8)"
          x="1759.1"
          y="1725.1"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 4726.2 2350.8)"
          x="2619.7"
          y="1297.3"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 4610.2 2342.8)"
          x="2555.2"
          y="1292.8"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 4854.2 2342.8)"
          x="2690.8"
          y="1292.8"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 4265.2 2975.8)"
          x="2363.6"
          y="1644.5"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />
        <use
          transform="matrix(-.9 0 0 -.9 3517.2 2245.8)"
          x="1948"
          y="1239"
          width="12"
          height="17.3"
          xlinkHref="#d"
        />

        <use
          height="36.7"
          transform="matrix(0 -1 1 0 -1488.3 1913.3)"
          width="14.2"
          x="205.4"
          xlinkHref="#c"
          y="1682.4"
        />

        <g transform="scale(1.044)">
          <use x="595.6" y="964" height="37" width="18.8" xlinkHref="#o" />
          <use x="464.3" y="487" height="37" width="18.8" xlinkHref="#o" />
          <use x="2218.6" y="121.1" height="37" width="18.8" xlinkHref="#o" />
          <use x="2095.1" y="121.1" height="37" width="18.8" xlinkHref="#o" />
          <use x="1625.3" y="103.4" height="37" width="18.8" xlinkHref="#o" />
          <use x="1490.2" y="103.4" height="37" width="18.8" xlinkHref="#o" />
          <use x="1682.7" y="1323.2" height="37" width="18.8" xlinkHref="#o" />
          <use x="1716.2" y="1323.2" height="37" width="18.8" xlinkHref="#o" />
          <use x="1753.6" y="1323.2" height="37" width="18.8" xlinkHref="#o" />
          <use x="2460" y="953.5" height="37" width="18.8" xlinkHref="#o" />
          <use x="2497.4" y="953.5" height="37" width="18.8" xlinkHref="#o" />
          <use x="2362.3" y="953.5" height="37" width="18.8" xlinkHref="#o" />

          <use x="547.7" y="964" height="37" width="18.8" xlinkHref="#n" />
          <use x="497.9" y="964" height="37" width="18.8" xlinkHref="#n" />
          <use x="455.7" y="964" height="37" width="18.8" xlinkHref="#n" />
          <use x="413.6" y="964" height="37" width="18.8" xlinkHref="#n" />
          <use x="371.4" y="964" height="37" width="18.8" xlinkHref="#n" />
          <use x="331.2" y="964" height="37" width="18.8" xlinkHref="#n" />
          <use x="323.5" y="487" height="37" width="18.8" xlinkHref="#n" />
          <use x="422.2" y="487" height="37" width="18.8" xlinkHref="#n" />
          <use x="512.2" y="487" height="37" width="18.8" xlinkHref="#n" />
          <use x="374.3" y="487" height="37" width="18.8" xlinkHref="#n" />
          <use x="1903.5" y="455.9" height="37" width="18.8" xlinkHref="#n" />
          <use x="1985.9" y="455.9" height="37" width="18.8" xlinkHref="#n" />
          <use x="1856.6" y="455.9" height="37" width="18.8" xlinkHref="#n" />
          <use x="1942.8" y="455.9" height="37" width="18.8" xlinkHref="#n" />
          <use x="2030.9" y="455.9" height="37" width="18.8" xlinkHref="#n" />
          <use x="2135.3" y="121.1" height="37" width="18.8" xlinkHref="#n" />
          <use x="2173.6" y="121.1" height="37" width="18.8" xlinkHref="#n" />
          <use x="2282.8" y="121.1" height="37" width="18.8" xlinkHref="#n" />
          <use x="463.9" y="94.8" height="37" width="18.8" xlinkHref="#n" />
          <use x="393" y="94.8" height="37" width="18.8" xlinkHref="#n" />
          <use x="350.8" y="94.8" height="37" width="18.8" xlinkHref="#n" />
          <use x="308.7" y="94.8" height="37" width="18.8" xlinkHref="#n" />
          <use x="268.5" y="94.8" height="37" width="18.8" xlinkHref="#n" />
          <use x="1674.1" y="103.4" height="37" width="18.8" xlinkHref="#n" />
          <use x="1582.1" y="103.4" height="37" width="18.8" xlinkHref="#n" />
          <use x="1531.4" y="103.4" height="37" width="18.8" xlinkHref="#n" />
          <use x="1110.4" y="914.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1166" y="914.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1222.5" y="914.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1269.4" y="914.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1316.3" y="914.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1356.6" y="914.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1394.9" y="914.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1465.3" y="1323.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1511.3" y="1323.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1558.2" y="1323.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1600.3" y="1323.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="1642.5" y="1323.2" height="37" width="18.8" xlinkHref="#n" />
          <use x="2157.3" y="953.5" height="37" width="18.8" xlinkHref="#n" />
          <use x="2197.6" y="953.5" height="37" width="18.8" xlinkHref="#n" />
          <use x="2254.1" y="953.5" height="37" width="18.8" xlinkHref="#n" />
          <use x="2315.4" y="953.5" height="37" width="18.8" xlinkHref="#n" />
          <use x="2426.5" y="953.5" height="37" width="18.8" xlinkHref="#n" />
        </g>

        <g transform="scale(.84)">
          <use x="1207.5" y="1264.3" height="71.7" width="34" xlinkHref="#e" />
          <use x="3114.6" y="900" height="71.7" width="34" xlinkHref="#e" />
          <use x="1898" y="345.9" height="71.7" width="34" xlinkHref="#e" />
          <use x="1443.8" y="1363.1" height="71.7" width="34" xlinkHref="#e" />
          <use x="1514.1" y="1356" height="71.7" width="34" xlinkHref="#e" />
          <use x="1572.4" y="1352.4" height="71.7" width="34" xlinkHref="#e" />
          <use x="2521.8" y="1778" height="71.7" width="34" xlinkHref="#e" />
        </g>

        <g transform="scale(.84)">
          <use x="675.4" y="1414.3" height="71.7" width="34" xlinkHref="#i" />
          <use x="613.5" y="1434.5" height="71.7" width="34" xlinkHref="#i" />
          <use x="631.3" y="821.5" height="71.7" width="34" xlinkHref="#i" />
          <use x="571.8" y="821.5" height="71.7" width="34" xlinkHref="#i" />
          <use x="2302.1" y="782.8" height="71.7" width="34" xlinkHref="#i" />
          <use x="1948" y="782.8" height="71.7" width="34" xlinkHref="#i" />
          <use x="1477.7" y="780.4" height="71.7" width="34" xlinkHref="#i" />
          <use x="1093.2" y="780.4" height="71.7" width="34" xlinkHref="#i" />
          <use x="2696.2" y="366.7" height="71.7" width="34" xlinkHref="#i" />
          <use x="869.4" y="787.5" height="71.7" width="34" xlinkHref="#i" />
          <use x="1874.2" y="1864.3" height="71.7" width="34" xlinkHref="#i" />
          <use x="1817" y="1860.7" height="71.7" width="34" xlinkHref="#i" />
          <use x="2872.4" y="1402.4" height="71.7" width="34" xlinkHref="#i" />
          <use x="2727.1" y="1401.2" height="71.7" width="34" xlinkHref="#i" />
          <use x="2796.2" y="1406" height="71.7" width="34" xlinkHref="#i" />
          <use x="2076.6" y="1343.5" height="71.7" width="34" xlinkHref="#i" />
          <use x="2395.6" y="1338.7" height="71.7" width="34" xlinkHref="#i" />
        </g>

        <use
          transform="matrix(-.84 0 0 -.84 4295.2 1859.8)"
          x="2539.6"
          y="1071.2"
          height="71.7"
          width="34"
          xlinkHref="#i"
        />
        <use
          transform="matrix(-.84 0 0 -.84 892.2 551.8)"
          x="514"
          y="292.6"
          height="71.7"
          width="34"
          xlinkHref="#i"
        />
        <use
          transform="matrix(-.84 0 0 -.84 1062.2 551.8)"
          x="615.2"
          y="292.6"
          height="71.7"
          width="34"
          xlinkHref="#i"
        />
        <use
          transform="matrix(-.84 0 0 -.84 2208.2 415.8)"
          x="1297.4"
          y="211.7"
          height="71.7"
          width="34"
          xlinkHref="#i"
        />
        <use
          transform="matrix(-.84 0 0 -.84 2338.2 405.8)"
          x="1374.8"
          y="205.7"
          height="71.7"
          width="34"
          xlinkHref="#i"
        />

        <use
          transform="matrix(-1 0 0 -1 4295.2 1952.6)"
          x="2138.5"
          y="957.8"
          height="37"
          width="18.2"
          xlinkHref="#j"
        />
        <use x="2017.5" y="1009.8" height="37" width="18.2" xlinkHref="#j" />
        <use x="2123.5" y="1348.8" height="37" width="18.2" xlinkHref="#j" />

        <use x="1692.4" y="512.8" height="37" width="16.3" xlinkHref="#f" />
        <use x="1297.4" y="510.8" height="37" width="16.3" xlinkHref="#f" />
        <use x="994.4" y="510.8" height="37" width="16.3" xlinkHref="#f" />
        <use x="1795.4" y="983.8" height="37" width="16.3" xlinkHref="#f" />

        <use x="900.4" y="891.3" height="37" width="16.3" xlinkHref="#g" />
        <use x="945.4" y="891.3" height="37" width="16.3" xlinkHref="#g" />
        <use x="2497.4" y="606.3" height="37" width="16.3" xlinkHref="#g" />
        <use x="2622.4" y="611.3" height="37" width="16.3" xlinkHref="#g" />
        <use x="1642.4" y="512.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1742.4" y="512.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1247.4" y="510.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1352.4" y="510.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1402.4" y="510.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1034.4" y="510.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="924.4" y="510.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="691.4" y="516.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="736.4" y="516.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="955.9" y="157.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1010.9" y="157.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1045.9" y="157.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="2019.4" y="1348.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1650.4" y="983.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1701.4" y="983.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1750.4" y="983.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1916.4" y="1009.8" height="37" width="16.3" xlinkHref="#g" />
        <use x="1969.4" y="1009.8" height="37" width="16.3" xlinkHref="#g" />

        <g transform="scale(.7)">
          <use x="1276.2" y="1323.7" height="32" width="23" xlinkHref="#h" />
          <use x="1340.5" y="1323.7" height="32" width="23" xlinkHref="#h" />
          <use x="3736.2" y="923.7" height="32" width="23" xlinkHref="#h" />
          <use x="3557.7" y="916.5" height="32" width="23" xlinkHref="#h" />
          <use x="486.2" y="1540.8" height="32" width="23" xlinkHref="#h" />
          <use x="880.5" y="1540.8" height="32" width="23" xlinkHref="#h" />
          <use x="809.1" y="1540.8" height="32" width="23" xlinkHref="#h" />
          <use x="734.8" y="1540.8" height="32" width="23" xlinkHref="#h" />
          <use x="672" y="1540.8" height="32" width="23" xlinkHref="#h" />
          <use x="609.1" y="1540.8" height="32" width="23" xlinkHref="#h" />
          <use x="546.2" y="1540.8" height="32" width="23" xlinkHref="#h" />
          <use x="937.7" y="1487.9" height="32" width="23" xlinkHref="#h" />
          <use x="399.1" y="776.5" height="32" width="23" xlinkHref="#h" />
          <use x="474.8" y="829.4" height="32" width="23" xlinkHref="#h" />
          <use x="622" y="829.4" height="32" width="23" xlinkHref="#h" />
          <use x="684.8" y="829.4" height="32" width="23" xlinkHref="#h" />
          <use x="756.2" y="829.4" height="32" width="23" xlinkHref="#h" />
          <use x="550.5" y="829.4" height="32" width="23" xlinkHref="#h" />
          <use x="3109.8" y="731.5" height="32" width="23" xlinkHref="#h" />
          <use x="2831.2" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="2954.1" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="2761.2" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="2889.8" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="3021.2" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="2336.2" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="2407.7" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="2479.1" y="782.9" height="32" width="23" xlinkHref="#h" />
          <use x="1772" y="780.1" height="32" width="23" xlinkHref="#h" />
          <use x="1843.4" y="780.1" height="32" width="23" xlinkHref="#h" />
          <use x="1922" y="780.1" height="32" width="23" xlinkHref="#h" />
          <use x="1993.4" y="780.1" height="32" width="23" xlinkHref="#h" />
          <use x="1467.7" y="780.1" height="32" width="23" xlinkHref="#h" />
          <use x="1410.5" y="780.1" height="32" width="23" xlinkHref="#h" />
          <use x="1310.5" y="780.1" height="32" width="23" xlinkHref="#h" />
          <use x="3301.2" y="283.7" height="32" width="23" xlinkHref="#h" />
          <use x="3177" y="283.7" height="32" width="23" xlinkHref="#h" />
          <use x="3234.1" y="283.7" height="32" width="23" xlinkHref="#h" />
          <use x="3471.2" y="230.8" height="32" width="23" xlinkHref="#h" />
          <use x="3397" y="283.7" height="32" width="23" xlinkHref="#h" />
          <use x="3117" y="283.7" height="32" width="23" xlinkHref="#h" />
          <use x="1042" y="788.7" height="32" width="23" xlinkHref="#h" />
          <use x="684.1" y="244.4" height="32" width="23" xlinkHref="#h" />
          <use x="578.4" y="244.4" height="32" width="23" xlinkHref="#h" />
          <use x="515.5" y="244.4" height="32" width="23" xlinkHref="#h" />
          <use x="452.7" y="244.4" height="32" width="23" xlinkHref="#h" />
          <use x="392.7" y="244.4" height="32" width="23" xlinkHref="#h" />
          <use x="802.7" y="191.5" height="32" width="23" xlinkHref="#h" />
          <use x="1355.5" y="275.8" height="32" width="23" xlinkHref="#h" />
          <use x="1434.1" y="275.8" height="32" width="23" xlinkHref="#h" />
          <use x="2489.1" y="257.2" height="32" width="23" xlinkHref="#h" />
          <use x="2416.2" y="257.2" height="32" width="23" xlinkHref="#h" />
          <use x="2352" y="257.2" height="32" width="23" xlinkHref="#h" />
          <use x="2276.2" y="257.2" height="32" width="23" xlinkHref="#h" />
          <use x="2214.8" y="257.2" height="32" width="23" xlinkHref="#h" />
          <use x="2137.7" y="204.4" height="32" width="23" xlinkHref="#h" />
          <use x="2135.5" y="1413.7" height="32" width="23" xlinkHref="#h" />
          <use x="1648.4" y="1466.5" height="32" width="23" xlinkHref="#h" />
          <use x="1731.2" y="1466.5" height="32" width="23" xlinkHref="#h" />
          <use x="1815.5" y="1466.5" height="32" width="23" xlinkHref="#h" />
          <use x="1885.5" y="1466.5" height="32" width="23" xlinkHref="#h" />
          <use x="1955.5" y="1466.5" height="32" width="23" xlinkHref="#h" />
          <use x="2015.5" y="1466.5" height="32" width="23" xlinkHref="#h" />
          <use x="2072.7" y="1466.5" height="32" width="23" xlinkHref="#h" />
          <use x="2677.7" y="2023.7" height="32" width="23" xlinkHref="#h" />
          <use x="2177.7" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="2246.2" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="2316.2" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="2379.1" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="2442" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="2502" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="2552" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="2607.7" y="2076.5" height="32" width="23" xlinkHref="#h" />
          <use x="3779.8" y="1472.2" height="32" width="23" xlinkHref="#h" />
          <use x="3209.8" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3269.8" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3354.1" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3445.5" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3515.5" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3611.2" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3661.2" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3717" y="1525.1" height="32" width="23" xlinkHref="#h" />
          <use x="3024.8" y="1977.2" height="32" width="23" xlinkHref="#h" />
          <use x="2490.5" y="1455.8" height="32" width="23" xlinkHref="#h" />
          <use x="2727.7" y="1492.9" height="32" width="23" xlinkHref="#h" />
          <use x="2803.4" y="1492.9" height="32" width="23" xlinkHref="#h" />
          <use x="2873.4" y="1492.9" height="32" width="23" xlinkHref="#h" />
        </g>

        <g transform="scale(.432)">
          <use x="4970.3" y="2299.4" height="42" width="37" xlinkHref="#k" />
          <use x="1553.6" y="2411.6" height="42" width="37" xlinkHref="#k" />
          <use x="803.6" y="1344.5" height="42" width="37" xlinkHref="#k" />
          <use x="926.3" y="1344.5" height="42" width="37" xlinkHref="#k" />
          <use x="680.9" y="1258.9" height="42" width="37" xlinkHref="#k" />
          <use x="4820.9" y="1269.3" height="42" width="37" xlinkHref="#k" />
          <use x="5073.3" y="1186" height="42" width="37" xlinkHref="#k" />
          <use x="4929.7" y="1269.3" height="42" width="37" xlinkHref="#k" />
          <use x="3935.5" y="1269.3" height="42" width="37" xlinkHref="#k" />
          <use x="4051.3" y="1269.3" height="42" width="37" xlinkHref="#k" />
          <use x="3021.2" y="1264.7" height="42" width="37" xlinkHref="#k" />
          <use x="3264.2" y="1264.7" height="42" width="37" xlinkHref="#k" />
          <use x="2412.4" y="1264.7" height="42" width="37" xlinkHref="#k" />
          <use x="5658.9" y="374.6" height="42" width="37" xlinkHref="#k" />
          <use x="1334.8" y="311" height="42" width="37" xlinkHref="#k" />
          <use x="2439" y="447.5" height="42" width="37" xlinkHref="#k" />
          <use x="3498" y="331.8" height="42" width="37" xlinkHref="#k" />
          <use x="3494.6" y="2291.3" height="42" width="37" xlinkHref="#k" />
          <use x="4373" y="3279.7" height="42" width="37" xlinkHref="#k" />
          <use x="6158.9" y="2386.2" height="42" width="37" xlinkHref="#k" />
          <use x="4692.5" y="3204.5" height="42" width="37" xlinkHref="#k" />
          <use x="3956.4" y="2359.6" height="42" width="37" xlinkHref="#k" />
          <use x="4174" y="2359.6" height="42" width="37" xlinkHref="#k" />
          <use x="3838.3" y="2359.6" height="42" width="37" xlinkHref="#k" />
          <use x="4454" y="2419.7" height="42" width="37" xlinkHref="#k" />
          <use x="4576.7" y="2419.7" height="42" width="37" xlinkHref="#k" />
        </g>

        <g transform="scale(.972)">
          <use x="590.3" y="1074.9" height="37" width="16" xlinkHref="#l" />
          <use x="536.8" y="1074.9" height="37" width="16" xlinkHref="#l" />
          <use x="491.6" y="1074.9" height="37" width="16" xlinkHref="#l" />
          <use x="446.3" y="1074.9" height="37" width="16" xlinkHref="#l" />
          <use x="401" y="1074.9" height="37" width="16" xlinkHref="#l" />
          <use x="357.8" y="1074.9" height="37" width="16" xlinkHref="#l" />
          <use x="682.9" y="1036.8" height="37" width="16" xlinkHref="#l" />
          <use x="349.6" y="562.5" height="37" width="16" xlinkHref="#l" />
          <use x="455.6" y="562.5" height="37" width="16" xlinkHref="#l" />
          <use x="500.8" y="562.5" height="37" width="16" xlinkHref="#l" />
          <use x="552.3" y="562.5" height="37" width="16" xlinkHref="#l" />
          <use x="404.1" y="562.5" height="37" width="16" xlinkHref="#l" />
          <use x="295.1" y="524.5" height="37" width="16" xlinkHref="#l" />
          <use x="2046.6" y="529.1" height="37" width="16" xlinkHref="#l" />
          <use x="2135.1" y="529.1" height="37" width="16" xlinkHref="#l" />
          <use x="1996.2" y="529.1" height="37" width="16" xlinkHref="#l" />
          <use x="2088.8" y="529.1" height="37" width="16" xlinkHref="#l" />
          <use x="2247.2" y="492.1" height="37" width="16" xlinkHref="#l" />
          <use x="2183.4" y="529.1" height="37" width="16" xlinkHref="#l" />
          <use x="2295.6" y="169.5" height="37" width="16" xlinkHref="#l" />
          <use x="2336.7" y="169.5" height="37" width="16" xlinkHref="#l" />
          <use x="2454" y="169.5" height="37" width="16" xlinkHref="#l" />
          <use x="2507.5" y="131.5" height="37" width="16" xlinkHref="#l" />
          <use x="585.7" y="103.2" height="37" width="16" xlinkHref="#l" />
          <use x="500.3" y="141.2" height="37" width="16" xlinkHref="#l" />
          <use x="424.2" y="141.2" height="37" width="16" xlinkHref="#l" />
          <use x="378.9" y="141.2" height="37" width="16" xlinkHref="#l" />
          <use x="333.6" y="141.2" height="37" width="16" xlinkHref="#l" />
          <use x="290.4" y="141.2" height="37" width="16" xlinkHref="#l" />
          <use x="1547.1" y="112.4" height="37" width="16" xlinkHref="#l" />
          <use x="1800.2" y="150.5" height="37" width="16" xlinkHref="#l" />
          <use x="1701.4" y="150.5" height="37" width="16" xlinkHref="#l" />
          <use x="1646.9" y="150.5" height="37" width="16" xlinkHref="#l" />
          <use x="1545.6" y="983.3" height="37" width="16" xlinkHref="#l" />
          <use x="1194.8" y="1021.4" height="37" width="16" xlinkHref="#l" />
          <use x="1254.4" y="1021.4" height="37" width="16" xlinkHref="#l" />
          <use x="1315.1" y="1021.4" height="37" width="16" xlinkHref="#l" />
          <use x="1365.5" y="1021.4" height="37" width="16" xlinkHref="#l" />
          <use x="1416" y="1021.4" height="37" width="16" xlinkHref="#l" />
          <use x="1459.2" y="1021.4" height="37" width="16" xlinkHref="#l" />
          <use x="1500.3" y="1021.4" height="37" width="16" xlinkHref="#l" />
          <use x="1936" y="1422.6" height="37" width="16" xlinkHref="#l" />
          <use x="1575.9" y="1460.7" height="37" width="16" xlinkHref="#l" />
          <use x="1625.3" y="1460.7" height="37" width="16" xlinkHref="#l" />
          <use x="1675.7" y="1460.7" height="37" width="16" xlinkHref="#l" />
          <use x="1721" y="1460.7" height="37" width="16" xlinkHref="#l" />
          <use x="1766.3" y="1460.7" height="37" width="16" xlinkHref="#l" />
          <use x="2729.7" y="1025.5" height="37" width="16" xlinkHref="#l" />
          <use x="2319.2" y="1063.6" height="37" width="16" xlinkHref="#l" />
          <use x="2362.5" y="1063.6" height="37" width="16" xlinkHref="#l" />
          <use x="2423.2" y="1063.6" height="37" width="16" xlinkHref="#l" />
          <use x="2489" y="1063.6" height="37" width="16" xlinkHref="#l" />
          <use x="2608.3" y="1063.6" height="37" width="16" xlinkHref="#l" />

          <use x="641.8" y="1074.9" height="37" width="16" xlinkHref="#m" />
          <use x="1602.7" y="150.5" height="37" width="16" xlinkHref="#m" />
          <use x="1747.7" y="150.5" height="37" width="16" xlinkHref="#m" />
          <use x="2252.4" y="169.5" height="37" width="16" xlinkHref="#m" />
          <use x="2385.1" y="169.5" height="37" width="16" xlinkHref="#m" />
          <use x="1809.5" y="1460.7" height="37" width="16" xlinkHref="#m" />
          <use x="1845.5" y="1460.7" height="37" width="16" xlinkHref="#m" />
          <use x="1885.6" y="1460.7" height="37" width="16" xlinkHref="#m" />
          <use x="2539.4" y="1063.6" height="37" width="16" xlinkHref="#m" />
          <use x="2644.3" y="1063.6" height="37" width="16" xlinkHref="#m" />
          <use x="2684.5" y="1063.6" height="37" width="16" xlinkHref="#m" />
        </g>

        <g transform="scale(.92)">
          <use x="720.5" y="1174.3" height="27" width="19" xlinkHref="#p" />
          <use x="769.4" y="1199.3" height="27" width="19" xlinkHref="#p" />
          <use x="797.7" y="1123.2" height="27" width="19" xlinkHref="#p" />
          <use x="831.3" y="1199.3" height="27" width="19" xlinkHref="#p" />
          <use x="860.7" y="1123.2" height="27" width="19" xlinkHref="#p" />
          <use x="2648.2" y="175.4" height="27" width="19" xlinkHref="#p" />
          <use x="2691.7" y="197.1" height="27" width="19" xlinkHref="#p" />
          <use x="2717.8" y="199.3" height="27" width="19" xlinkHref="#p" />
          <use x="617.8" y="189" height="27" width="19" xlinkHref="#p" />
          <use x="689.5" y="214" height="27" width="19" xlinkHref="#p" />
          <use x="662.3" y="139" height="27" width="19" xlinkHref="#p" />
          <use x="1633.5" y="197.7" height="27" width="19" xlinkHref="#p" />
          <use x="1562.9" y="222.7" height="27" width="19" xlinkHref="#p" />
          <use x="1562.9" y="146.6" height="27" width="19" xlinkHref="#p" />
          <use x="1709.1" y="1066.7" height="27" width="19" xlinkHref="#p" />
          <use x="1681.9" y="1142.8" height="27" width="19" xlinkHref="#p" />
          <use x="1631.9" y="1118.9" height="27" width="19" xlinkHref="#p" />
          <use x="2105.3" y="1533" height="27" width="19" xlinkHref="#p" />
          <use x="2077" y="1608" height="27" width="19" xlinkHref="#p" />
          <use x="2044.4" y="1581.9" height="27" width="19" xlinkHref="#p" />
          <use x="2943.8" y="1167.8" height="27" width="19" xlinkHref="#p" />
          <use x="2910.2" y="1172.1" height="27" width="19" xlinkHref="#p" />
          <use x="2883" y="1162.3" height="27" width="19" xlinkHref="#p" />
        </g>

        <g transform="scale(.902)">
          <use x="733.6" y="1224.2" height="22" width="20" xlinkHref="#q" />
          <use x="2940.2" y="1212" height="22" width="20" xlinkHref="#q" />
          <use x="2700.7" y="204.9" height="22" width="20" xlinkHref="#q" />
          <use x="628.8" y="217.7" height="22" width="20" xlinkHref="#q" />
          <use x="1663.6" y="1166.5" height="22" width="20" xlinkHref="#q" />
          <use x="2084.5" y="1640.1" height="22" width="20" xlinkHref="#q" />
          <use x="1665.3" y="227.6" height="22" width="20" xlinkHref="#q" />
        </g>

        <g transform="scale(.902)">
          <use x="296.8" y="609.7" height="25.1" width="12" xlinkHref="#r" />
          <use x="2400.3" y="572.5" height="25.1" width="12" xlinkHref="#r" />
        </g>

        <use
          transform="matrix(-.902 0 0 -.902 1434.2 2187)"
          x="789.4"
          y="1200.3"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 1486.2 2049)"
          x="818.3"
          y="1123.8"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 1548.2 2187)"
          x="852.6"
          y="1200.3"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 1602.2 2047)"
          x="882.6"
          y="1122.7"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 504.2 1081)"
          x="273.7"
          y="587"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 474.2 1081)"
          x="257"
          y="587"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 4511.2 1014)"
          x="2495.8"
          y="549.8"
        />
        <use
          transform="matrix(-.902 0 0 -.902 4471.2 1014)"
          x="2473.6"
          y="549.8"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 4971.2 345)"
          x="2750.9"
          y="178.8"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 5019.2 347)"
          x="2777.5"
          y="179.9"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 1287.2 374)"
          x="707.9"
          y="194.9"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 1237.2 236)"
          x="680.2"
          y="118.4"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 2894.2 390)"
          x="1599.1"
          y="203.8"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 2894.2 250)"
          x="1599.1"
          y="126.1"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 3163.2 1945)"
          x="1748.3"
          y="1066.1"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 3113.2 2083)"
          x="1720.5"
          y="1142.7"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 3892.2 2801)"
          x="2152.5"
          y="1540.8"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 3840.2 2939)"
          x="2123.7"
          y="1617.4"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 5435.2 2129)"
          x="3008.2"
          y="1168.2"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />
        <use
          transform="matrix(-.902 0 0 -.902 5373.2 2137)"
          x="2973.9"
          y="1172.6"
          height="25.1"
          width="12"
          xlinkHref="#r"
        />

        <g transform="scale(1.2)">
          <use x="1447.8" y="446.2" height="21.9" width="22" xlinkHref="#s" />
          <use x="1122.8" y="444.5" height="21.9" width="22" xlinkHref="#s" />
          <use x="1164.5" y="444.5" height="21.9" width="22" xlinkHref="#s" />
          <use x="857.8" y="444.5" height="21.9" width="22" xlinkHref="#s" />
          <use x="572" y="449.5" height="21.9" width="22" xlinkHref="#s" />
          <use x="867.4" y="150.3" height="21.9" width="22" xlinkHref="#s" />
          <use x="1371.2" y="838.7" height="21.9" width="22" xlinkHref="#s" />
          <use x="1413.7" y="838.7" height="21.9" width="22" xlinkHref="#s" />
          <use x="1592.8" y="860.3" height="21.9" width="22" xlinkHref="#s" />
          <use x="1637" y="860.3" height="21.9" width="22" xlinkHref="#s" />
        </g>

        <text fontSize="14" x="202.6" y="1015.8">
          8段
        </text>
        <text fontSize="14" x="202.6" y="1030.2">
          YJV22
        </text>
        <text fontSize="14" x="202.6" y="1044.6">
          218m
        </text>
        <text fontSize="14" x="202.6" y="1059">
          300mm²
        </text>
        <text fontSize="14" x="1711.6" y="385.8">
          YJV22
        </text>
        <text fontSize="14" x="1711.6" y="400.2">
          335m
        </text>
        <text fontSize="14" x="1711.6" y="414.6">
          300mm²
        </text>
        <text fontSize="14" x="425.6" y="387.8">
          YJV22
        </text>
        <text fontSize="14" x="425.6" y="402.2">
          150m
        </text>
        <text fontSize="14" x="425.6" y="416.6">
          240mm²
        </text>
        <text fontSize="14" x="1099.6" y="342.3">
          YJV22
        </text>
        <text fontSize="14" x="1099.6" y="356.7">
          15m
        </text>
        <text fontSize="14" x="1099.6" y="371.1">
          50mm²
        </text>
        <text fontSize="14" x="490.6" y="1318.5">
          5段
        </text>
        <text fontSize="14" x="490.6" y="1332.9">
          YJV22
        </text>
        <text fontSize="14" x="490.6" y="1347.4">
          580m
        </text>
        <text fontSize="14" x="490.6" y="1361.8">
          300mm²
        </text>
        <text fontSize="14" x="913.6" y="1190.7">
          YJV22
        </text>
        <text fontSize="14" x="913.6" y="1205.1">
          47m
        </text>
        <text fontSize="14" x="913.6" y="1219.5">
          300mm²
        </text>
        <text fontSize="14" x="1389.6" y="1398.3">
          6段
        </text>
        <text fontSize="14" x="1389.6" y="1412.7">
          YJV22
        </text>
        <text fontSize="14" x="1389.6" y="1427.1">
          168m
        </text>
        <text fontSize="14" x="1389.6" y="1441.5">
          300mm²
        </text>
        <text fontSize="14" x="2270.6" y="1379.3">
          7段
        </text>
        <text fontSize="14" x="2270.6" y="1393.7">
          YJV22
        </text>
        <text fontSize="14" x="2270.6" y="1408.1">
          215m
        </text>
        <text fontSize="14" x="2270.6" y="1422.5">
          240mm²
        </text>
        <text fontSize="14" x="2548.6" y="1325.5">
          YJV22
        </text>
        <text fontSize="14" x="2548.6" y="1339.9">
          45m
        </text>
        <text fontSize="14" x="2548.6" y="1354.4">
          70mm²
        </text>
        <text fontSize="14" x="290.6" y="906.5">
          2段
        </text>
        <text fontSize="14" x="290.6" y="920.9">
          YJV22
        </text>
        <text fontSize="14" x="290.6" y="935.4">
          71m
        </text>
        <text fontSize="14" x="290.6" y="949.8">
          240mm²
        </text>
        <text fontSize="14" x="710.6" y="776.9">
          YJV22
        </text>
        <text fontSize="14" x="710.6" y="791.3">
          100m
        </text>
        <text fontSize="14" x="710.6" y="805.8">
          120mm²
        </text>
        <text fontSize="14" x="2093.6" y="780.8">
          3段
        </text>
        <text fontSize="14" x="2093.6" y="795.2">
          YJV22
        </text>
        <text fontSize="14" x="2093.6" y="809.6">
          169m
        </text>
        <text fontSize="14" x="2093.6" y="824">
          240mm²
        </text>
        <text fontSize="14" x="1137.4" y="740.1">
          YJV22
        </text>
        <text fontSize="14" x="1137.4" y="754.5">
          107m
        </text>
        <text fontSize="14" x="1137.4" y="769">
          240mm²
        </text>
        <text fontSize="14" x="2339.6" y="483.8">
          4段
        </text>
        <text fontSize="14" x="2339.6" y="498.2">
          YJV22
        </text>
        <text fontSize="14" x="2339.6" y="512.6">
          278m
        </text>
        <text fontSize="14" x="2339.6" y="527">
          300mm²
        </text>
        <text fontSize="16" x="2366.2" y="1598.8">
          运行变压器数量：25台 15600kVA
        </text>
        <text fontSize="16" x="2366.2" y="1618.8">
          公变数量：19台 11820kVA
        </text>
        <text fontSize="16" x="2366.2" y="1638.8">
          专变数量：6台 3780kVA
        </text>
        <text fontSize="16" x="2366.2" y="1658.8">
          线路总长度：5.353km
        </text>
        <text fontSize="16" x="2366.2" y="1678.8">
          电缆长度： 5.353km
        </text>
        <text fontSize="16" x="2366.2" y="1698.8">
          导线长度： 0.000km
        </text>
        <text fontSize="16" x="2366.2" y="1718.8">
          混凝土杆：0基 铁塔：0基 钢管杆：0基
        </text>
        <text fontSize="16" x="2366.2" y="1738.8">
          开关房：0座 户外开关箱：0台 电缆分接箱：0台
        </text>
        <text fontSize="16" x="2366.2" y="1758.8">
          配电房：19座 箱变：2台 台变：0台
        </text>
        <text fontSize="16" x="2366.2" y="1778.8">
          柱上开关：0台 高压柜：102面
        </text>
        <text fontSize="16" textAnchor="middle" x="241.1" y="1679.8">
          莲塘天明线706(706)
        </text>
        <text fontSize="14" textAnchor="middle" x="218.2" y="1694.8">
          706
        </text>
        <text fontSize="14" x="446.6" y="1419.9">
          1段
        </text>
        <text fontSize="14" x="446.6" y="1434.3">
          YJV22
        </text>
        <text fontSize="14" x="446.6" y="1448.7">
          1200m
        </text>
        <text fontSize="14" x="446.6" y="1463.1">
          300mm²
        </text>
        <text fontSize="14" x="1822.6" y="774.3">
          YJV22
        </text>
        <text fontSize="14" x="1822.6" y="788.7">
          88m
        </text>
        <text fontSize="14" x="1822.6" y="803.1">
          240mm²
        </text>
        <text fontSize="14" x="2043.6" y="773.3">
          YJV22
        </text>
        <text fontSize="14" x="2043.6" y="787.7">
          331m
        </text>
        <text fontSize="14" x="2043.6" y="802.1">
          240mm²
        </text>
        <text fill="#f00" fontSize="14" x="2229" y="111.3">
          ★
        </text>
        <text fill="#f00" fontSize="14" x="1471" y="90">
          ★
        </text>
        <text fontSize="12" x="1033.6" y="1008.1">
          YJV22
        </text>
        <text fontSize="12" x="1033.6" y="1020.4">
          8m
        </text>
        <text fontSize="12" x="958.6" y="979.8">
          YJV22
        </text>
        <text fontSize="12" x="958.6" y="992.1">
          8m
        </text>
        <text fontSize="12" textAnchor="middle" x="1028.6" y="1135.6">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="1028.6" y="1147.9">
          0320002002064560
        </text>
        <text fontSize="12" x="914.7" y="915.8">
          G1
        </text>
        <text fontSize="12" x="959.7" y="915.8">
          G2
        </text>
        <text fontSize="12" textAnchor="end" x="894.3" y="943.8">
          G140
        </text>
        <text fontSize="12" textAnchor="end" x="939.3" y="943.8">
          G240
        </text>
        <text fontSize="18" textAnchor="middle" x="971.6" y="875.8">
          大信置业新电房
        </text>
        <text fontSize="14" x="1183.7" y="399">
          9段
        </text>
        <text fill="#00f" fontSize="10" x="1703.2" y="142.6">
          开环点）
        </text>
        <text fill="#00f" fontSize="10" x="2330.8" y="160.7">
          开环点）
        </text>
        <text fill="#00f" fontSize="9" x="2483.7" y="1030.4">
          开环点）
        </text>
        <text fontSize="12" x="2635.6" y="702.1">
          YJV22
        </text>
        <text fontSize="12" x="2635.6" y="714.4">
          10m
        </text>
        <text fontSize="12" textAnchor="middle" x="2630.6" y="829.6">
          SGB10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="2630.6" y="841.9">
          0320002002188311
        </text>
        <text fontSize="12" x="2511.7" y="630.8">
          601
        </text>
        <text fontSize="12" x="2636.7" y="635.8">
          801
        </text>
        <text fontSize="12" textAnchor="end" x="2616.2" y="663.8">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="2491.2" y="658.8">
          60140
        </text>
        <text fontSize="18" textAnchor="middle" x="2555.6" y="591.8">
          大信D段专用电房
        </text>
        <text fontSize="14" x="1471.6" y="1268">
          YJV22-3*150
        </text>
        <text fontSize="14" x="1471.6" y="1282.4">
          475m
        </text>
        <text fontSize="14" x="1471.6" y="1296.9">
          150mm²
        </text>
        <text fontSize="14" x="1714.6" y="1241.3">
          YJV22
        </text>
        <text fontSize="14" x="1714.6" y="1255.7">
          155m
        </text>
        <text fontSize="14" x="1714.6" y="1270.1">
          50mm²
        </text>
        <text
          fontSize="12"
          transform="matrix(0 1 -1 0 3069.6 -1268.4)"
          x="2169"
          y="900.6"
        >
          ZGS13-Z-630/10
        </text>
        <text fontSize="12" x="2154.7" y="982.3">
          801
        </text>
        <text fontSize="18" textAnchor="middle" x="2158.7" y="885.2">
          基边乡1号公用箱变
        </text>
        <text fill="#f00" fontSize="33" x="1177.3" y="1781.1">
          正常方式开环点：
        </text>
        <text fill="#f00" fontSize="33" x="1177.3" y="1836.4">
          1、大信置业D专用配电站10kV天明线602开关；
        </text>
        <text fill="#f00" fontSize="33" x="1177.3" y="1891.6">
          2、宝怡阁公用配电站10kV孙文线602开关；
        </text>
        <text fill="#f00" fontSize="33" x="1177.3" y="1946.9">
          3、天明花园B区第六幢公用配电站10kV岐头线603开关。
        </text>
        <text fontSize="12" x="530.9" y="1124.7">
          YJV22
        </text>
        <text fontSize="12" x="530.9" y="1137.1">
          12m
        </text>
        <text fontSize="12" x="585" y="1124.7">
          YJV22
        </text>
        <text fontSize="12" x="585" y="1137.1">
          12m
        </text>
        <text fontSize="12" textAnchor="middle" x="581.6" y="1261.6">
          #1(停运)
        </text>
        <text fontSize="12" textAnchor="middle" x="581.6" y="1273.9">
          S11-M-630/10
        </text>
        <text fontSize="12" x="493.2" y="1265.9">
          #2
        </text>
        <text fontSize="12" x="493.2" y="1278.2">
          S11-630
        </text>
        <text fontSize="12" x="493.2" y="1290.6">
          2002026623
        </text>
        <text fontSize="12" textAnchor="end" x="353.7" y="1113">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="637.2" y="1113.9">
          60540
        </text>
        <text fontSize="12" textAnchor="end" x="579.7" y="1114.5">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="528.3" y="1113">
          80240
        </text>
        <text fontSize="12" textAnchor="end" x="482.7" y="1113.5">
          60440
        </text>
        <text fontSize="12" textAnchor="end" x="438.2" y="1114.5">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="395.2" y="1113">
          60240
        </text>
        <text fontSize="8" textAnchor="end" x="669.8" y="1076.5">
          61PT40
        </text>
        <text fontSize="12" x="630.9" y="1067.7">
          6054
        </text>
        <text fontSize="12" x="586.1" y="1068.8">
          8014
        </text>
        <text fontSize="12" x="534.1" y="1068.8">
          8024
        </text>
        <text fontSize="12" x="490.1" y="1068.8">
          6044
        </text>
        <text fontSize="12" x="446.1" y="1068.8">
          6034
        </text>
        <text fontSize="12" x="402.1" y="1068.8">
          6024
        </text>
        <text fontSize="12" x="360.1" y="1068.8">
          6014
        </text>
        <text fontSize="12" x="676.1" y="1031.8">
          61PT
        </text>
        <text fontSize="12" x="636.6" y="1031.8">
          605
        </text>
        <text fontSize="12" x="586.6" y="1031.8">
          801
        </text>
        <text fontSize="12" x="534.6" y="1031.8">
          802
        </text>
        <text fontSize="12" x="490.6" y="1031.8">
          604
        </text>
        <text fontSize="12" x="446.6" y="1031.8">
          603
        </text>
        <text fontSize="12" x="402.6" y="1031.8">
          602
        </text>
        <text fontSize="12" x="360.6" y="1031.8">
          601
        </text>
        <text fontSize="18" textAnchor="middle" x="563.1" y="992.8">
          建设花园2号公用配电站
        </text>
        <text fontSize="12" x="549.9" y="628">
          YJV22
        </text>
        <text fontSize="12" x="549.9" y="640.3">
          10m
        </text>
        <text fontSize="12" x="549.9" y="652.7">
          70mm²
        </text>
        <text fontSize="12" x="499.9" y="633.4">
          YJV22
        </text>
        <text fontSize="12" x="499.9" y="645.8">
          10m
        </text>
        <text fontSize="12" x="499.9" y="658.1">
          70mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="572.5" y="752.9">
          #2
        </text>
        <text fontSize="12" textAnchor="middle" x="572.5" y="765.3">
          SCB11-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="572.5" y="777.6">
          2002026615
        </text>
        <text fontSize="12" x="458" y="765.6">
          #1(停运)
        </text>
        <text fontSize="12" x="458" y="777.9">
          SCB11-630/10
        </text>
        <text fontSize="12" x="458" y="790.3">
          2002091328
        </text>
        <text fontSize="12" textAnchor="end" x="301.4" y="589.6">
          61PT40
        </text>
        <text fontSize="12" textAnchor="end" x="342.1" y="617.1">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="443.9" y="620.4">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="491.5" y="619.6">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="537.1" y="616.7">
          80240
        </text>
        <text fontSize="12" textAnchor="end" x="394.3" y="619.2">
          60240
        </text>
        <text fontSize="12" x="352.6" y="533.8">
          601
        </text>
        <text fontSize="12" x="455.6" y="533.8">
          603
        </text>
        <text fontSize="12" x="499.6" y="533.8">
          801
        </text>
        <text fontSize="12" x="549.6" y="533.8">
          802
        </text>
        <text fontSize="12" x="405.6" y="533.8">
          602
        </text>
        <text fontSize="12" x="352.1" y="570.8">
          6014
        </text>
        <text fontSize="12" x="455.1" y="570.8">
          6034
        </text>
        <text fontSize="12" x="499.1" y="570.8">
          8014
        </text>
        <text fontSize="12" x="549.1" y="570.8">
          8024
        </text>
        <text fontSize="12" x="405.1" y="570.8">
          6024
        </text>
        <text fontSize="12" x="299.1" y="533.8">
          61PT
        </text>
        <text fontSize="18" textAnchor="middle" x="419.6" y="494.8">
          建设花园1号公用配电站
        </text>
        <text fontSize="12" x="1950.6" y="615.5">
          YJV22
        </text>
        <text fontSize="12" x="1950.6" y="627.9">
          10m
        </text>
        <text fontSize="12" x="1950.6" y="640.3">
          70mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="1948.1" y="731.1">
          SCB11-500/10
        </text>
        <text fontSize="12" textAnchor="middle" x="1948.1" y="743.4">
          2002026605
        </text>
        <text fontSize="12" textAnchor="end" x="2207.2" y="550.7">
          61PT40
        </text>
        <text fontSize="12" textAnchor="end" x="1991.8" y="583.4">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="2073.2" y="584.4">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="1943.2" y="583.4">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="2030.7" y="584.1">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="2122.5" y="590.9">
          60440
        </text>
        <text fontSize="12" x="2002.1" y="501.3">
          601
        </text>
        <text fontSize="12" x="2088.1" y="501.3">
          603
        </text>
        <text fontSize="12" x="1953.1" y="501.3">
          801
        </text>
        <text fontSize="12" x="2043.1" y="501.3">
          602
        </text>
        <text fontSize="12" x="2135.1" y="501.3">
          604
        </text>
        <text fontSize="12" x="2001.6" y="538.3">
          6014
        </text>
        <text fontSize="12" x="2087.6" y="538.3">
          6034
        </text>
        <text fontSize="12" x="1952.6" y="538.3">
          8014
        </text>
        <text fontSize="12" x="2042.6" y="538.3">
          6024
        </text>
        <text fontSize="12" x="2196.6" y="502.3">
          61PT
        </text>
        <text fontSize="12" x="2134.6" y="539.5">
          6044
        </text>
        <text fontSize="18" textAnchor="middle" x="2084.6" y="462.8">
          宝兴阁2号A座公用配电站
        </text>
        <text fontSize="12" x="1655.6" y="597.4">
          YJV22
        </text>
        <text fontSize="12" x="1655.6" y="609.8">
          12m
        </text>
        <text fontSize="12" x="1655.6" y="622.1">
          50mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="1650.6" y="731.1">
          S11-M.R-500/10
        </text>
        <text fontSize="12" textAnchor="middle" x="1650.6" y="743.4">
          2002115186
        </text>
        <text fontSize="12" x="1656.7" y="537.3">
          801
        </text>
        <text fontSize="12" x="1706.7" y="537.3">
          601
        </text>
        <text fontSize="12" x="1756.7" y="537.3">
          602
        </text>
        <text fontSize="12" textAnchor="end" x="1636.2" y="565.3">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="1685.9" y="565.3">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="1746.2" y="585.3">
          60240
        </text>
        <text fontSize="18" textAnchor="middle" x="1690.1" y="497.8">
          宝兴阁3号A座公用配电站
        </text>
        <text fontSize="12" x="1255.6" y="605.4">
          YJV22
        </text>
        <text fontSize="12" x="1255.6" y="617.8">
          12m
        </text>
        <text fontSize="12" x="1255.6" y="630.1">
          50mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="1255.6" y="729.1">
          S11-M-500/10
        </text>
        <text fontSize="12" textAnchor="middle" x="1255.6" y="741.4">
          2002026370
        </text>
        <text fontSize="12" x="1261.7" y="535.3">
          801
        </text>
        <text fontSize="12" x="1366.7" y="535.3">
          602
        </text>
        <text fontSize="12" x="1416.7" y="535.3">
          603
        </text>
        <text fontSize="12" x="1311.7" y="535.3">
          601
        </text>
        <text fontSize="12" textAnchor="end" x="1251.2" y="583.3">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="1300.9" y="583.3">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="1356.2" y="583.3">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="1406.2" y="583.3">
          60340
        </text>
        <text fontSize="18" textAnchor="middle" x="1327.6" y="495.8">
          城市花园宝华阁2号C座公用配电站
        </text>
        <text fontSize="8" x="937.6" y="612.3">
          YJV22-8.7/15kV -3×70mm2
        </text>
        <text fontSize="8" x="937.6" y="620.9">
          8m
        </text>
        <text fontSize="8" x="937.6" y="629.5">
          70mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="932.6" y="728.9">
          #1
        </text>
        <text fontSize="12" textAnchor="middle" x="932.6" y="741.3">
          SCB11-1000/10
        </text>
        <text fontSize="12" textAnchor="middle" x="932.6" y="753.6">
          2002026382
        </text>
        <text fontSize="12" x="1008.7" y="535.3">
          601
        </text>
        <text fontSize="12" x="1048.7" y="535.3">
          602
        </text>
        <text fontSize="12" x="938.7" y="535.3">
          801
        </text>
        <text fontSize="12" textAnchor="end" x="1037.2" y="581.9">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="997.2" y="581.5">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="926.1" y="582.6">
          80140
        </text>
        <text fontSize="18" textAnchor="middle" x="996.1" y="495.8">
          城市花园宝华阁4号B座公用配电站
        </text>
        <text fontSize="12" x="2286.7" y="288.9">
          YJV22
        </text>
        <text fontSize="12" x="2286.7" y="301.3">
          12m
        </text>
        <text fontSize="12" x="2286.7" y="313.6">
          50mm²
        </text>
        <text fontSize="12" x="2235.1" y="383.3">
          S11-M-630/10
        </text>
        <text fontSize="12" x="2235.1" y="395.7">
          2002055138
        </text>
        <text fontSize="12" textAnchor="end" x="2322.9" y="234.2">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="2234.8" y="235.4">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="2276.5" y="234.8">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="2434.7" y="199.4">
          61PT40
        </text>
        <text fontSize="12" textAnchor="end" x="2415.6" y="233.1">
          60440
        </text>
        <text fontSize="12" textAnchor="end" x="2193.9" y="235.4">
          60140
        </text>
        <text fontSize="12" x="2331.1" y="151.8">
          603(常开)
        </text>
        <text fontSize="8" x="2240" y="151.3">
          602
        </text>
        <text fontSize="12" x="2284.1" y="151.8">
          801
        </text>
        <text fontSize="12" x="2398.1" y="151.8">
          604
        </text>
        <text fontSize="12" x="2202.1" y="151.8">
          601
        </text>
        <text fontSize="12" x="2330.6" y="188.8">
          6034
        </text>
        <text fontSize="12" x="2243.6" y="188.8">
          6024
        </text>
        <text fontSize="12" x="2283.6" y="188.8">
          8014
        </text>
        <text fontSize="12" x="2396.3" y="185.7">
          6044
        </text>
        <text fontSize="12" x="2449.6" y="152.5">
          61PT
        </text>
        <text fontSize="12" x="2201.6" y="188.8">
          6014
        </text>
        <text fontSize="18" textAnchor="middle" x="2320.1" y="112.8">
          宝怡阁公用配电站
        </text>
        <text fontSize="12" x="749.6" y="601.4">
          YJV22
        </text>
        <text fontSize="12" x="749.6" y="613.8">
          10m
        </text>
        <text fontSize="12" x="749.6" y="626.1">
          50mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="744.6" y="735.1">
          S11-M-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="744.6" y="747.4">
          2002083055
        </text>
        <text fontSize="12" x="705.7" y="541.3">
          601
        </text>
        <text fontSize="12" x="750.7" y="541.3">
          801
        </text>
        <text fontSize="12" textAnchor="end" x="741.1" y="588.7">
          80140
        </text>
        <text fontSize="18" textAnchor="middle" x="735.1" y="501.8">
          天门泊花园公用配电站
        </text>
        <text fontSize="12" x="379.3" y="309.6">
          YJV22
        </text>
        <text fontSize="12" x="379.3" y="322">
          10m
        </text>
        <text fontSize="12" x="295.9" y="317.3">
          YJV22
        </text>
        <text fontSize="12" x="295.9" y="329.7">
          10m
        </text>
        <text
          fontSize="10"
          transform="matrix(0 1 -1 0 733.1 -230.3)"
          x="481.7"
          y="251.4"
        >
          #2
        </text>
        <text
          fontSize="10"
          transform="matrix(0 1 -1 0 722.8 -220)"
          x="471.4"
          y="251.4"
        >
          S9-630/10
        </text>
        <text
          fontSize="10"
          transform="matrix(0 1 -1 0 712.5 -209.7)"
          x="461.1"
          y="251.4"
        >
          2002029546
        </text>
        <text fontSize="12" x="546.7" y="261.7">
          #1
        </text>
        <text fontSize="12" x="546.7" y="274.1">
          SBH15-M-630/10
        </text>
        <text fontSize="12" x="546.7" y="286.4">
          2002029541
        </text>
        <text fontSize="12" textAnchor="end" x="489" y="207.5">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="418.3" y="207.5">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="373.5" y="205.8">
          80240
        </text>
        <text fontSize="12" textAnchor="end" x="323.6" y="207.5">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="284.5" y="206.3">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="562.8" y="151.3">
          61PT40
        </text>
        <text fontSize="12" x="581.6" y="124.3">
          61PT
        </text>
        <text fontSize="12" x="498.6" y="161.3">
          6034
        </text>
        <text fontSize="12" x="424.6" y="161.3">
          6024
        </text>
        <text fontSize="12" x="380.6" y="161.3">
          8024
        </text>
        <text fontSize="12" x="336.6" y="161.3">
          6014
        </text>
        <text fontSize="12" x="294.6" y="161.3">
          8014
        </text>
        <text fontSize="12" x="499.1" y="124.3">
          603
        </text>
        <text fontSize="12" x="425.1" y="124.3">
          602
        </text>
        <text fontSize="12" x="381.1" y="124.3">
          802
        </text>
        <text fontSize="12" x="337.1" y="124.3">
          601
        </text>
        <text fontSize="12" x="295.1" y="124.3">
          801
        </text>
        <text fontSize="18" textAnchor="middle" x="449.1" y="84.8">
          天明花园D区公用配电站
        </text>
        <text fontSize="12" x="983" y="242.3">
          YJV22
        </text>
        <text fontSize="12" x="983" y="254.7">
          15m
        </text>
        <text
          fontSize="12"
          transform="matrix(0 1 -1 0 1328.8 -971.6)"
          x="1150.2"
          y="178.6"
        >
          #1
        </text>
        <text
          fontSize="12"
          transform="matrix(0 1 -1 0 1316.5 -959.3)"
          x="1137.9"
          y="178.6"
        >
          S9-630/10
        </text>
        <text
          fontSize="12"
          transform="matrix(0 1 -1 0 1304.1 -946.9)"
          x="1125.5"
          y="178.6"
        >
          2002091809
        </text>
        <text
          fontSize="12"
          transform="matrix(0 1 -1 0 1385.8 -1038.2)"
          x="1212"
          y="173.8"
        >
          #2
        </text>
        <text
          fontSize="12"
          transform="matrix(0 1 -1 0 1373.4 -1025.8)"
          x="1199.6"
          y="173.8"
        >
          S9-630/10
        </text>
        <text
          fontSize="12"
          transform="matrix(0 1 -1 0 1361.1 -1013.5)"
          x="1187.3"
          y="173.8"
        >
          2002083065
        </text>
        <text fontSize="12" x="970.2" y="182.3">
          802
        </text>
        <text fontSize="12" x="1025.2" y="182.3">
          801
        </text>
        <text fontSize="12" x="1060.2" y="182.3">
          601
        </text>
        <text fontSize="12" textAnchor="end" x="949.8" y="210.3">
          80240
        </text>
        <text fontSize="12" textAnchor="end" x="1004.8" y="210.3">
          80140
        </text>
        <text fontSize="18" textAnchor="middle" x="1055.1" y="140.8">
          新城豪庭公用配电站
        </text>
        <text fontSize="12" x="1540.5" y="264.6">
          YJV22-3*70
        </text>
        <text fontSize="12" x="1540.5" y="276.9">
          15m
        </text>
        <text fontSize="12" x="1540.5" y="289.3">
          70mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="1593.6" y="363.9">
          SCB11-1000/10
        </text>
        <text fontSize="12" textAnchor="end" x="1755.6" y="215.4">
          60440
        </text>
        <text fontSize="12" textAnchor="end" x="1702.6" y="216.1">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="1657" y="215.4">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="1599.2" y="217.1">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="1559" y="216.1">
          60140
        </text>
        <text fontSize="10" textAnchor="end" x="1508.3" y="178.1">
          61PT40
        </text>
        <text fontSize="12" x="1516.1" y="133.3">
          61PT
        </text>
        <text fontSize="12" x="1762.1" y="170.3">
          6044
        </text>
        <text fontSize="12" x="1711.1" y="170.3">
          6034
        </text>
        <text fontSize="12" x="1666.1" y="170.3">
          6024
        </text>
        <text fontSize="12" x="1613.1" y="170.3">
          8014
        </text>
        <text fontSize="12" x="1570.1" y="170.3">
          6014
        </text>
        <text fontSize="12" x="1762.6" y="133.3">
          604
        </text>
        <text fontSize="8" x="1713.1" y="132.6">
          603(常开)
        </text>
        <text fontSize="12" x="1666.6" y="133.3">
          602
        </text>
        <text fontSize="12" x="1613.6" y="133.3">
          801
        </text>
        <text fontSize="12" x="1570.6" y="133.3">
          601
        </text>
        <text fontSize="18" textAnchor="middle" x="1611.6" y="93.8">
          天明花园B区第六幢公用配电站
        </text>
        <text fontSize="12" x="1232.1" y="1082.1">
          YJV22
        </text>
        <text fontSize="12" x="1232.1" y="1094.4">
          15m
        </text>
        <text fontSize="12" x="1291.1" y="1082.1">
          YJV22
        </text>
        <text fontSize="12" x="1291.1" y="1094.4">
          12m
        </text>
        <text fontSize="12" x="1340.1" y="1082.1">
          YJV22
        </text>
        <text fontSize="12" x="1340.1" y="1094.4">
          10m
        </text>
        <text fontSize="12" textAnchor="middle" x="1213.4" y="1214.6">
          #3
        </text>
        <text fontSize="12" textAnchor="middle" x="1213.4" y="1227">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="1213.4" y="1239.3">
          2002091379
        </text>
        <text fontSize="12" x="1248.9" y="1200.4">
          #2
        </text>
        <text fontSize="12" x="1248.9" y="1212.8">
          SG10-630/10
        </text>
        <text fontSize="12" x="1248.9" y="1225.1">
          2002031788
        </text>
        <text fontSize="12" textAnchor="middle" x="1350.4" y="1208.8">
          #1
        </text>
        <text fontSize="12" textAnchor="middle" x="1350.4" y="1221.2">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="1350.4" y="1233.5">
          2002031520
        </text>
        <text fontSize="12" textAnchor="end" x="1507.9" y="1026.3">
          61PT40
        </text>
        <text fontSize="12" textAnchor="end" x="1166.9" y="1061.5">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="1225.8" y="1062.4">
          80340
        </text>
        <text fontSize="12" textAnchor="end" x="1284.8" y="1061.5">
          80240
        </text>
        <text fontSize="12" textAnchor="end" x="1331.8" y="1061.3">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="1380.1" y="1061.9">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="1423.4" y="1060.9">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="1463.4" y="1062.7">
          60440
        </text>
        <text fontSize="12" x="1174.1" y="979.8">
          601
        </text>
        <text fontSize="12" x="1232.1" y="979.8">
          803
        </text>
        <text fontSize="12" x="1291.1" y="979.8">
          802
        </text>
        <text fontSize="12" x="1340.1" y="979.8">
          801
        </text>
        <text fontSize="12" x="1389.1" y="979.8">
          602
        </text>
        <text fontSize="12" x="1431.1" y="979.8">
          603
        </text>
        <text fontSize="12" x="1471.1" y="979.8">
          604
        </text>
        <text fontSize="12" x="1514.6" y="979.8">
          61PT
        </text>
        <text fontSize="12" x="1173.6" y="1016.8">
          6014
        </text>
        <text fontSize="12" x="1231.6" y="1016.8">
          8034
        </text>
        <text fontSize="12" x="1290.6" y="1016.8">
          8024
        </text>
        <text fontSize="12" x="1339.6" y="1016.8">
          8014
        </text>
        <text fontSize="12" x="1388.6" y="1016.8">
          6024
        </text>
        <text fontSize="12" x="1430.6" y="1016.8">
          6034
        </text>
        <text fontSize="12" x="1468.3" y="1017.1">
          6044
        </text>
        <text fontSize="18" textAnchor="middle" x="1372.1" y="940.8">
          大信置业G专用配电站
        </text>
        <text fontSize="12" x="1545.6" y="1509.1">
          YJV22
        </text>
        <text fontSize="12" x="1545.6" y="1521.4">
          17m
        </text>
        <text fontSize="12" x="1592.6" y="1502.9">
          YJV22
        </text>
        <text fontSize="12" x="1592.6" y="1515.3">
          15m
        </text>
        <text fontSize="12" x="1592.6" y="1527.6">
          50mm²
        </text>
        <text fontSize="12" textAnchor="middle" x="1588.1" y="1637.3">
          #1
        </text>
        <text fontSize="12" textAnchor="middle" x="1588.1" y="1649.7">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="1588.1" y="1662">
          2002031502
        </text>
        <text fontSize="12" textAnchor="end" x="1539.5" y="1638.3">
          #2
        </text>
        <text fontSize="12" textAnchor="end" x="1539.5" y="1650.7">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="end" x="1539.5" y="1663.1">
          2002031507
        </text>
        <text fontSize="12" textAnchor="end" x="1887.6" y="1453.9">
          61PT40
        </text>
        <text fontSize="12" textAnchor="end" x="1535.7" y="1488.8">
          80240
        </text>
        <text fontSize="12" textAnchor="end" x="1583.4" y="1488.7">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="1631.3" y="1488.9">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="1675.5" y="1490.5">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="1718.7" y="1489.3">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="1761.9" y="1488.9">
          60440
        </text>
        <text fontSize="12" textAnchor="end" x="1799.7" y="1488.1">
          60540
        </text>
        <text fontSize="12" textAnchor="end" x="1838.7" y="1488.5">
          60640
        </text>
        <text fontSize="12" x="1544.6" y="1406.8">
          802
        </text>
        <text fontSize="12" x="1592.6" y="1406.8">
          801
        </text>
        <text fontSize="12" x="1641.6" y="1406.8">
          601
        </text>
        <text fontSize="12" x="1685.6" y="1406.8">
          602
        </text>
        <text fontSize="12" x="1726.3" y="1407.9">
          603
        </text>
        <text fontSize="12" x="1771.6" y="1406.8">
          604
        </text>
        <text fontSize="12" x="1806.6" y="1406.8">
          605
        </text>
        <text fontSize="12" x="1845.6" y="1406.8">
          606
        </text>
        <text fontSize="12" x="1894.1" y="1406.8">
          61PT
        </text>
        <text fontSize="12" x="1544.1" y="1443.8">
          8024
        </text>
        <text fontSize="12" x="1592.1" y="1443.8">
          8014
        </text>
        <text fontSize="12" x="1641.1" y="1443.8">
          6014
        </text>
        <text fontSize="12" x="1685.1" y="1443.8">
          6024
        </text>
        <text fontSize="12" textAnchor="end" x="1755.8" y="1443.7">
          6034
        </text>
        <text fontSize="12" x="1771.1" y="1443.8">
          6044
        </text>
        <text fontSize="12" x="1806.1" y="1443.8">
          6054
        </text>
        <text fontSize="12" x="1841.6" y="1444.4">
          6064
        </text>
        <text fontSize="18" textAnchor="middle" x="1720.1" y="1366.8">
          大信置业专用配电站
        </text>
        <text fontSize="12" x="2432.1" y="1123.1">
          YJV22
        </text>
        <text fontSize="12" x="2432.1" y="1135.4">
          11m
        </text>
        <text fontSize="12" x="2368.1" y="1123.1">
          YJV22
        </text>
        <text fontSize="12" x="2368.1" y="1135.4">
          14m
        </text>
        <text fontSize="12" x="2309.1" y="1123.1">
          YJV22
        </text>
        <text fontSize="12" x="2309.1" y="1135.4">
          17m
        </text>
        <text fontSize="12" textAnchor="middle" x="2430.6" y="1256">
          #1
        </text>
        <text fontSize="12" textAnchor="middle" x="2430.6" y="1268.4">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="2430.6" y="1280.8">
          2002031792
        </text>
        <text fontSize="12" textAnchor="middle" x="2302" y="1252.2">
          #3
        </text>
        <text fontSize="12" textAnchor="middle" x="2302" y="1264.5">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="2302" y="1276.9">
          2002031795
        </text>
        <text fontSize="12" textAnchor="middle" x="2366.1" y="1273.5">
          #2
        </text>
        <text fontSize="12" textAnchor="middle" x="2366.1" y="1285.8">
          SG10-630/10
        </text>
        <text fontSize="12" textAnchor="middle" x="2366.1" y="1298.2">
          2002031793
        </text>
        <text fontSize="8" textAnchor="end" x="2658.4" y="1063.3">
          61PT40
        </text>
        <text fontSize="12" textAnchor="end" x="2257.3" y="1102.9">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="2300.2" y="1102.2">
          80340
        </text>
        <text fontSize="12" textAnchor="end" x="2360.4" y="1103.3">
          80240
        </text>
        <text fontSize="12" textAnchor="end" x="2423.2" y="1102.9">
          80140
        </text>
        <text fontSize="12" textAnchor="end" x="2470.1" y="1102.2">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="2536.4" y="1103.6">
          60340
        </text>
        <text fontSize="12" textAnchor="end" x="2579.7" y="1103.6">
          60440
        </text>
        <text fontSize="12" textAnchor="end" x="2620.2" y="1104.1">
          60540
        </text>
        <text fontSize="12" x="2267.1" y="1020.8">
          601
        </text>
        <text fontSize="12" x="2309.1" y="1020.8">
          803
        </text>
        <text fontSize="12" x="2368.1" y="1020.8">
          802
        </text>
        <text fontSize="12" x="2432.1" y="1020.8">
          801
        </text>
        <text fill="#f00" fontSize="12" x="2481.1" y="1020.8">
          602(常开)
        </text>
        <text fontSize="12" x="2548.1" y="1020.8">
          603
        </text>
        <text fontSize="12" x="2583.1" y="1020.8">
          604
        </text>
        <text fontSize="12" x="2622.1" y="1020.8">
          605
        </text>
        <text fontSize="12" x="2665.6" y="1020.8">
          61PT
        </text>
        <text fontSize="12" x="2266.6" y="1057.8">
          6014
        </text>
        <text fontSize="12" x="2308.6" y="1057.8">
          8034
        </text>
        <text fontSize="12" x="2367.6" y="1057.8">
          8024
        </text>
        <text fontSize="12" x="2431.6" y="1057.8">
          8014
        </text>
        <text fontSize="12" x="2480.6" y="1057.8">
          6024
        </text>
        <text fontSize="12" textAnchor="end" x="2574.1" y="1058.1">
          6034
        </text>
        <text fontSize="12" x="2582.6" y="1057.8">
          6044
        </text>
        <text fontSize="10" x="2618.4" y="1055.6">
          6054
        </text>
        <text fontSize="18" textAnchor="middle" x="2507.1" y="981.8">
          大信置业D专用配电站
        </text>
        <text fontSize="14" x="2034.6" y="1614">
          YJV22
        </text>
        <text fontSize="14" x="2034.6" y="1628.4">
          312m
        </text>
        <text fontSize="14" x="2034.6" y="1642.9">
          70mm²
        </text>
        <text fontSize="12" x="2137.6" y="1433.4">
          YJV22
        </text>
        <text fontSize="12" x="2137.6" y="1445.8">
          5m
        </text>
        <text fontSize="12" x="2137.6" y="1458.1">
          70mm²
        </text>
        <text fontSize="12" x="2033.7" y="1373.3">
          601
        </text>
        <text fontSize="12" x="2139.6" y="1373.3">
          801
        </text>
        <text fontSize="12" textAnchor="end" x="2128.2" y="1421.3">
          80140
        </text>
        <text fontSize="12" textAnchor="middle" x="2132.6" y="1567.1">
          SCB11-630kVA
        </text>
        <text fontSize="12" textAnchor="middle" x="2132.6" y="1579.4">
          0320000163648112
        </text>
        <text fontSize="18" textAnchor="middle" x="2098.1" y="1333.8">
          万城大信充电桩专用箱变
        </text>
        <text fontSize="12" x="1763.6" y="1074.6">
          YJV22
        </text>
        <text fontSize="12" x="1763.6" y="1086.9">
          15m
        </text>
        <text fontSize="12" textAnchor="middle" x="1758.6" y="1202.1">
          #2
        </text>
        <text fontSize="12" textAnchor="middle" x="1758.6" y="1214.4">
          S11-M-500/10
        </text>
        <text fontSize="12" x="1664.7" y="1008.3">
          601
        </text>
        <text fontSize="12" x="1715.7" y="1008.3">
          602
        </text>
        <text fontSize="12" x="1764.7" y="1008.3">
          801
        </text>
        <text fontSize="12" x="1809.7" y="1008.3">
          603
        </text>
        <text fontSize="12" textAnchor="end" x="1757.5" y="1054.9">
          80140
        </text>
        <text fontSize="18" textAnchor="middle" x="1738.6" y="968.8">
          基边乡#2公用配电站
        </text>
        <text fontSize="12" x="2031.6" y="1085.6">
          YJV22
        </text>
        <text fontSize="12" x="2031.6" y="1097.9">
          0.01m
        </text>
        <text fontSize="12" textAnchor="middle" x="2026.6" y="1198.1">
          #1
        </text>
        <text fontSize="12" textAnchor="middle" x="2026.6" y="1210.4">
          S11-M-630/10
        </text>
        <text fontSize="12" x="1930.7" y="1034.3">
          601
        </text>
        <text fontSize="12" x="1983.7" y="1034.3">
          602
        </text>
        <text fontSize="12" x="2033.6" y="1034.3">
          801
        </text>
        <text fontSize="12" textAnchor="end" x="1919.9" y="1080.8">
          60140
        </text>
        <text fontSize="12" textAnchor="end" x="1973.7" y="1080.8">
          60240
        </text>
        <text fontSize="12" textAnchor="end" x="2023.5" y="1080.8">
          80140
        </text>
        <text fontSize="18" textAnchor="middle" x="1975.6" y="994.8">
          基边乡#1公用配电站
        </text>
        <text fontSize="14" x="1982.6" y="1238.3">
          YJV22
        </text>
        <text fontSize="14" x="1982.6" y="1252.7">
          16m
        </text>
        <text fontSize="14" x="1982.6" y="1267.1">
          70mm²
        </text>
        <text fill="#f0f" fontSize="12" x="2323.7" y="173.7">
          自动转供）
        </text>
        <text fill="#f0f" fontSize="12" x="2471.6" y="1043.1">
          自动转供）
        </text>
        <text fill="#f0f" fontSize="9" x="1705.2" y="152.3">
          自动转供）
        </text>
        <text fill="#f0f" fontSize="30" x="100.7" y="1811.8">
          具备智能分布式保护和馈线自动化功能，当GOOSE通信异常或通信中断，
        </text>
        <text fill="#f0f" fontSize="30" x="100.7" y="1849.3">
          全线自动切换至馈线自动化。在智能分布式功能下，环网组具备自转电功能；
        </text>
        <text fill="#f0f" fontSize="30" x="100.7" y="1886.8">
          在就地型馈线自动化功能下，不具备自转电功能。转供优先级由高到低，分别
        </text>
        <text fill="#f0f" fontSize="30" x="100.7" y="1924.3">
          为：宝怡阁公用配电站603开关、天明花园B区第六幢公用配电站603开关、大信
        </text>
        <text fill="#f0f" fontSize="30" x="100.7" y="1961.8">
          置业D专用配电站602开关。
        </text>

        {/* <a xlinkHref="莲塘变电站.svg"> */}
        <text fontSize="18" textAnchor="middle" x="241.1" y="1746.8">
          莲塘变电站
        </text>
        {/* </a> */}

        {/* <a xlinkHref="华捷变电站_705_FEDR.svg"> */}
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="265.1"
        >
          由华捷变
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="277.4"
        >
          电站-华捷
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="289.8"
        >
          孙文线705
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="302.1"
        >
          宝丽阁12
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="314.5"
        >
          幢公用配
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="326.9"
        >
          电站
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="339.2"
        >
          宝丽阁12
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="351.6"
        >
          幢公用配
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="363.9"
        >
          电站G01柜
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="376.3"
        >
          柜601开关
        </text>
        <text
          fill="#f00"
          fontSize="12"
          textAnchor="middle"
          x="2402.9"
          y="388.7"
        >
          引入
        </text>
        {/* </a> */}

        {/* <a xlinkHref="华捷变电站_705_FEDR.svg"> */}
        <text fill="#f00" fontSize="12" x="2173.8" y="271.1">
          由华捷变
        </text>
        <text fill="#f00" fontSize="12" x="2173.8" y="283.5">
          电站-华捷
        </text>
        <text fill="#f00" fontSize="12" x="2173.8" y="295.8">
          孙文线705
        </text>
        <text fill="#f00" fontSize="12" x="2173.8" y="308.2">
          宝金阁公
        </text>
        <text fill="#f00" fontSize="12" x="2173.8" y="320.5">
          用配电站
        </text>
        <text fill="#f00" fontSize="12" x="2173.8" y="332.9">
          G06柜602
        </text>
        <text fill="#f00" fontSize="12" x="2173.8" y="345.3">
          开关引入
        </text>
        {/* </a> */}
        {/* <a xlinkHref="华捷变电站_722_FEDR.svg"> */}
        <text fill="#f00" fontSize="12" x="1635.5" y="264">
          由华捷变
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="276.3">
          电站-华捷
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="288.7">
          岐头线722
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="301">
          天明花园B
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="313.4">
          区第十一
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="325.8">
          幢公用配
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="338.1">
          电站
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="350.5">
          G01柜601
        </text>
        <text fill="#f00" fontSize="12" x="1635.5" y="362.8">
          开关引入
        </text>
        {/* </a> */}
        {/* <a xlinkHref="华捷变电站_722_FEDR.svg"> */}
        <text fill="#f00" fontSize="12" x="1732.1" y="266.6">
          由华捷变
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="278.9">
          电站-华捷
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="291.3">
          岐头线722
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="303.7">
          天明花园A
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="316">
          区二十三
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="328.4">
          幢公用配
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="340.7">
          电站
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="353.1">
          G06柜603
        </text>
        <text fill="#f00" fontSize="12" x="1732.1" y="365.5">
          开关引入
        </text>
        {/* </a> */}
        {/* <a xlinkHref="华捷变电站_722_FEDR.svg"> */}
        <text fill="#f00" fontSize="12" x="2452.2" y="1169.2">
          由华捷变
        </text>
        <text fill="#f00" fontSize="12" x="2452.2" y="1181.6">
          电站-华捷
        </text>
        <text fill="#f00" fontSize="12" x="2452.2" y="1193.9">
          岐头线722
        </text>
        <text fill="#f00" fontSize="12" x="2452.2" y="1206.3">
          岐头线公
        </text>
        <text fill="#f00" fontSize="12" x="2452.2" y="1218.6">
          用电缆分
        </text>
        <text fill="#f00" fontSize="12" x="2452.2" y="1231">
          接箱
        </text>
        <text fill="#f00" fontSize="12" x="2452.2" y="1243.4">
          G04柜604
        </text>
        <text fill="#f00" fontSize="12" x="2452.2" y="1255.7">
          开关引入
        </text>
        {/* </a> */}
        <text
          fill="red"
          fontSize="36"
          textAnchor="middle"
          x="2714.2"
          y="1909.8"
        >
          1/1
        </text>
        <text fontSize="22" textAnchor="middle" x="2222.5" y="1824.5">
          石岐供电分局
        </text>
        <text fontSize="22" textAnchor="middle" x="2599.5" y="1824.5">
          石岐供电分局
        </text>
        <text fontSize="20" textAnchor="middle" x="2063.2" y="1866.8">
          绘 图
        </text>
        <text fontSize="20" textAnchor="middle" x="2167.2" y="1866.8">
          吴群体
        </text>
        <text fontSize="20" textAnchor="middle" x="2271.2" y="1866.8">
          日 期
        </text>
        <text fontSize="20" textAnchor="middle" x="2365.5" y="1866.8">
          2019-9-16
        </text>
        <text fontSize="20" textAnchor="middle" x="2063.2" y="1905.8">
          审 核
        </text>
        <text fontSize="20" textAnchor="middle" x="2167.2" y="1905.8">
          吴群体
        </text>
        <text fontSize="20" textAnchor="middle" x="2271.2" y="1905.8">
          日 期
        </text>
        <text fontSize="20" textAnchor="middle" x="2365.5" y="1905.8">
          2019-9-16
        </text>
        <text fontSize="20" textAnchor="middle" x="2063.2" y="1944.8">
          发 布
        </text>
        <text fontSize="20" textAnchor="middle" x="2167.2" y="1944.8">
          史小靖
        </text>
        <text fontSize="20" textAnchor="middle" x="2271.2" y="1944.8">
          日 期
        </text>
        <text fontSize="20" textAnchor="middle" x="2365.5" y="1944.8">
          2019-9-16
        </text>
        <text fontSize="20" textAnchor="middle" x="2599.5" y="1944.8">
          更新日期：2019-9-16
        </text>
        <text fontSize="20" textAnchor="middle" x="2599.5" y="1905.8">
          莲塘天明线706
        </text>
        <text fontSize="20" textAnchor="middle" x="2599.5" y="1866.8">
          莲塘变电站
        </text>

        <g fill="none" stroke="#000">
          <path d="m988.6 892.3v35" />
          <path d="m1028.6 953.3v-61" />
          <path d="m2535.6 607.3v75h35v-70" />
          <path d="m485.6 1145.3v-66" />
          <path d="m671.6 1042.3v39" />
          <path d="m716.6 1127.3v18" />
          <path d="m716.6 1145.3h-231" />
          <path d="m742.6 1057.3v93" />
          <path d="m742.6 1150.3h-301" />
          <path d="m441.6 1150.3v-71" />
          <path d="m773.6 1127.3v30" />
          <path d="m773.6 1157.3h-376" />
          <path d="m397.6 1157.3v-78" />
          <path d="m800.6 1057.3v108" />
          <path d="m800.6 1165.3-445 1" />
          <path d="m355.6 1166.3v-87" />
          <path d="m347.6 626.3h-96" />
          <path d="m347.6 581.3v45" />
          <path d="m251.6 626.3v-75" />
          <path d="m400.6 581.3v55" />
          <path d="m400.6 636.3h-164" />
          <path d="m236.6 636.3v-85" />
          <path d="m294.6 544.3h-21" />
          <path d="m273.6 544.3v6" />
          <path d="m2130.1 548.8v41" />
          <path d="m2130.1 589.8h105" />
          <path d="m2235.1 589.8v-72" />
          <path d="m2083.1 548.8v51" />
          <path d="m2083.1 599.8h172" />
          <path d="m2255.1 599.8v-82" />
          <path d="m2192.1 512.8h-22" />
          <path d="m2170.1 512.8v5" />
          <path d="m2326.1 249.3v-50" />
          <path d="m2486.1 205.3-1 43" />
          <path d="m2485.1 249.3h-159" />
          <path d="m2509.1 207.3v53" />
          <path d="m2509.1 260.3h-270" />
          <path d="m2239.1 260.3v-61" />
          <path d="m494.1 234.8v-63" />
          <path d="m643.1 220.8v18" />
          <path d="m618.1 233.8-124 1" />
          <path d="m618.1 151.8v82" />
          <path d="m577.1 135.8v38" />
          <path d="m643.1 238.8h-310" />
          <path d="m333.1 238.8-1-67" />
          <path d="m964.1 158.8h5" strokeWidth="3" />
          <path d="m1750.6 250.8 7.1-.1-.1-69.9" />
          <path d="m1446.6 250.8h304" />
          <path d="m1446.6 228.8v22" />
          <path d="m1706.6 242.8v-62" />
          <path d="m1473.6 242.8h233" />
          <path d="m1473.6 170.8v72" />
          <path d="m1446.6 170.8h27" />
          <path d="m1446.6 158.8v12" />
          <path d="m1511.6 143.8v39" />
          <path d="m1384.1 1099.3v-72" />
          <path d="m1581.1 1098.3-197 1" />
          <path d="m1581.1 1005.3v93" />
          <path d="m1426.1 1093.3v-66" />
          <path d="m1556.1 1093.3h-130" />
          <path d="m1556.1 1075.3v18" />
          <path d="m1510.1 991.3v38" />
          <path d="m1889.6 1417.3v39" />
          <path d="m1919.6 1503.3v29" />
          <path d="m1919.6 1532.3h-239" />
          <path d="m1680.6 1532.3v-78" />
          <path d="m1945.6 1434.3v107" />
          <path d="m1945.6 1541.3h-309" />
          <path d="m1636.6 1541.3v-87" />
          <path d="m2661.1 1031.3v39" />
          <path d="m2686.1 1102.3v45" />
          <path d="m2686.1 1147.3h-211" />
          <path d="m2475.1 1147.3 1-79" />
          <path d="m2717.1 1098.3v56" />
          <path d="m2717.1 1154.3h-455" />
          <path d="m2262.1 1154.3v-86" />
          <path d="m2067.6 1349.8v45" />
          <path d="m2067.6 1394.8h25" />
          <path d="m2092.6 1394.8v-45" />
        </g>

        <path d="m69.3 52.3h2725" stroke="#f00" strokeWidth="6" />
        <path d="m69.3 52.3v1923.5" stroke="#f00" strokeWidth="6" />
        <path d="m2794.3 1975.8v-1923.5" stroke="#f00" strokeWidth="6" />
        <path d="m69.3 1975.8h2725" stroke="#f00" strokeWidth="6" />
        <circle
          cx="2714.2"
          cy="1895.8"
          fill="none"
          r="36"
          stroke="#f00"
          strokeWidth="2"
        />
        <path d="m2024.3 1796.8h754" stroke="#000" strokeWidth="3" />
        <path d="m2024.3 1842.3h754" stroke="#000" />
        <path d="m2024.3 1881.3h754" stroke="#000" />
        <path d="m2024.3 1920.3h754" stroke="#000" />
        <path d="m2024.3 1959.3h754" stroke="#000" strokeWidth="3" />
        <path d="m2024.3 1958.8v-162.5" stroke="#000" strokeWidth="3" />
        <path d="m2102.3 1958.8v-117" stroke="#000" />
        <path d="m2232.3 1958.8v-117" stroke="#000" />
        <path d="m2310.3 1958.8v-117" stroke="#000" />
        <path d="m2420.8 1958.8v-162" stroke="#000" />
        <path d="m2778.3 1958.8v-162" stroke="#000" strokeWidth="3" />

        <g fill="none" stroke="red" strokeDasharray="5 2 5 2" strokeWidth="2">
          <path d="m1434.6 368.8v-271h361v271z" stroke="#f0f" />
          <path d="m2216.6 1301.8v-316h533v316z" stroke="#f0f" />
          <path d="m2149.6 410.8v-294h371v294z" stroke="#f0f" />

          <path d="m397.6 1090.8v63m0 0a3.5 3.5 0 0 0 0 7v1m0 0a3.5 3.5 0 0 0 0 7v172h-201v-928h136v-69m0 0a8 8 0 0 1 0-16v-81m0 0a8 8 0 0 1 0-16v-47" />
          <path d="m494.6 183.8v47m0 0a8 8 0 0 0 0 16v81m0 0a8 8 0 0 0 0 16v20m0 0a8 8 0 0 0 0 16v2h1212v-128m0 0a3.5 3.5 0 0 1 0-7v-1m0 0a3.5 3.5 0 0 1 0-7v-46" />
          <path d="m420.6 183.8v51m0 0a4 4 0 0 0 0 8v80m0 0a4 4 0 0 0 0 8v1m0 0a4 4 0 0 0 0 8v32h634v-43m0 0a8 8 0 1 1 0-16v-37m0 0a8 8 0 1 1 0-16v-54" />
          <path d="m964.6 205.8v115h205v-77" />
          <path d="m485.6 1090.8v52.5m0 0a2 2 0 0 0 0 4v1m0 0a2 2 0 0 0 0 4v3m0 0a2 2 0 0 0 0 4v4m0 0a2 2 0 0 0 0 4v134.5h941v-195.5m0 0a8 8 0 1 1 0-16v-51.5" />
          <path d="m1169.6 1038.8v213h-261v-313" />
          <path d="m1384.6 1038.8v255m0 0a8 8 0 1 0 0 16v365h252v-125.5m0 0a8 8 0 1 1 0-16v-66.5" />
          <path d="m1680.6 1466.8v62m0 0a4 4 0 1 0 0 8v1m0 0a4 4 0 1 0 0 8v155h582v-621" />
          <path d="m2543.6 1079.8v64.5m0 0a3 3 0 0 0 0 6v1m0 0a3 3 0 0 0 0 6v152.5h234v-435h-272v-221" />
          <path d="m355.6 1090.8v66.5m0 0a8 8 0 0 0 0 16v128.5h-70v-427h115v-38m0 0a8 8 0 0 1 0-16v-176.5m0 0a8 8 0 0 1 0-16v-35.5" />
          <path d="m450.6 592.8v210h250v-238" />
          <path d="m347.6 592.8v29.5m0 0a4.5 4.5 0 0 0 0 9v1m0 0a4.5 4.5 0 0 0 0 9v187.5h1736v-268" />
          <path d="m1360.6 558.8v217h-318v-217" />
          <path d="m2130.6 560.8v31m0 0a8 8 0 0 0 0 16v148h196v-487.5m0 0a8 8 0 0 1 0-16v-41.5" />
          <path d="m228.6 1700.8h213v-532.5m0 0a3 3 0 0 1 0-6v-2m0 0a3 3 0 0 1 0-6v-1m0 0a3 3 0 0 1 0-6v-56.5" />
          <path d="m1997.6 560.8v195h-247v-195" />
          <path d="m2038.6 560.8v245h-628v-247" />
          <path d="m1466.6 1038.8v52.5m0 0a2 2 0 1 0 0 4v1m0 0a2 2 0 1 0 0 4v151.5h192v-220" />
          <path d="m1709.6 1031.8v195h215v-169" />
          <path d="m1724.6 1466.8v61.5m0 0a4 4 0 1 0 0 8v1m0 0a4 4 0 1 0 0 8v129.5h303v-278" />
          <path d="m1977.6 1045.8v177h170v-229" />

          <g strokeWidth="1">
            <path d="m1028.6 968.3v80" />
            <path d="m953.6 942.3v25h35v-25" />
            <path d="m2630.6 662.3v80" />
            <path d="m529.6 1094.3v97" />
            <path d="m581.6 1094.3v80" />
            <path d="m544.6 596.3v80" />
            <path d="m494.6 596.3v80" />
            <path d="m1948.1 563.8v80" />
            <path d="m1650.6 563.8v80" />
            <path d="m1255.6 561.8v80" />
            <path d="m932.6 561.8v80" />
            <path d="m2279.1 214.3v80" />
            <path d="m744.6 567.8v80" />
            <path d="m376.1 184.8v142h70v-8" />
            <path d="m290.1 185.8v150h241v-17" />
            <path d="m1019.1 207.8v51h-35v9h120v-17" />
            <path d="m1608.6 195.8v80" />
            <path d="m1227.1 1042.3v89" />
            <path d="m1286.1 1042.3v83" />
            <path d="m1335.1 1042.3v79" />
            <path d="m1540.6 1469.3v80" />
            <path d="m1587.6 1469.3 1 82" />
            <path d="m2427.1 1083.3v80" />
            <path d="m2363.1 1083.3v84" />
            <path d="m2304.1 1083.3 1 80" />
            <path d="m2132.6 1399.8v80" />
            <path d="m1758.6 1034.8v80" />
            <path d="m2026.6 1045.8v80" />
          </g>
        </g>

        <g fill="none" stroke="green" strokeWidth="3">
          <path d="m906.6 892.3h49" />
          <path d="m986.6 892.3h44" />
          <path d="m2503.6 607.3h34" />
          <path d="m2568.6 612.3h62" />
          <path d="m355.6 1008.3h316" />
          <path d="m294.6 510.3h250" />
          <path d="m1948.1 478.8h244" />
          <path d="m1648.6 513.8h104" />
          <path d="m1253.6 511.8h159" />
          <path d="m932.6 511.8h110" />
          <path d="m2197.1 128.3h248" />
          <path d="m697.6 517.8h49" />
          <path d="m290.1 100.8h287" />
          <path d="m969.1 156.8v2h50 35" />
          <path d="m1511.6 109.8h246" />
          <path d="m1169.1 956.3h341" />
          <path d="m1539.6 1383.3h350" />
          <path d="m2262.1 997.3h399" />
          <path d="m2027.6 1349.8h40" />
          <path d="m2092.6 1349.8h40" />
          <path d="m1658.6 984.8h147" />
          <path d="m1922.6 1010.8h106" />
        </g>
      </svg>
    </>
  );
};
