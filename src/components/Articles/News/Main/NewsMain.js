import React from 'react';

import NewsSlider from '../../../Widget/NewsSlide/Slider';
import NewsList from '../../../Widget/NewsList/NewsList';

const NewsMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        end={3}
        setting={{
          dots: false
        }}
      />

      <NewsList
        type="cardMain"
        start={3}
        amount={10}
        loadMore="true"
      />
    </div>
  );
};

export default NewsMain;
