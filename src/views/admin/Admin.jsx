import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Authors from '../../components/authors/Authors';
import Messages from '../../components/messages/Messages';
import TopNav from '../../components/topNav/TopNav';
import Users from '../../components/users/Users';
import Volunteers from '../../components/volunteers/Volunteers';
import {
  getAllAuthors,
  getAllMessages,
  getAllUsers,
  getAllVolunteers,
} from '../../utils/api';
import styles from './Admin.module.css';

const Admin = () => {
  const [tab, setTab] = useState(1);
  const [users, setUsers] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [messages, setMessages] = useState([]);

  const getUsers = async () => {
    const users = await getAllUsers();
    setUsers(users);
  };
  const getAuthors = async () => {
    const authors = await getAllAuthors();
    setAuthors(authors);
  };
  const getVolunteers = async () => {
    const volunteers = await getAllVolunteers();
    setVolunteers(volunteers);
  };

  const getMessages = async () => {
    const messages = await getAllMessages();
    setMessages(messages);
  };

  useEffect(() => {
    getUsers();
    getAuthors();
    getVolunteers();
    getMessages();
  }, []);
  console.log(users);
  console.log(authors);
  console.log(volunteers);
  return (
    <Container fluid className={styles.admin}>
      <TopNav setTab={setTab} />
      {tab === 1 && <Users users={users} getUsers={getUsers} />}
      {tab === 2 && <Authors authors={authors} getAuthors={getAuthors} />}
      {tab === 3 && (
        <Volunteers volunteers={volunteers} getVolunteers={getVolunteers} />
      )}
      {tab === 4 && <Messages messages={messages} getMessages={getMessages} />}
    </Container>
  );
};

export default Admin;
