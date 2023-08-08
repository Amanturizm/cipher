import { createSlice } from '@reduxjs/toolkit';
import { fetchOne } from './cipherThunk';
import { ICodeApi } from '../../types';

interface CipherState {
  code: ICodeApi | null;
}

const initialState: CipherState = {
  code: null,
};

const cipherSlice = createSlice({
  name: 'cipher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOne.fulfilled, (state: CipherState, { payload }) => {
      state.code = payload;
    });
  }
});

export const cipherReducer = cipherSlice.reducer;