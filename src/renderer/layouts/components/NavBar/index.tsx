import { memo, useState, useEffect } from 'react';
import { Menu, Dropdown, Input, Icon, Divider } from 'antd';
import router from 'umi/router';
import { debounce } from 'lodash';
import { CustomIcon } from '@/components/CustomIcon';
import styles from './index.less';
import { connect } from 'dva';
import checkUpdate from '@/utils/checkUpdate';

let lastHistoryLen = 0;

const NavBar = ({
  history,
  isLogin,
  route: { routes },
  location: { pathname },
}) => {
  const { length, action } = history;

  const [curIndx, setCurIndx] = useState(0);

  useEffect(() => {
    // todo fix when length <= 2 will cause some bugs
    if (lastHistoryLen > length) {
      setCurIndx(0);
    }
    lastHistoryLen = length;
  });

  useEffect(() => {
    checkUpdate();
  }, []);

  const handleArrowClick = n => {
    return () => {
      setCurIndx(curIndx + n);
      router.go(n);
    };
  };

  const handleWidgetIconClick = pathname => {
    return () => {
      router.push(`/${pathname}`);
    };
  };

  const handleLogin = type => {
    return () => {
      router.push({
        pathname: `/login`,
        query: {
          redirect: '/low',
          type,
        },
      });
    };
  };

  // todo fix
  const handleRefreshClick = () => {
    location.reload();
  };

  const canGoBack = curIndx + length > 1;
  const canGoForward = curIndx < 0;
  return (
    <div className={styles.nav}>
      <CustomIcon
        className={`${styles.icon} ${!canGoBack ? styles.inactivate : ''}`}
        onClick={canGoBack ? handleArrowClick(-1) : undefined}
        type="icon-arrow-left"
      />
      <CustomIcon
        className={`${styles.icon} ${!canGoForward ? styles.inactivate : ''}`}
        onClick={canGoForward ? handleArrowClick(1) : undefined}
        type="icon-arrow-right"
      />
      <CustomIcon
        className={styles.icon}
        onClick={handleRefreshClick}
        type="icon-refresh"
      />

      <div className={styles.widget}>
        {!isLogin && (
          <span
            className={styles.icon}
            onClick={handleLogin('login')}
            style={{ color: 'red' }}
          >
            未激活
          </span>
        )}
        {/* <Icon
          className={styles.icon}
          onClick={handleWidgetIconClick('setting')}
          type="setting"
        /> */}
      </div>
    </div>
  );
};

export default connect(({ user }) => ({
  isLogin: user.isLogin,
}))(NavBar);
