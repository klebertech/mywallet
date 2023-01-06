import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import './login.css';
import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';

function Home() {
  const { signInGoogle, getUserLocalStorage } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      navigate('/home');
    }
  }, []);

  return (
    <div className="container">
      <Container
        maxWidth="sm"
        sx={{
          marginTop: 30,
        }}
      >
        <h1>MyWallet</h1>
        <TextField
          fullWidth
          label="Login"
          margin="dense"
          sx={{
            label: { color: '#fff' },
            input: { color: '#fff' },
          }}
        />
        <TextField
          fullWidth
          label="Senha"
          margin="dense"
          sx={{ label: { color: '#fff' }, input: { color: '#fff' } }}
        />
        <Button fullWidth variant="contained" sx={{ marginTop: 2 }}>
          Login with Email
        </Button>
        <Button
          fullWidth
          variant="contained"
          endIcon={<GoogleIcon />}
          sx={{ marginTop: 2 }}
          onClick={signInGoogle}
        >
          Login With
        </Button>
      </Container>
    </div>
  );
}

export default Home;
