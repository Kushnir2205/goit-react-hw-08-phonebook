import { Link, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout.jsx';
import LoginPage from 'Pages/LoginPage/LoginPage.js';
import RegisterPage from 'Pages/RegisterPage/RegisterPage.js';
import ContactsPage from 'Pages/ContactsPage/ContactsPage.js';
import { useEffect } from 'react';
import { refreshThunk } from 'Redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'Redux/selector';
import HomePage from 'Pages/HomePage/HomePage';
import { PrivatRoute } from 'hoc/PrivatRoute';
import { RestrictedRoute } from 'hoc/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <p>Refresh user ...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute
              restrictedTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              restrictedTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivatRoute restrictedTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Link to="/">Home</Link>} />
      </Route>
    </Routes>
  );
};

export default App;
