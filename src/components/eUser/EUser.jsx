import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideImg from '../../assets/images/euser.jpg';
import styles from './EUser.module.css';

const EUser = ({ headerTwo }) => {
  return (
    <Container className={styles.eContainer}>
      <Row className={styles.eWrapper}>
        <Col className={styles.eImg} md={5}>
          <img src={SideImg} alt='E User Img' />
        </Col>
        <Col className={styles.eText} md={7}>
          <h4>{headerTwo}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias
            eaque quasi praesentium blanditiis ipsa dolor non rerum
            exercitationem voluptatem eum temporibus hic, odio debitis voluptate
            quaerat, nobis dolores labore doloremque, placeat consequuntur ipsam
            voluptas voluptates! Natus, itaque vel. Sed itaque labore dolor
            quibusdam? Sed.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default EUser;
