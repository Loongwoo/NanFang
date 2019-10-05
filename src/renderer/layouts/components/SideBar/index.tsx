import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-locale';
import { connect } from 'dva';
import styles from './index.less';
import { ipcRenderer } from 'electron';
import { WINDOW_MAX } from '../../../../constants';

const SubMenu = Menu.SubMenu;

const SideBar = ({
  history,
  route: { routes },
  location: { pathname },
  before,
  after,
}) => {
  const defaultSelectedKeys = [pathname.slice(1)];
  const defaultOpenKeys = ['low', 'middle'];

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

  const handleMax = () => {
    ipcRenderer.send(WINDOW_MAX);
  };

  const dateArr = new Date().toDateString().split(' ');
  const day = dateArr[2];
  const month = dateArr[1];
  return (
    <div className={styles.sidebar}>
      <div className={styles.widget} onDoubleClick={handleMax}>
        <div className={styles.date}>
          <span className={styles.month}> {month}</span>
          <span className={styles.day}>{day}</span>
        </div>
        <div className={styles.desc}>
          <ruby>
            <div>
              <div>
                今日工单<b> {before} </b>条
              </div>
              <div>
                合并工单<b> {after} </b>条
              </div>
            </div>
            <rp>(</rp>
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

export default connect(({ order }) => ({
  before: order.before,
  after: order.after,
}))(SideBar);
