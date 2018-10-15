import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.module.css';


const Button = (props) => {
  let teplate = null;

  switch (props.type) {
    case "loadmore":
      return (
        <div onClick={props.loadMore} className={styles.button}>
          {props.cta}
        </div>
      );
      break;
    case "link":
      return (
        <Link to={props.linkTo} className={styles.button}>
          {props.cta}
        </Link>
      );
      break;
    default:
      return teplate = null;
  }

  return teplate;
};

export default Button;
