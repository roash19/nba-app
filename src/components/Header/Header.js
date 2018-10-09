import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNav from './SideNav/SideNav';

const Header = (props) => {

   const navBars = () => (
     <div>
       <FontAwesome
         name="bars"
         onClick={props.onShowNav}
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
      <SideNav {...props}/>
      <div className={styles.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
}

export default Header;
