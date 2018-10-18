import React from 'react';

import NewsSlider from '../Widget/NewsSlide/Slider';
import NewsList from '../Widget/NewsList/NewsList';
import VideosList from '../Widget/VideosList/VideosList';

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        end={4}
        settings={{
          dots: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
        }}
      />
      <NewsList
        type="card"
        start={3}
        amount={3}
        loadmore="true"
      />
      <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
