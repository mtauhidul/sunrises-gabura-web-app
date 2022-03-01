import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Authors from '../../components/authors/Authors';
import Books from '../../components/books/Books';
import Messages from '../../components/messages/Messages';
import TopNav from '../../components/topNav/TopNav';
import Users from '../../components/users/Users';
import Volunteers from '../../components/volunteers/Volunteers';
import {
  getAllAuthors,
  getAllBooks,
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
  const [books, setBooks] = useState([]);

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

  const getBooks = async () => {
    const books = await getAllBooks();
    setBooks(books);
  };

  useEffect(() => {
    getUsers();
    getAuthors();
    getVolunteers();
    getMessages();
    getBooks();
  }, []);
  console.log(users);
  console.log(authors);
  console.log(volunteers);
  console.log(books);
  return (
    <Container fluid className={styles.admin}>
      <TopNav setTab={setTab} />
      {tab === 1 && <Users users={users} getUsers={getUsers} />}
      {tab === 2 && <Authors authors={authors} getAuthors={getAuthors} />}
      {tab === 3 && (
        <Volunteers volunteers={volunteers} getVolunteers={getVolunteers} />
      )}
      {tab === 4 && <Messages messages={messages} getMessages={getMessages} />}
      {tab === 5 && (
        <Books authors={authors} books={books} getBooks={getBooks} />
      )}
    </Container>
  );
};

export default Admin;
