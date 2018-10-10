import React, {Component} from 'react';
import axios from 'axios';

import SliderTemplates from './SlideTemplates';

class Slider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.end}`)
    .then(response => {
      this.setState({
        news: response.data
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
