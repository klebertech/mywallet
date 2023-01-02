/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Context from './Context';
import app from '../services/auth';

const provider = new GoogleAuthProvider();

function Provider({ children }) {
  const [userGlobal, setUserGlobal] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth(app);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { user } = result;
        sessionStorage.setItem('@AuthFirebase:token', token);
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
        setUserGlobal(user);
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  };

  const setSpensesLocalStorage = (data) => {
    const getDataLocal = JSON.parse(localStorage.getItem('Spenses'));
    if (!getDataLocal) {
      localStorage.setItem('Spenses', JSON.stringify([data]));
    } else {
      localStorage.setItem('Spenses', JSON.stringify([...getDataLocal, data]));
    }
  };

  const getLocalStorage = () => {
    const getUserLocal = JSON.parse(
      sessionStorage.getItem('@AuthFirebase:user')
    );
    setUserGlobal(getUserLocal);
    return getUserLocal;
  };

  const contexts = useMemo(() => ({
    userGlobal,
    signInGoogle,
    setSpensesLocalStorage,
    getLocalStorage,
  }));
  return <Context.Provider value={contexts}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
