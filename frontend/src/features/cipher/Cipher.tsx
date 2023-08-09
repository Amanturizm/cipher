import React, { useEffect, useState } from 'react';
import { Grid, LinearProgress, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchOne } from './cipherThunk';
import { ICipherForm } from '../../types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BUTTON_STYLES = {
  background: 'none',
  border: 'none',
  width: 35,
  margin: 'auto',
  cursor: 'pointer',
};

const initialState: ICipherForm = {
  decoded: '',
  password: '',
  encoded: '',
};

const Cipher = () => {
  const dispatch = useAppDispatch();
  const { code, codeLoading, codeErrorMessage } = useAppSelector(select => select.cipher);

  const [state, setState] = useState<ICipherForm>(initialState);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  useEffect(() => {
    if (codeErrorMessage) alert(codeErrorMessage);

    if (code) {
      setState(prevState => (
        {
          ...prevState,
          [Object.keys(code)[0]]: Object.values(code)[0]
        }
      ));
    }
  }, [code, codeErrorMessage]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
    setPasswordError(false);
  };

  const sendData = async (type: string) => {
    if (state.password.length < 1) {
      setPasswordError(true);
      return;
    }

    const config = {
      code: { password: state.password, message: state[type === 'encoded' ? 'decoded' : 'encoded'] },
      type
    };

    await dispatch(fetchOne(config));
  };

  const preloader: React.ReactNode = (
    <LinearProgress
      color="inherit"
      style={{ position: "absolute", top: 73, width: "100%" }}
    />
  );

  return (
    <Grid container columnGap={3} justifyContent="center" alignItems="center" >
      {codeLoading && preloader}
      <Grid item>
        <TextField
          multiline rows={5}
          label="Decoded message"
          name="decoded"
          value={state.decoded}
          onChange={changeValue}
        />
      </Grid>
      <Grid item>
        <Grid container direction="column" rowGap={1}>
          <button style={BUTTON_STYLES} name="encode" onClick={() => sendData('encoded')}>
            <ArrowForwardIcon />
          </button>

          <TextField
            error={passwordError}
            label="password"
            name="password"
            value={state.password}
            onChange={changeValue}
          />

          <button style={BUTTON_STYLES} onClick={() => sendData('decoded')}>
            <ArrowBackIcon />
          </button>
        </Grid>
      </Grid>
      <Grid item>
        <TextField
          multiline rows={5}
          label="Encoded message"
          name="encoded"
          value={state.encoded}
          onChange={changeValue}
        />
      </Grid>
    </Grid>
  );
};

export default Cipher;