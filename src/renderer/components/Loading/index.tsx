import styles from './index.less';
import { Spin, Icon } from 'antd';

export default () => (
  <div className={styles.loadingWrap}>
    <Spin
      indicator={<Icon type="loading" style={{ fontSize: 30 }} spin />}
      className={styles.loadingIcon}
    />
  </div>
);
