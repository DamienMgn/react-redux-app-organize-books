import React from 'react';

import { Button } from 'antd';

import './header.css'

const Header = ({logout}) => {

  return (
    <div className="header">
        <Button type="danger" onClick={() => logout()} className="header-logout-button">Deconnexion</Button>
    </div>
  );
}

export default Header;
