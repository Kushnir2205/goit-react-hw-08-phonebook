import { logOutThunk } from 'Redux/auth/authOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/contacts">Contacts</Link>
      <button type="submit" onClick={() => dispatch(logOutThunk)}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
