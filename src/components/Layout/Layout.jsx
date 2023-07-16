import { selectIsLogged } from 'Redux/selector';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/">
            <button type="button" className={styles.btn}>
              Home
            </button>
          </Link>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Link to="/login">
                <button type="button" className={styles.btn}>
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button type="button" className={styles.btn}>
                  Register
                </button>
              </Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
