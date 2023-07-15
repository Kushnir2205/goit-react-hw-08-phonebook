import { selectIsLogged } from 'Redux/selector';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
