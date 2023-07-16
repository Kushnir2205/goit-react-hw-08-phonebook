import { loginThunk } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import styles from './LoginPage.module.css';
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
    <form className={styles.container} onSubmit={onSubmit}>
      <label>Mail</label>
      <input
        className={styles.inputs}
        type="email"
        name="email"
        required
      ></input>
      <label>Password</label>
      <input
        className={styles.inputs}
        type="password"
        name="password"
        required
      ></input>
      <button style={{ padding: '5px 10px' }} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
