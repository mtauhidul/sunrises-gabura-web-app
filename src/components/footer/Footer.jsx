import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <small>
        © 2022 Sunrises Gabura is a registered Non-Profit Organization dedicated
        to improve the lives of the coastal people financially and
        educationally,
        <br /> by providing proper health, education, financial support
      </small>
    </div>
  );
};

export default Footer;
