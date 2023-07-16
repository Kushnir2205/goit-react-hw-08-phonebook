import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'service/axios';

export const editContactThunk = createAsyncThunk(
  'contact/edit',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
