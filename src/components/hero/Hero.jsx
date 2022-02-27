import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = ({ texts }) => {
  console.log(texts);
  return (
    <div className={styles.heroWrapper}>
      <img src={texts?.bg} alt='Hero' />
      <div className={styles.midText}>
        {/* <h1>Sunrises Gabura</h1> */}
        <h1>{texts?.title}</h1>
        {/* <h4>"Want Sustainable Embankment Not Relief On The Coast"</h4> */}
        <h4>{texts?.description}</h4>
        {texts?.buttons?.map((button, index) => {
          return (
            <Link
              key={index}
              type='button'
              id={styles.loginBtn}
              className='btn btn-primary'
              to={button?.url}>
              {button?.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
