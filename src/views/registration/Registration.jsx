import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { addData } from '../../utils/api';
import styles from './Registration.module.css';

const Registration = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.books = [];
    const response = await addData(id, data);
    // console.log(response);
    reset();
  };

  // console.log(errors);
  return (
    <Container fluid className={styles.registration}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Registration Form</h3>
        <br />
        <input
          type='text'
          placeholder='Name'
          {...register('Name', { required: true, maxLength: 80 })}
        />
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

        <input
          type='tel'
          placeholder='Phone'
          {...register('Phone', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        {id === 'author' && (
          <input
            type='text'
            placeholder='Publications'
            {...register('Publications', { required: true })}
          />
        )}
        <input
          type='text'
          placeholder='Address'
          {...register('Address', { required: true })}
        />

        <input type='submit' />
        {id === 'author' && (
          <small>
            Already registered? <Link to='/login/author'>Login</Link> instead!
          </small>
        )}
        {id === 'user' && (
          <small>
            Already registered? <Link to='/login/user'>Login</Link> instead!
          </small>
        )}
      </form>
    </Container>
  );
};

export default Registration;
