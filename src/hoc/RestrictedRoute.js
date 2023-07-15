import { selectIsLogged } from 'Redux/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  restrictedTo = '/',
}) => {
  const isLoggedIn = useSelector(selectIsLogged);
  return isLoggedIn ? <Navigate to={restrictedTo} /> : Component;
};
