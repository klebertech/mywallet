import { Avatar } from '@mui/material';
import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <h2>Saldo</h2>
      <span>R$100</span>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, marginLeft: 2, marginTop: -10 }}
      />
    </div>
  );
}

export default Header;
