import React from 'react';
import { Grid, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BUTTON_STYLES = {
  background: 'none',
  border: 'none',
  width: 35,
  margin: 'auto',
  cursor: 'pointer',
};

const Cipher = () => {
  return (
    <form>
      <Grid container columnGap={3} justifyContent="center" alignItems="center" >
        <Grid item>
          <TextField
            multiline rows={5}
            label="Decoded message"
          />
        </Grid>
        <Grid item>
          <Grid container direction="column" rowGap={1}>
            <button style={BUTTON_STYLES}>
              <ArrowForwardIcon />
            </button>

            <TextField label="password" />

            <button style={BUTTON_STYLES}>
              <ArrowBackIcon />
            </button>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            multiline rows={5}
            label="Encoded message"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Cipher;