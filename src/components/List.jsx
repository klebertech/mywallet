import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { useContext, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import context from '../context/Context';

export default function FolderList() {
  const { spenses, getSpensesLocalStorage } = useContext(context);
  // const [spenses, setSpenses] = useState();

  useEffect(() => {
    getSpensesLocalStorage();
  }, []);

  console.log(spenses);
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        mx: 'auto',
        gap: 2,
      }}
    >
      {!spenses ? (
        <CircularProgress />
      ) : (
        <div>
          {spenses.map((spense) => (
            <ListItem sx={{ bgcolor: 'lightBlue', my: 2 }}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={spense.title} secondary={spense.date} />
            </ListItem>
          ))}
        </div>
      )}
    </List>
  );
}
