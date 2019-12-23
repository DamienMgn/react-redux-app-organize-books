import React from 'react';

import {
    Link,
  } from "react-router-dom";

import './sidebar.css'

import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="dark"
    >
      <div className="logo" />
      <Menu className="sidebar-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="4">
          <Link to={`/`}>
            <Icon type="user" />
            <span className="nav-text">Rechercher</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={`/bibliotheque`}>
            <Icon type="video-camera" />
            <span className="nav-text">Bibliotheque</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`/pal`}>
            <Icon type="upload" />
            <span className="nav-text">Pile à lire</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to={`/wish-list`}>
            <Icon type="user" />
            <span className="nav-text">Wish List</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
