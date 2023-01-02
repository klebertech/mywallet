import { Avatar } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import context from '../context/Context';
import './styles/header.css';

function Header() {
  const { userGlobal, getLocalStorage } = useContext(context);

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div className="header">
      <h2>Saldo</h2>
      <span>R$100</span>
      <Avatar
        alt={userGlobal?.displayName}
        src={userGlobal?.photoURL}
        sx={{ width: 56, height: 56, marginLeft: 2, marginTop: -10 }}
      />
    </div>
  );
}

export default Header;
