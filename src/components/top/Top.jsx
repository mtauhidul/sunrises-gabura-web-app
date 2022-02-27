import React from 'react';
import styles from './Top.module.css';

const Top = ({ text }) => {
  return (
    <div className={styles.topWrapper}>
      <h1>{text}</h1>
    </div>
  );
};

export default Top;
