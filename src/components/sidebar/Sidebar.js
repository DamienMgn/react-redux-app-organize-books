import React from 'react';

import {
    Link,
  } from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Sidebar = ({url}) => {

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="4">
          <Link to={`${url}`}>
            <Icon type="user" />
            <span className="nav-text">Rechercher</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={`${url}bibliotheque`}>
            <Icon type="video-camera" />
            <span className="nav-text">Bibliotheque</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`${url}pal`}>
            <Icon type="upload" />
            <span className="nav-text">Pile à lire</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to={`${url}wish-list`}>
            <Icon type="user" />
            <span className="nav-text">Wish List</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
