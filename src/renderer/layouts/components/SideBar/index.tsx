import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-locale';
import styles from './index.less';
const SubMenu = Menu.SubMenu;

const SideBar = ({ history, route: { routes }, location: { pathname } }) => {
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
export default SideBar;
