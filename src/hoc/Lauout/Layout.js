import React, {Component} from 'react';
import './layout.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = (action) => {
    this.setState({
      showNav: action
    })
  };


  render() {
    return (
      <div className="allcontent">
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onShowNav={() => this.toggleSideNav(true)}
        />
        <main className="main">
          {this.props.children}
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Layout;