import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getEbook } from '../../utils/api';
import styles from './Profile.module.css';

const Profile = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const docId = window.sessionStorage.getItem('token');
    const getProfile = async (data) => {
      const response = await getEbook(id, docId);
      setData(response);
    };
    getProfile();
  }, []);

  return (
    <Container fluid className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <h2>Profile</h2>
        <br />
        <h5>
          Name: <strong>{data?.Name}</strong>
        </h5>
        {data?.Publications ? (
          <h5>
            Publications: <strong>{data?.Publications}</strong>
          </h5>
        ) : null}
        <h5>
          Email: <strong>{data?.Email}</strong>
        </h5>
        <h5>
          Phone: <strong>{data?.Phone}</strong>
        </h5>
        <h5>
          Address: <strong>{data?.Address}</strong>
        </h5>
      </div>
    </Container>
  );
};

export default Profile;
