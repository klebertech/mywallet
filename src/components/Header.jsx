import { Avatar } from '@mui/material';
import React, { useContext } from 'react';
import context from '../context/Context';
import './styles/header.css';

function Header() {
  const { userlocal } = useContext(context);

  return (
    <div className="header">
      <h2>Saldo</h2>
      <span>R$100</span>
      <Avatar
        alt="Remy Sharp"
        src={userlocal.photoURL}
        sx={{ width: 56, height: 56, marginLeft: 2, marginTop: -10 }}
      />
    </div>
  );
}

export default Header;
