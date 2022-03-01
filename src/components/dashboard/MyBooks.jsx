/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { GlobalContext } from '../../App';

const MyBooks = () => {
  const [auth, setAuth] = useContext(GlobalContext);
  console.log(auth);
  return (
    <Container fluid style={{ minHeight: '87vh', padding: '0' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {auth?.books?.map((book, index) => {
            // const date = new Date(book?.time?.seconds * 1000);
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{book?.title?.slice(0, -4)}</td>
                <td>{book?.writer}</td>
                <td>{book?.category}</td>
                <td>{book?.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyBooks;
