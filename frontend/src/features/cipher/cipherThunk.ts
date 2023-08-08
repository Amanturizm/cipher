import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICode, ICodeApi } from '../../types';
import axiosApi from '../../axiosApi';

export const fetchOne = createAsyncThunk<ICodeApi, { type: string, code: ICode }>(
  'cipher/fetchOne',
  async ({ type, code }) => {
    const { data } = await axiosApi.post<ICodeApi>(`/${type.slice(0, -1)}`, code);
    return data;
  }
);