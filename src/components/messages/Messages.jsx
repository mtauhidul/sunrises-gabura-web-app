import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { deleteData } from '../../utils/api';

const Messages = ({ messages, getMessages }) => {
  const removeAccount = async (data) => {
    await deleteData('contact', data.id);
    getMessages();
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message, index) => {
          return (
            <tr key={index + 111}>
              <td>{index + 1}</td>
              <td>{message?.Name}</td>
              <td>{message?.Email}</td>
              <td>{message?.Phone}</td>
              <td>{message?.Message}</td>
              <td>
                <Button
                  size='sm'
                  onClick={() => {
                    removeAccount(message);
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

export default Messages;
