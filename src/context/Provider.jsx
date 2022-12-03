/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const contexts = useMemo(
    () => ({
      email,
      handleEmail,
    }),
    []
  );

  return <Context.Provider value={contexts}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
