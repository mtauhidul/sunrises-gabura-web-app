import React from 'react';
import { Button, Table } from 'react-bootstrap';
import ConfirmIcon from '../../assets/images/confirm.svg';
import RejectIcon from '../../assets/images/reject.svg';
import { deleteData, updateStatus } from '../../utils/api';
import styles from './Volunteers.module.css';

const Volunteers = ({ volunteers, getVolunteers }) => {
  const updateState = async (data) => {
    await updateStatus('volunteer', data.id, 'Active');
    getVolunteers();
  };

  const removeAccount = async (data) => {
    await deleteData('volunteer', data.id);
    getVolunteers();
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
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {volunteers.map((volunteer, index) => {
          return (
            <tr key={index + 111}>
              <td>{index + 1}</td>
              <td>{volunteer?.Name}</td>
              <td>{volunteer?.Email}</td>
              <td>{volunteer?.Phone}</td>
              <td>{volunteer?.Address}</td>
              {volunteer?.Status === 'Pending' ? (
                <td
                  style={{
                    color: 'orange',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {volunteer?.Status}
                  <div className={styles.statusButtons}>
                    <Button
                      onClick={() => {
                        updateState(volunteer);
                      }}>
                      <img src={ConfirmIcon} alt='' />
                    </Button>
                    <Button
                      onClick={() => {
                        removeAccount(volunteer);
                      }}>
                      <img src={RejectIcon} alt='' />
                    </Button>
                  </div>
                </td>
              ) : (
                <td style={{ color: 'green' }}>
                  {volunteer?.Status}
                  <Button
                    size='sm'
                    style={{ marginLeft: '20px' }}
                    onClick={() => {
                      removeAccount(volunteer);
                    }}
                    variant='danger'>
                    Remove
                  </Button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Volunteers;
