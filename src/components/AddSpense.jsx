import {
  Button,
  FormControl,
  IconButton,
  Modal,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useState } from 'react';
import './styles/addSpense.css';
import context from '../context/Context';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#86BBD8',
  border: '0',
  boxShadow: 24,
  p: 4,
  textAlign: 'right',
  paddingTop: 0,
};

function AddSpenseButton() {
  const { setLocalStorage } = useContext(context);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitNewSpense = () => {
    const date = new Date();
    date.toDateString();
    const spenseObj = {
      title,
      value,
      category,
      date,
    };
    setLocalStorage(spenseObj);
  };

  return (
    <div>
      <div className="containerBtn">
        <button type="button" className="addBtn" onClick={handleOpen}>
          Adicionar Despesa
        </button>
        <Modal open={open} aria-labelledby="Add Spenses">
          <Box sx={modalStyle}>
            <IconButton aria-label="delete" size="large" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <div className="textContainer">
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  label="Titulo"
                  margin="dense"
                  sx={{ label: { color: '#fff' }, input: { color: '#fff' } }}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                  fullWidth
                  label="Valor"
                  margin="dense"
                  sx={{ label: { color: '#fff' }, input: { color: '#fff' } }}
                  onChange={(event) => setValue(event.target.value)}
                />
                <TextField
                  fullWidth
                  label="Categoria"
                  margin="dense"
                  sx={{ label: { color: '#fff' }, input: { color: '#fff' } }}
                  onChange={(event) => setCategory(event.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{ marginTop: 2 }}
                  onClick={submitNewSpense}
                >
                  Adicionar
                </Button>
              </FormControl>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default AddSpenseButton;
