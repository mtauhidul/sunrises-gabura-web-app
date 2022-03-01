import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import EAuthor from '../../components/eAuthor/EAuthor';
import EUser from '../../components/eUser/EUser';
import Top from '../../components/top/Top';
import { addData } from '../../utils/api';
import styles from './Volunteer.module.css';

const Volunteer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.Status = 'Pending';
    const response = await addData('volunteer', data);
    console.log(response);
    reset();
  };
  console.log(errors);
  return (
    <Container fluid className={styles.volunteerContainer}>
      <Top text='Volunteer' />
      <br />
      <EAuthor headerOne='Volunteer' />
      <br />
      <EUser headerTwo='Volunteer' />
      <br />
      <Container className={styles.volunteerWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Volunteer Registration</h2>
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
            type='tel'
            placeholder='Phone'
            {...register('Phone', { required: true, maxLength: 12 })}
          />
          <input
            type='text'
            placeholder='Address'
            {...register('Address', { required: true })}
          />

          <input type='submit' />
        </form>
      </Container>
    </Container>
  );
};

export default Volunteer;
