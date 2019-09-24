import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import MyLayout from '@/layouts/MyLayout';
import styles from './Rules.less';

export default ({ location }) => {
  return <MyLayout location={location}>使用原则</MyLayout>;
};
