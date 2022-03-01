import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import MailImg from '../../assets/images/mail.png';
import Top from '../../components/top/Top';
import { addData } from '../../utils/api';
import styles from './Contact.module.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await addData('contact', data);
    console.log(response);
    reset();
  };
  console.log(errors);
  return (
    <div>
      <Top text='Contact' />
      <Container className={styles.contactContainer}>
        <Row className={styles.contactWrapper}>
          <div>
            <h2>Contact Form</h2>
          </div>
          <Col className={styles.contactLeft} md={4}>
            <img src={MailImg} alt='mail' />
            <br />
            <small>
              If you have questions or just want to get in touch, use the form.
              We look forward to hearing from you!
            </small>
          </Col>
          <Col className={styles.contactRight} md={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type='text'
                placeholder='Name'
                {...register('Name', { required: true, maxLength: 80 })}
              />
              <input
                type='text'
                placeholder='Email'
                {...register('Email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
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
              <textarea
                rows={5}
                placeholder='Message'
                {...register('Message', { required: true })}
              />

              <input type='submit' />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
