import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../App';
import { login } from '../../utils/api';
import styles from './Signin.module.css';

const Signin = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(GlobalContext);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    window.sessionStorage.clear();
    const snapshot = await login(id, data);
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
        return navigate(`/dashboard/${id}`);
      }
    });
  };
  console.log(errors);
  console.log(auth);
  return (
    <Container fluid className={styles.registration}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login Form</h3>
        <br />

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
        {id === 'author' && (
          <small>
            Not registered? <Link to='/registration/author'>Register</Link> now!
          </small>
        )}
        {id === 'user' && (
          <small>
            Not registered? <Link to='/registration/user'>Register</Link> now!
          </small>
        )}
      </form>
    </Container>
  );
};

export default Signin;
