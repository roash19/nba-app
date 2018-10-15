import React, {Component} from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.module.css';

import Header from './Header';

class VideosArticles extends Component {
  state = {
    article: [],
    team: []
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
            })
          })
      })
  }


  render() {
    const {article, team} = this.state;
    return (
      <div>
        <Header teamData={team[0]}/>
      </div>
    )
  }
}

export default VideosArticles;