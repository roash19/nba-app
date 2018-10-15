import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';
import styles from './videosList.module.css';

import { URL } from '../../../config';
import Button from '../Buttons/Button';
import VideosListTemplate from './VideosListTemplate';

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount(){
    this.request(this.state.start, this.state.end)
  }

  request(start, end) {
    if(this.state.teams.length < 1) {
      axios.get(`${URL}/teams`)
        .then( response => {
          this.setState({
            teams: response.data
          })
        })
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
      .then( response => {
        this.setState({
          videos: [...this.state.videos, ...response.data]
        })
      })
  }

  renderTitle() {
    return this.props.title ?
      <h3><strong>NBA </strong>videos</h3> : null
  }

  renderVideos(type) {
    let template = null;

    switch (type) {
      case "card":
        return <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>;
        break;
      default:
        return template = null
    }

    return template
  }

  loadMore() {
      let end = this.state.end + this.state.amount;
      this.request(this.state.end, end);
  }

  renderButton() {
    return this.props.loadmore ?
      <Button
        cta="LOAD MORE VIDEOS"
        type="loadmore"
        loadMore={() => this.loadMore()}
      />
      :
      <Button
        type="link"
        cta="MORE VIDEOS"
        linkTo='/videos'
      />
  }

  render() {
    return (
      <div className={styles.videosList_wrapper}>
        { this.renderTitle() }
        { this.renderVideos(this.props.type) }
        { this.renderButton() }
      </div>
    )
  }
}

export default VideosList;