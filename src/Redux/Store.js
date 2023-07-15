import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Contacts/contactSlice';
import { filterSlice } from './filterSlice';
import { authSlice } from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistore = persistStore(store);
