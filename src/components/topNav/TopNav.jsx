import React from 'react';
import { Nav } from 'react-bootstrap';

const TopNav = ({ setTab }) => {
  return (
    <Nav
      style={{ backgroundColor: 'lightgrey' }}
      fill
      variant='tabs'
      defaultActiveKey='link-1'>
      <Nav.Item>
        <Nav.Link onClick={() => setTab(1)} eventKey='link-1'>
          Users
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={() => setTab(2)} eventKey='link-2'>
          Authors
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => setTab(3)} eventKey='link-3'>
          Volunteers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => setTab(4)} eventKey='link-4'>
          Messages
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => setTab(5)} eventKey='link-5'>
          Books
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default TopNav;
