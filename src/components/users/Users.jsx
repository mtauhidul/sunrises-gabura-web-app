import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { deleteData } from '../../utils/api';

const Users = ({ users, getUsers }) => {
  const removeAccount = async (data) => {
    await deleteData('user', data.id);
    getUsers();
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
        {users.map((user, index) => {
          return (
            <tr key={index + 111}>
              <td>{index + 1}</td>
              <td>{user?.Name}</td>
              <td>{user?.Email}</td>
              <td>{user?.Phone}</td>
              <td>{user?.Address}</td>
              <td>
                <Button
                  size='sm'
                  onClick={() => {
                    removeAccount(user);
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

export default Users;
