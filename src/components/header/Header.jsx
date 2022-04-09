import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App';
import Logo from '../../assets/images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  const [auth, setAuth] = useContext(GlobalContext);
  const navigate = useNavigate();
  const isAuthenticated = window.sessionStorage.getItem('isAuthenticated');
  const type = window.sessionStorage.getItem('type');
  const logOut = () => {
    window.sessionStorage.clear();
    setAuth({});
    navigate(`/`);
  };
  return (
    <Navbar
      className={styles.navigation}
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'>
      <Container>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav className={styles.navigationBar}>
            <Link className='nav-link' to='/about'>
              About Us
            </Link>
            <Link className='nav-link' to='/vision'>
              Vision
            </Link>
            <Link className='nav-link' to='/e_library'>
              E-Library
            </Link>
            <Link className='nav-link' to='/volunteer'>
              Volunteer
            </Link>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
            {isAuthenticated && (
              <Button
                onClick={() => logOut()}
                type='button'
                id={styles.loginBtn}
                className='btn btn-primary'>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
