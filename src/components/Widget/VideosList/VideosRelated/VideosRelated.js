import React from 'react';
import styles from '../videosList.module.css';

import VideosListTemplate from '../VideosListTemplate';

const VideosRelated = (props) => {
  return (
    <div className={styles.videosRelated_wrapper}>
      <VideosListTemplate data={props.data} teams={props.teams}/>
    </div>
  );
};

export default VideosRelated;
