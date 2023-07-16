import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'service/axios';

export const editContactThunk = createAsyncThunk(
  'contact/edit',
  async ({ id, name, number, contacts }, thunkAPI) => {
    try {
      const copyContacts = [...contacts];
      const { data } = await instance.patch(`contacts/${id}`, { name, number });
      const indexContact = contacts.findIndex(contact => contact.id === id);
      copyContacts.splice(indexContact, 1, data);
      return copyContacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
