import React, {Component} from 'react';
import { firebaseArticles } from "../../../firebase";

import SliderTemplates from './SlideTemplates';

class Slider extends Component {
  state = {
    news: []
  };

  componentWillMount() {

    firebaseArticles.limitToFirst(3).once('value')
      .then ( (snapshot) => {
        const news = [];
        snapshot.forEach((snapshotChildren) => {
          news.push({
            ...snapshotChildren.val(),
            id: snapshotChildren.key
          })
        });

        this.setState({
          news
        })
      })
  };


  render() {
    return (
      <div className="slider">
        <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
      </div>
    );
  }
}

export default Slider;
