import { Avatar } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import context from '../context/Context';
import './styles/header.css';

function Header() {
  const { userlocal } = useContext(context);
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = JSON.parse(sessionStorage.getItem('@AuthFirebase:user'));
    setUser(getUser);
  }, []);

  return (
    <div className="header">
      <h2>Saldo</h2>
      <span>R$100</span>
      <Avatar
        alt={userlocal.displayName}
        src={user?.photoURL}
        sx={{ width: 56, height: 56, marginLeft: 2, marginTop: -10 }}
      />
    </div>
  );
}

export default Header;
