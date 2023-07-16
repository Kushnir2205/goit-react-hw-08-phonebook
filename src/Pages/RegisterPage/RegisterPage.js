import { registerThunk } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import styles from './RegisterPage.module.css';

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
    <form className={styles.container} onSubmit={onSubmit}>
      <label>Name</label>
      <input className={styles.inputs} type="text" name="name" required></input>
      <label>Mail</label>
      <input
        className={styles.inputs}
        type="email"
        name="email"
        required
      ></input>
      <label>Paswword</label>
      <input
        className={styles.inputs}
        type="password"
        name="password"
        required
      ></input>
      <button style={{ padding: '5px 10px' }} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
