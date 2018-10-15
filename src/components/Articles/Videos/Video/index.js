import React, {Component} from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.module.css';

import Header from './Header';
import VideosRelated from '../../../Widget/VideosList/VideosRelated/VideosRelated';

class VideosArticles extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  };


  componentWillMount() {
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
      .then( response => {
        let article = response.data[0];

        axios.get(`${URL}/teams?id=${article.team}`)
          .then( response => {
            this.setState({
              article,
              team: response.data
            });
            this.getRalated();
          });
      })
  }

  getRalated() {
    axios.get(`${URL}/teams`)
      .then( response => {

        let teams = response.data;
        axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3}`)
          .then( response => {
            this.setState({
              teams,
              related: response.data
            })
        })
      })
  }


  render() {
    const {article, team} = this.state;
    return (
      <div>
        <Header teamData={team[0]}/>
        <div className={styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article.url}`}
          >
          </iframe>
          <VideosRelated teams={this.state.teams} data={this.state.related}/>
        </div>
      </div>
    )
  }
}

export default VideosArticles;