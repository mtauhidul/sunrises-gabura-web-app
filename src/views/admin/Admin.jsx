import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import Authors from '../../components/authors/Authors';
import Books from '../../components/books/Books';
import Messages from '../../components/messages/Messages';
import Notices from '../../components/notices/Notices';
import TopNav from '../../components/topNav/TopNav';
import Users from '../../components/users/Users';
import Volunteers from '../../components/volunteers/Volunteers';
import {
  addData,
  getAllAuthors,
  getAllBooks,
  getAllMessages,
  getAllNotices,
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
  const [notices, setNotices] = useState([]);
  const [notice, setNotice] = useState({});

  const [show, setShow] = useState(false);

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

  const getNotices = async () => {
    const docs = await getAllNotices();
    setNotices(docs);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

  const submitNotice = () => {
    addData('notices', notice);
    setNotice({});
    setShow(false);
  };

  useEffect(() => {
    getUsers();
    getAuthors();
    getVolunteers();
    getMessages();
    getBooks();
    getNotices();
  }, []);
  // console.log(users);
  // console.log(authors);
  // console.log(volunteers);
  // console.log(books);
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
      {tab === 6 && (
        <Notices
          setShow={setShow}
          authors={authors}
          books={notices}
          getNotices={getNotices}
        />
      )}
      <Modal
        style={{ width: '100%' }}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'>
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            New notice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            onChange={(e) =>
              setNotice({
                notice: e.target.value,
                date: formatDate(new Date()),
              })
            }
            name=''
            id=''
            cols='30'
            rows='10'></textarea>
          <br />
          <Button
            onClick={() => submitNotice()}
            style={{ width: '100%', height: '40px' }}
            type='submit'>
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Admin;
