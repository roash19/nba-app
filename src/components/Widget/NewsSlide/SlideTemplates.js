import React from 'react';
import Slick from 'react-slick';
import styles from './slider.module.css';
import { Link } from 'react-router-dom';

const SlideTemplates = (props) => {
  let teplate = null;
  const setting = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  };

  switch (props.type) {
    case ('featured') :
      teplate = props.data.map(item => {
        return (
          <div key={item.id}  className={styles.feature_item}>
            <div className={styles.feature_img}
              style={{
              background: `url(../images/articles/${item.image})`
            }}></div>
            <Link to={`/articles/${item.id}`} className={styles.feature_link}>
              {item.title}
            </Link>
          </div>
        )
      });
      break;
    default:
      teplate = null
  }

  return (
    <Slick {...setting}>
      {teplate}
    </Slick>
  );
};

export default SlideTemplates;
