import styles from './Login.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'api/index';
import { setAuthAction } from 'store/auth/action';

export default function Login() {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  function handleLoginChange(e: InputChangeEvent) {
    setError('');
    setLogin(e.target.value);
  }
  function handlePasswordChange(e: InputChangeEvent) {
    setError('');
    setPassword(e.target.value);
  }
  async function handleSubmit() {
    if (login.length < 3 || password.length < 3) {
      setError('Длина поля меньше 3-х символов');
    } else {
      setPending(true);
      const response = await getAuth({ login, password });

      setPending(false);
      if (response.ok) {
        dispatch(setAuthAction(response.data));
        navigate('/');
      } else {
        const { message } = response;
        setError(message);
      }
    }
  }

  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <h2>Вход</h2>
        <TextField
          label="Логин"
          placeholder="Введите логин"
          value={login}
          onChange={handleLoginChange}
          className={styles.textfield}
          error={!!error}
        />
        <TextField
          label="Пароль"
          placeholder="Введите пароль"
          value={password}
          onChange={handlePasswordChange}
          className={styles.textfield}
          error={!!error}
          helperText={error}
        />
        <LoadingButton
          loading={pending}
          onClick={handleSubmit}
          className={styles.submit_btn}
          variant="contained"
          color="primary"
        >
          Войти
        </LoadingButton>
      </Paper>
    </div>
  );
}
