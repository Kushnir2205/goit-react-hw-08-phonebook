import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout.jsx';
import LoginPage from 'Pages/LoginPage/LoginPage.js';
import RegisterPage from 'Pages/RegisterPage/RegisterPage.js';
import ContactsPage from 'Pages/ContactsPage/ContactsPage.js';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
