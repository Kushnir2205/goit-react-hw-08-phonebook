import { selectIsLogged, selectIsRefreshing } from 'Redux/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({ component: Component, restrictedTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLogged);

  const IsRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !IsRefreshing;

  return shouldRedirect ? <Navigate to={restrictedTo} /> : Component;
};
