import { registerThunk } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    const user = {
      [name.name]: name.value,
      [email.name]: email.value,
      [password.name]: password.value,
    };
    dispatch(registerThunk(user));
    event.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" required></input>
      <input type="email" name="email" required></input>
      <input type="password" name="password" required></input>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
