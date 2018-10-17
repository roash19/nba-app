import React, {Component} from 'react';
import { firebaseArticles } from "../../../firebase";
// import axios from 'axios';
// import {URL} from '../../../config';

import SliderTemplates from './SlideTemplates';

class Slider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
    //   .then(response => {
    //     this.setState({
    //       news: response.data
    //     })
    //   })
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
