import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Top from '../../components/top/Top';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Top text='About Us' />
      <Container fluid className={styles.aboutWrapper}>
        <Row className={styles.aboutRow}>
          <Col className={styles.aboutColRight} md={12}>
            <h3>Who we are</h3>
          </Col>
        </Row>
        <Row className={styles.aboutRow}>
          <Col className={styles.aboutColLeft} md={12}>
            <p>
              Sunrises Gabura is a Bangladeshi based non-profit organization
              whose goal is to facilitate socio-economic development in Gabura
              by Bangladeshies and other interested in working with the Gabura’s
              disadvantaged. Sunrises Gabura seeks to eradicate poverty and
              introduce education to the underprivileged children of Gabura.
              Sunrises Gabura provides its services to the citizen of Gabura
              without charge. Sunrises Gabura play an important role to improve
              the standard of living as well as at the same time to mitigate the
              misery and regret of the resident of Gabura and rehabilitation.
              Continuous support and contribution of national and international
              community is highly expected and appreciated. Sunrises Gabura is
              the organization of the salt water golden people with the hope of
              a beautiful future. Although Gabura is a flood-prone and neglected
              area of South Bengal, it has immense potential. The Gabura has a
              rich history and heritage. Just as nature has beautified this land
              with its unobstructed hands, so much has been taken away by the
              frequent disaster. The group called Sunrises Gabura has been
              formed with the aim of presenting the golden people born in their
              own land as well as its lost history and heritage. We want to
              build good relations between the people of the island union and to
              bridge between generations in such a way that the ideal Gabura
              will be formed in the near future.
            </p>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default About;
