import { loginThunk } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    const user = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    dispatch(loginThunk(user));
    event.target.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" required></input>
      <input type="password" name="password" required></input>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
