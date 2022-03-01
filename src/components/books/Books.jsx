import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { removeEbook } from '../../utils/api';

const Books = ({ authors, books, getBooks }) => {
  const removeBook = async (data) => {
    const author = authors.find((author) =>
      author.books.map((book) => book === data)
    );
    const response = await removeEbook('author', author.id, data);
    console.log(response);
    getBooks();
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Writer</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return (
            <tr key={index + 333}>
              <td>{index + 1}</td>
              <td>{book?.title}</td>
              <td>{book?.writer}</td>
              <td>{book?.category}</td>
              <td>{book?.date}</td>
              <td>
                <Button
                  size='sm'
                  onClick={() => {
                    removeBook(book);
                  }}
                  variant='danger'>
                  Remove
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Books;
