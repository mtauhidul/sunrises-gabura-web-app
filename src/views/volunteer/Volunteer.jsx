import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import VolImg1 from '../../assets/images/vol1.jpg';
import VolImg2 from '../../assets/images/vol2.jpg';
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
    // console.log(response);
    reset();
  };
  // console.log(errors);
  return (
    <Container fluid className={styles.volunteerContainer}>
      <Top text='Volunteer' />
      <br />
      <EAuthor
        img={VolImg1}
        headerOne='Volunteer'
        text="Volunteering keeps you in regular contact with others and helps you develop a solid support system, which in turn protects you against stress and depression when you're going through challenging times. Working with pets and other animals has also been shown to improve mood and reduce stress and anxiety."
      />
      <br />
      <EUser
        img={VolImg2}
        headerTwo='Volunteer'
        text='Volunteering encourages young people to think of others and become compassionate young adults. It is the perfect way to discover something you may be really good at as you develop a new skill. Volunteering brings together a diverse range of people from all walks of life.'
      />
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
