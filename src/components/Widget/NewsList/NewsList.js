import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';
import styles from './newsList.module.css';

import { URL } from '../../../config';


class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end)
  }

  request(start, end) {
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items, ...response.data],
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
            <div>
              <div className={styles.newsList_item}>
                <Link to={`/articles/${item.id}`} className={styles.newsList_link}>
                  {item.title}
                </Link>
              </div>
            </div>
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
        { this.renderList(this.props.type) }
        <div onClick={() => this.loadMore()}>
          LOAD MORE
        </div>
      </div>
    )
  }
}

export default NewsList;