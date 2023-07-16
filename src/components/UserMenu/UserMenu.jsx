import { logOutThunk } from 'Redux/auth/authOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './UserMenu.module.css';
const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/contacts">
        <button type="button" className={styles.btn}>
          Contacts
        </button>
      </Link>
      <button
        className={styles.btn}
        type="submit"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
