import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';
import styles from './newsList.module.css';

import {URL} from '../../../config';
import Button from '../Buttons/Button';
import CardInfo from '../CardInfo/CardInfo';


class NewsList extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end)
  }

  request(start, end) {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        })
    }

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items, ...response.data],
          start,
          end
        })
      })
  }

  loadMore() {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end)
  }

  renderList(type) {
    let teplate = null;

    switch (type) {
      case ('card') :
        teplate = this.state.items.map(item => {
          return (
            <CSSTransition
              classNames={{
                enter: styles.newsList_wrapper,
                enterActive: styles.newsList_item_enter
              }}
              timeout={500}
              key={item.id}
            >
              <div>
                <div className={styles.newsList_item}>
                  <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                  <Link to={`/articles/${item.id}`} className={styles.newsList_link}>
                    {item.title}
                  </Link>
                </div>
              </div>
            </CSSTransition>
          )
        });
        break;
      case ('cardMain'):
        teplate = this.state.items.map(item => {
          return (
            <CSSTransition
              classNames={{
                enter: styles.newsList_wrapper,
                enterActive: styles.newsList_item_enter
              }}
              timeout={500}
              key={item.id}
            >
              <div>
                <Link to={`/articles/${item.id}`}>
                  <div className={styles.flexWrapper}>

                    <div className={styles.left}
                         style={{
                           background: `url(/images/articles/${item.image})`
                         }}
                    >
                      <div></div>
                    </div>

                    <div className={styles.right}>
                      <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                      <h2>{item.title}</h2>
                    </div>

                  </div>
                </Link>
              </div>

            </CSSTransition>
          )
        });
        break;
      default:
        teplate = null;
    }

    return teplate;
  }

  render() {
    return (
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.renderList(this.props.type)}
        </TransitionGroup>

        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="LOAD MORE NEWS"
        />
      </div>
    )
  }
}

export default NewsList;