/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Context from './Context';
import app from '../services/auth';

const provider = new GoogleAuthProvider();

function Provider({ children }) {
  const [userlocal, setUser] = useState(null);
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
        setUser(user);
        navigate('/home');
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  };

  const contexts = useMemo(() => ({ signInGoogle, userlocal }));
  return <Context.Provider value={contexts}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
