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
                  <Link to={`/articles/${item.id}`} className={styles.newsList_link}>
                    {item.title}
                  </Link>
                </div>
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
          { this.renderList(this.props.type) }
        </TransitionGroup>

        <div onClick={() => this.loadMore()}>
          LOAD MORE
        </div>

        {/*<Button*/}
          {/*type="loadMore"*/}
          {/*loadMore={() => this.loadMore()}*/}
          {/*cms="LOAD MORE"*/}
        {/*/>*/}
      </div>
    )
  }
}

export default NewsList;