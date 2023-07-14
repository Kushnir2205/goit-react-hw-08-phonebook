import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
