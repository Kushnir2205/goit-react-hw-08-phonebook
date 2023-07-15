import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Contacts/contactSlice';
import { filterSlice } from './filterSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice,
    auth: authSlice.reducer,
  },
});
