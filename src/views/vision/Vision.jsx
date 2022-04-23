import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Top from '../../components/top/Top';
import styles from './Vision.module.css';

const Vision = () => {
  return (
    <div className={styles.aboutContainer}>
      <Top text='Problems' />
      <Container fluid className={styles.aboutWrapper}>
        <Row className={styles.aboutRow}>
          <Col className={styles.aboutColRight} md={12}>
            <h3>Problems of Gabura</h3>
          </Col>
        </Row>
        <Row className={styles.aboutRow}>
          <Col className={styles.aboutColLeft} md={12}>
            <p>
              Gabura is a remote island union of Bangladesh surrounded by river
              and frequently affected by natural disasters and cyclone and
              flood.
            </p>
            <p>
              2. The resident of Gabura specifically children is now vulnerable
              and deprived of food, pure drinking water, sanitation, healthcare,
              better education and residence.{' '}
            </p>

            <p>
              3. The embankment is seriously damaged by continuous river
              erosion.
            </p>

            <p>
              4. Villagers of Gabura wait for relief materials after the cyclone
              and flood.
            </p>

            <p>
              5. The biodiversity of the coastal region like Gabura is
              constantly changing due to the effects of climate change. The
              normality of living is getting lost.{' '}
            </p>

            <p>
              6. Water level of river is increasing day by day keeping up with
              increasing the water level of Bay of Bengal.{' '}
            </p>

            <p>
              7. Increasing water level floods with the entire coastal region
              during the cyclone and disaster like Aila, Sidr, Ampan and Yash.
              Consequently, villagers remain homeless for several months until
              the monsoon season passes. Local residence of Gabura often has to
              sit outside their destroyed home. Sometimes displaced villagers be
              looked to make a temporary home on a boat. They are also looked to
              queue up to collect pure drinking water.{' '}
            </p>

            <p>
              8. During COVID 19 pandemic the residence of Gabura are still
              haunted about themselves, about their livelihoods, the future of
              their children. Parents need to be conscious because most of the
              students are dropping out due to the unawareness of the parents.
            </p>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Vision;
