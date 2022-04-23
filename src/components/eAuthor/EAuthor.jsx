import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideImg from '../../assets/images/eauthor.jpg';
import styles from './EAuthor.module.css';

const EAuthor = ({ headerOne, text }) => {
  return (
    <Container className={styles.eContainer}>
      <Row className={styles.eWrapper}>
        <Col className={styles.eText} md={7}>
          <h4>{headerOne}</h4>
          {text ? (
            <p>{text}</p>
          ) : (
            <p>
              An author is the creator or originator of any written work such as
              a book or play, and is also considered a writer or poet. More
              broadly defined, an author is "the person who originated or gave
              existence to anything" and whose authorship determines
              responsibility for what was created.
            </p>
          )}
        </Col>
        <Col className={styles.eImg} md={5}>
          <img src={SideImg} alt='E Author Img' />
        </Col>
      </Row>
    </Container>
  );
};

export default EAuthor;
