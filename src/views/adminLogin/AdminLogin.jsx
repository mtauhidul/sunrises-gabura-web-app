import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App';
import { login } from '../../utils/api';
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    window.sessionStorage.clear();
    const response = await login('admin', data);
    console.log(response);
    if (response) {
      setAuth(response);
      console.log(response);
      return navigate(`/admin`);
    } else {
      return false;
    }
  };
  console.log(errors);
  console.log(auth);
  return (
    <Container fluid className={styles.registration}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Admin Login Form</h3>
        <small style={{ color: 'red' }}>*** Only for Admin ***</small>
        <input
          type='text'
          placeholder='Email'
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type='password'
          placeholder='Password'
          {...register('Password', {
            required: true,
            pattern: /^[A-Za-z]\w{7,14}$/i,
          })}
        />

        <input type='submit' />
      </form>
    </Container>
  );
};

export default AdminLogin;
