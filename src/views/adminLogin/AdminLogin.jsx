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
  const id = 'admin';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const snapshot = await login('admin', data);
    snapshot.forEach((doc) => {
      console.log(doc);
      if (
        doc.data().email === data.email &&
        doc.data().password === data.password
      ) {
        setAuth({ ...doc.data(), id: doc.id });
        window.sessionStorage.setItem('isAuthenticated', true);
        window.sessionStorage.setItem('token', doc.id);
        window.sessionStorage.setItem('type', id);
        return navigate(`/admin`);
      }
    });
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
