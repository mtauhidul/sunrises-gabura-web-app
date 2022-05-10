import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Top from '../../components/top/Top';
import { getAllNotices } from '../../utils/api';
import styles from './Notices.module.css';

const Notices = () => {
  const [allNotices, setAllNotices] = useState([]);

  const getNotices = async () => {
    const response = await getAllNotices();
    setAllNotices(response);
  };

  useEffect(() => {
    getNotices();
  }, []);
  return (
    <Container fluid className={styles.volunteerContainer}>
      <Top text='Notices' />
      <Container className={styles.volunteerWrapper}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Notice</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {allNotices.map((notice, index) => {
              return (
                <tr key={index + 151}>
                  <td>{index + 1}</td>
                  <td>{notice.notice}</td>
                  <td>{notice.date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default Notices;
