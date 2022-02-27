import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Feature1Img from '../../assets/images/feature1.png';
import Feature2Img from '../../assets/images/feature2.png';
import Feature3Img from '../../assets/images/feature3.png';
import styles from './Features.module.css';

const Features = () => {
  return (
    <Container fluid className={styles.featuresContainer}>
      <h2>Targets of Sunrises Gabura</h2>
      <CardGroup className={styles.cardGroup}>
        <Card className={styles.card}>
          <Card.Img variant='top' src={Feature1Img} />
          <Card.Body>
            <Card.Title>Economical Growth</Card.Title>
            <hr />
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card} id={styles.specialCard}>
          <Card.Img variant='top' src={Feature2Img} />
          <Card.Body>
            <Card.Title>Proper Education</Card.Title>
            <hr />
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img variant='top' src={Feature3Img} />
          <Card.Body>
            <Card.Title>Better Health</Card.Title>
            <hr />
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Features;
