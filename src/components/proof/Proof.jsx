import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Proof.module.css';

const Proof = () => {
  return (
    <div className={styles.proofContainer}>
      <div className={styles.proofWrapper}>
        <h2>A rich eLibrary is a part of our dream</h2>
        <p>We love to receive ebook donations from various publishers</p>
        <Link type='button' className='btn btn-primary' to='/e_library'>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Proof;
