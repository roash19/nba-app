import React from 'react';

import NewsSlider from '../Widget/NewsSlide/Slider';
import NewsList from '../Widget/NewsList/NewsList';

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        end={4}
        settings={{
          dots: false
        }}
      />
      <NewsList
        type="card"
        start={3}
        amount={3}
        loadmore="true"
      />
    </div>
  );
};

export default Home;
