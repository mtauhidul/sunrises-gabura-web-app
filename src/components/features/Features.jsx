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
          <Card.Img variant='top' src={Feature2Img} />
          <Card.Body>
            <Card.Title>Our Inspiration</Card.Title>
            <hr />
            <Card.Text>
              Our enlightened old generation is our inspiration.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card} id={styles.specialCard}>
          <Card.Img variant='top' src={Feature1Img} />
          <Card.Body>
            <Card.Title>Enough Earning</Card.Title>
            <hr />
            <Card.Text>
              The coastal region namely Gabura plays a big role in the economy
              of Bangladesh. Export of Shrimp and white fish contributes to the
              national income directly and keeping the wheel of the country’s
              economy moving.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img variant='top' src={Feature3Img} />
          <Card.Body>
            <Card.Title>Better Environment</Card.Title>
            <hr />
            <Card.Text>
              we firmly believe the biodiversity of coastal region and Sundarban
              would be saved from extinction.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Features;
