import React from 'react';

import { Menu, Dropdown, Icon, Button } from 'antd';

import './header.css'

const Header = ({logout, currentUser}) => {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">Mon compte</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Button type="danger" onClick={() => logout()} className="header-logout-button">Deconnexion</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <Dropdown className="header-dropdown" overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="http://#">
          {currentUser.user.name} <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  );
}

export default Header;
