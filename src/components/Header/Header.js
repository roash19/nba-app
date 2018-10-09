import React, {Component} from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Header extends Component {

   render() {

     const navBars = () => (
       <div>
         <FontAwesome name="bars"
          style={{
            color: '#dfdfdf',
            padding: '10px',
            cursor: 'pointer'
          }}
         />
       </div>
     );

     const logo = () => (
       <Link to="/" className={styles.logo}>
         <img className={styles.logoImg} src="/images/nba_logo.png" alt="nba_logo"/>
       </Link>
     );

     return (
      <header className={styles.header}>
        <div className={styles.headerOpt}>
          {navBars()}
          {logo()}
        </div>
      </header>
    );
  }
}

export default Header;
