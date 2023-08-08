import React from 'react';
import { AppBar, Typography } from '@mui/material';

const Toolbar = () => {
  return (
    <AppBar sx={{ padding: 2, paddingLeft: 5 }}>
      <Typography variant="h4" component="div">
        Cipher
      </Typography>
    </AppBar>
  );
};

export default Toolbar;