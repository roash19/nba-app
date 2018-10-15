import React, {Component} from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.module.css';

import Header from './Header';


class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };


  componentWillMount() {
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
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
    const { article, team } = this.state;
    console.log(article, team)
    return (
      <div className={styles.articleWrapper}>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className={styles.articleBody}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.articleImg}
            style={{
              background: `url(/images/articles/${article.image})`
            }}
          ></div>
          <div className={styles.articleText}>
            {article.body}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsArticles;