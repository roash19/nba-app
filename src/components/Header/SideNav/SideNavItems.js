import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import styles from './sideNavItems.module.css';

const SideNavItems = (props) => {
  const items = [
    {
      type: styles.option,
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: styles.option,
      icon: 'file-text-o',
      text: 'News',
      link: '/news'
    },
    {
      type: styles.option,
      icon: 'play',
      text: 'Videos',
      link: '/videos'
    },
    {
      type: styles.option,
      icon: 'sign-in',
      text: 'Sign in',
      link: '/sign-in'
    },
    {
      type: styles.option,
      icon: 'sign-out',
      text: 'Sign out',
      link: '/sign-out'
    }
  ];

  const renderItems = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className={item.type} onClick={props.onHideNav}>
          <Link to={item.link}>
            <FontAwesome name={item.icon}/>
            {item.text}
          </Link>
        </div>
      )
    })
  };

  return (
    <div>
      {renderItems()}
    </div>
  );
};

export default SideNavItems;
