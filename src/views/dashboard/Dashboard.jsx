import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Ebooks from '../../components/dashboard/Ebooks';
import MyBooks from '../../components/dashboard/MyBooks';
import Profile from '../../components/dashboard/Profile';
import Upload from '../../components/dashboard/Upload';
import UploadMultiple from '../../components/dashboard/UploadMultiple';
import SideNav from '../../components/sideNav/SideNav';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [tab, setTab] = useState(1);
  return (
    <Container fluid className={styles.dashboard}>
      <SideNav setTab={setTab} />
      {tab === 1 && <MyBooks />}
      {tab === 2 && <Profile />}
      {tab === 3 && <Ebooks />}
      {tab === 4 && <Upload />}
      {tab === 5 && <UploadMultiple />}
    </Container>
  );
};

export default Dashboard;
