import React from 'react';
import MyLayout from '@/layouts/MyLayout';
import styles from './index.less';

export default ({ location }) => (
  <MyLayout location={location}>
    <div className={styles.container}>
      <div className={styles.tips}>即将上线，敬请期待...</div>
    </div>
  </MyLayout>
);
