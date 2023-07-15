import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'Redux/auth/authOperations';

export const fetchAllContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async thunkAPI => {
    try {
      const { data } = await instance.get('contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
