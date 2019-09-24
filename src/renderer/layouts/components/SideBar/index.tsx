import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-locale';
import styles from './index.less';
import exploreApi, { DayListenData } from '@/services/explore';
import { connect } from 'dva';
import { getTracks, TracksData } from '@/services/play';
import { TrackRspData } from '@/services/track';
import { PlayState } from '@/models/player';
const SubMenu = Menu.SubMenu;

const SideBar = ({
  children,
  history,
  route: { routes },
  location: { pathname },
  playTracks,
}) => {
  const defaultSelectedKeys = [pathname.slice(1)];
  const defaultOpenKeys = ['low'];
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data,
        }: {
          data: DayListenData;
        } = await exploreApi.getDailyListen();

        const res = data.dailyListenCategoryList.reduce((arr, item) => {
          const trackArr = item.trackList.map(track => {
            const { trackId } = track;
            return trackId;
          });
          return [...arr, ...trackArr];
        }, []);
        setTrackList(res);
      } catch (e) {
        // todo
      }
    })();
  }, []);
  const handleClick = ({ selectedKeys }: { selectedKeys: string[] }) => {
    history.push(`/${selectedKeys[0]}`);
  };

  const MenuItems = routes.map(({ name, icon, routes: subRoutes }) => {
    if (subRoutes) {
      return (
        <SubMenu
          key={name}
          title={
            <span>
              {icon && <Icon type={icon} />}
              <span>
                <FormattedMessage id={name} />
              </span>
            </span>
          }
        >
          {subRoutes.map(({ name: subName }) => {
            if (subName) {
              return (
                <Menu.Item key={`${name}/${subName}`}>
                  <FormattedMessage id={subName} />
                </Menu.Item>
              );
            }
          })}
        </SubMenu>
      );
    } else if (name) {
      return (
        <Menu.Item key={name}>
          <FormattedMessage id={name} />
        </Menu.Item>
      );
    }
  });

  const dateArr = new Date().toDateString().split(' ');
  const day = dateArr[2];
  const month = dateArr[1];
  return (
    <div className={styles.sidebar}>
      <div className={styles.widget}>
        <div className={styles.date}>
          <span className={styles.month}> {month}</span>
          <span className={styles.day}>{day}</span>
        </div>
        <div className={styles.desc}>
          <ruby>
            今日工单
            <b> 9 </b>条<rp>(</rp>
            <rt>工单系统</rt>
            <rp>)</rp>
          </ruby>
        </div>
      </div>
      <Menu
        onSelect={handleClick}
        style={{}}
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        selectedKeys={defaultSelectedKeys}
      >
        {MenuItems}
      </Menu>
    </div>
  );
};
export default connect(
  null,
  dispatch => {
    return {
      playTracks(payload) {
        dispatch({ type: 'track/updateTrack', payload });
        dispatch({
          type: 'player/updateState',
          payload: { playState: PlayState.PLAYING, played: 0.0 },
        });
      },
    };
  }
)(SideBar);
