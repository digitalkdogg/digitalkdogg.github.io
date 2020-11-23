import React, { Component } from 'react';

import Header from './Header.js';
import Guts from './Guts.js';
import Footer from './Footer.js';


class Body extends Component {

  constructor() {
      super();
      this.state = {
        scrollstate: 'init',
        scrollClass: 'home notscrolled'
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  
  }

  handleScroll = () => { 
  if (window.scrollY >0) {
      this.setState({'scrollClass': 'home scrolled'});
    } else {
      this.setState({'scrollClass': 'home notscrolled'});
    }
  }

  

  render(){
    return (
      <div id="body" className={this.state.scrollClass}>
        <Header />
        <Guts />
        <Footer />
      </div>
    )
  }
}

export default Body;
