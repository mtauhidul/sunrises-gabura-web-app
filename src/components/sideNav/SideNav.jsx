import React from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from './SideNav.module.css';

const SideNav = ({ setTab }) => {
  const { id } = useParams();
  return (
    <Nav
      className={styles.sideNav}
      style={{ backgroundColor: 'lightgrey' }}
      fill
      variant='tabs'
      defaultActiveKey='link-1'>
      {id === 'author' && (
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey='link-1'>
            My Books
          </Nav.Link>
        </Nav.Item>
      )}

      <Nav.Item>
        <Nav.Link onClick={() => setTab(2)} eventKey='link-2'>
          Profile
        </Nav.Link>
      </Nav.Item>
      {id === 'user' ? (
        <Nav.Item>
          <Nav.Link onClick={() => setTab(3)} eventKey='link-3'>
            E-Books
          </Nav.Link>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Nav.Link onClick={() => setTab(4)} eventKey='link-4'>
            Upload E-Book
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default SideNav;
