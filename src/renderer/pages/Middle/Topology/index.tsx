import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import styles from './index.less';
import textArray from './textArray';
import useArray from './useArray';

export default ({ style }) => {
  useEffect(() => {
    // const el = document.getElementById('topology');
    // const arr = el.getElementsByTagName('use');
    // console.log('arr', arr);
    // const res = Array.from(arr).map(a => {
    //   const key = Object.keys(a).filter(
    //     b => b.indexOf('__reactEventHandlers') !== -1
    //   )[0];
    //   return a[key];
    // });
    // console.log('res', JSON.stringify(res));
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

        {useArray.map((a, i) => (
          <use key={i} {...a} />
        ))}

        {textArray.map(({ children, ...rest }, i) => (
          <text key={i} {...rest}>
            {children}
          </text>
        ))}

        {/* 外框 */}
        <g fill="none" stroke="#f00" strokeWidth="6">
          <path d="m69.3 52.3h2725" />
          <path d="m69.3 52.3v1923.5" />
          <path d="m2794.3 1975.8v-1923.5" />
          <path d="m69.3 1975.8h2725" />

          <circle cx="2714.2" cy="1895.8" r="36" strokeWidth="2" />
        </g>

        <g fill="none" stroke="#141414" strokeWidth="2">
          <path d="m157.6 1749.3v-96.7h167.1v96.7z" />
          <path d="m860.1 1151.3v-271h223v271z" />
          {/* 大信D段专用电房 */}
          <path d="m2450.6 845.8v-250h235v250z" />
          <path d="m2128.6 1015.8v-119h56v119z" />
          <path d="m313.6 1293.8v-297h499v297z" />
          <path d="m224.6 794.8v-296h390v296z" />
          <path d="m1902.6 747.8v-281h364v281z" />
          <path d="m1595.6 747.8v-246h189v246z" />
          <path d="m1210.6 745.8v-246h234v246z" />
          <path d="m885.6 757.8v-258h191v258z" />
          <path d="m680.6 751.8v-246h109v246z" />
          <path d="m243.6 347.8v-259h411v259z" />
          <path d="m909.6 279.8v-135h306v135z" />
          {/* 大信置业G专用配电站 */}
          <path d="m1126.6 1243.8v-299h466v299z" />
          {/* 大信置业专用配电站 */}
          <path d="m1462.6 1666.8v-296h495v296z" />
          {/* 万城大信充电桩专用箱变 */}
          <path d="m2008.6 1582.8v-245h179v245z" />
          <path d="m1639.1 1218.8v-246h198v246z" />
          <path d="m1879.6 1214.8v-216h192v216z" />
        </g>

        <g fill="none" stroke="#f0f" strokeDasharray="5 2 5 2" strokeWidth="2">
          <path d="m1434.6 368.8v-271h361v271z" />
          {/* 大信置业D专用配电站 */}
          <path d="m2216.6 1301.8v-316h533v316z" />
          <path d="m2149.6 410.8v-294h371v294z" />
        </g>

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

        <g fill="none" stroke="#000" strokeDasharray="5 2 5 2" strokeWidth="2">
          <path d="m397.6 1090.8v63m0 0a3.5 3.5 0 0 0 0 7v1m0 0a3.5 3.5 0 0 0 0 7v172h-201v-928h136v-69m0 0a8 8 0 0 1 0-16v-81m0 0a8 8 0 0 1 0-16v-47" />
          <path d="m494.6 183.8v47m0 0a8 8 0 0 0 0 16v81m0 0a8 8 0 0 0 0 16v20m0 0a8 8 0 0 0 0 16v2h1212v-128m0 0a3.5 3.5 0 0 1 0-7v-1m0 0a3.5 3.5 0 0 1 0-7v-46" />
          <path d="m420.6 183.8v51m0 0a4 4 0 0 0 0 8v80m0 0a4 4 0 0 0 0 8v1m0 0a4 4 0 0 0 0 8v32h634v-43m0 0a8 8 0 1 1 0-16v-37m0 0a8 8 0 1 1 0-16v-54" />
          <path d="m964.6 205.8v115h205v-77" />
          <path d="m485.6 1090.8v52.5m0 0a2 2 0 0 0 0 4v1m0 0a2 2 0 0 0 0 4v3m0 0a2 2 0 0 0 0 4v4m0 0a2 2 0 0 0 0 4v134.5h941v-195.5m0 0a8 8 0 1 1 0-16v-51.5" />
          <path d="m1169.6 1038.8v213h-261v-313" />
          {/* 大信置业专用配电站 602 */}
          <path d="m1384.6 1038.8v255m0 0a8 8 0 1 0 0 16v365h252v-125.5m0 0a8 8 0 1 1 0-16v-66.5" />
          {/* 万城大信充电桩专用箱变 */}
          <path d="m1724.6 1466.8v61.5m0 0a4 4 0 1 0 0 8v1m0 0a4 4 0 1 0 0 8v129.5h303v-278" />
          {/* 大信置业D专用配电站 602 */}
          <path d="m1680.6 1466.8v62m0 0a4 4 0 1 0 0 8v1m0 0a4 4 0 1 0 0 8v155h582v-621" />
          {/* 大信D段专用电房 */}
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

        <g fill="none" stroke="#000" strokeWidth="3">
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

        <g stroke="#000">
          <path d="m2024.3 1796.8h754" strokeWidth="3" />
          <path d="m2024.3 1842.3h754" />
          <path d="m2024.3 1881.3h754" />
          <path d="m2024.3 1920.3h754" />
          <path d="m2024.3 1959.3h754" strokeWidth="3" />
          <path d="m2024.3 1958.8v-162.5" strokeWidth="3" />
          <path d="m2102.3 1958.8v-117" />
          <path d="m2232.3 1958.8v-117" />
          <path d="m2310.3 1958.8v-117" />
          <path d="m2420.8 1958.8v-162" />
          <path d="m2778.3 1958.8v-162" strokeWidth="3" />
        </g>
      </svg>
    </>
  );
};
