import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideImg from '../../assets/images/euser.jpg';
import styles from './EUser.module.css';

const EUser = ({ headerTwo, text }) => {
  return (
    <Container className={styles.eContainer}>
      <Row className={styles.eWrapper}>
        <Col className={styles.eImg} md={5}>
          <img src={SideImg} alt='E User Img' />
        </Col>
        <Col className={styles.eText} md={7}>
          <h4>{headerTwo}</h4>
          {text ? (
            <p>{text}</p>
          ) : (
            <p>
              Reading is important because it develops our thoughts, gives us
              endless knowledge and lessons while keeping our minds active.
              Books can hold and keep all kinds of information, stories,
              thoughts and feelings unlike anything else in this world. The
              importance of a book to help us learn and understand things cannot
              be underestimated.
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EUser;
