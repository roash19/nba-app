import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from "./hoc/Lauout/Layout";
import NewsArticles from './components/Articles/News/Post/index';
import VideosArticles from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/NewsMain';
import VideosMain from './components/Articles/Videos/VideosMain/index';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/news' exact component={NewsMain}/>
          <Route path='/articles/:id' exact component={NewsArticles}/>
          <Route path='/videos/:id' exact component={VideosArticles}/>
          <Route path='/videos' exact component={VideosMain}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes;