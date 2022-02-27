/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Process1Img from '../../assets/images/task1.png';
import Process2Img from '../../assets/images/task2.png';
import Process3Img from '../../assets/images/task3.png';
import styles from './Process.module.css';

const Process = () => {
  return (
    <div className={styles.process}>
      <h2>Our Process</h2>
      <p>We do everything for you in 3 simple steps!</p>

      <CardGroup className={styles.Cards}>
        <Card className={styles.card}>
          <Card.Img variant='top' src={Process1Img} />
          <Card.Body>
            <Card.Text>
              We accept donations from a variety of sources.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img variant='top' src={Process2Img} />
          <Card.Body>
            <Card.Text>We identify qualified clients.</Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img variant='top' src={Process3Img} />
          <Card.Body>
            <Card.Text>We provide transportation service.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Process;
