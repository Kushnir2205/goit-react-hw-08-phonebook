import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, instance, setAuthHeader } from 'service/axios';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await instance.post('users/signup', user);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const { data } = await instance.post('users/login', user);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (user, thunkAPI) => {
    try {
      console.log(1);
      const { data } = await instance.post('users/logout', user);
      clearAuthHeader();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    console.log(thunkAPI.getState());
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to find user');
    }
    try {
      setAuthHeader(token);
      const { data } = await instance.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
