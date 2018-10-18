import React, {Component} from 'react';
import styles from '../../articles.module.css';

import Header from './Header';
import {firebaseDB, firebaseTeams, firebaseLooper} from "../../../../firebase";


class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
      .then((snapshot) => {
        let article = snapshot.val();

        firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
          .then((snapshot) => {
            const team = firebaseLooper(snapshot);
            this.setState({
              article,
              team
            })
          })
      })
  }


  render() {
    const {article, team} = this.state;
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