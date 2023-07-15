import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;

export const selectIsLogged = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilter],
  (contact, filter) => {
    return contact.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
