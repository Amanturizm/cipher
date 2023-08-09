import { createSlice } from '@reduxjs/toolkit';
import { fetchOne } from './cipherThunk';
import { ICodeApi } from '../../types';

interface CipherState {
  code: ICodeApi | null;
  codeLoading: boolean;
  codeErrorMessage: string;
}

const initialState: CipherState = {
  code: null,
  codeLoading: false,
  codeErrorMessage: '',
};

const cipherSlice = createSlice({
  name: 'cipher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOne.pending, (state: CipherState) => {
      state.codeLoading = true;
      state.codeErrorMessage = '';
    });
    builder.addCase(fetchOne.fulfilled, (state: CipherState, { payload }) => {
      state.code = payload;
      state.codeLoading = false;
      state.codeErrorMessage = '';
    });
    builder.addCase(fetchOne.rejected, (state: CipherState, { error: { message } }) => {
      state.codeLoading = false;
      state.codeErrorMessage = message || '';
    });
  }
});

export const cipherReducer = cipherSlice.reducer;