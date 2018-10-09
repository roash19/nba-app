import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

import {CURRENT_YEAR} from '../../config';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoImg} src="/images/nba_logo.png" alt="nba_logo"/>
      </Link>

      <p>&copy;NBA {CURRENT_YEAR} All right reserved.</p>
    </footer>
  );
};

export default Footer;
