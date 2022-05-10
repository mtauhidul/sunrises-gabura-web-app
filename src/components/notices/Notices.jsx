import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { deleteData } from '../../utils/api';

const Notices = ({ authors, books, getNotices, setShow }) => {
  const [notices, setNotices] = useState([]);
  const removeBook = async (data) => {
    await deleteData('notices', data.id);
    getNotices();
  };

  useEffect(() => {
    setNotices(books);
    getNotices();
  }, [books, getNotices]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        style={{ width: '400px', height: '50px', margin: '10px auto' }}
        variant='primary'
        onClick={() => setShow(true)}>
        Add new notice
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Notice</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => {
            return (
              <tr key={index + 896}>
                <td>{index + 1}</td>
                <td>{notice?.notice}</td>
                <td style={{ minWidth: '110px' }}>{notice?.date}</td>
                <td>
                  <Button
                    size='sm'
                    onClick={() => {
                      removeBook(notice);
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
    </div>
  );
};

export default Notices;
