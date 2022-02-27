import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { deleteData } from '../../utils/api';

const Authors = ({ authors, getAuthors }) => {
  const removeAccount = async (data) => {
    await deleteData('author', data.id);
    getAuthors();
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author, index) => {
          return (
            <tr key={index + 111}>
              <td>{index + 1}</td>
              <td>{author?.Name}</td>
              <td>{author?.Email}</td>
              <td>{author?.Phone}</td>
              <td>{author?.Address}</td>
              <td>
                <Button
                  size='sm'
                  onClick={() => {
                    removeAccount(author);
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

export default Authors;
