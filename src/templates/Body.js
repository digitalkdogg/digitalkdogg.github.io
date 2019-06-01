import React, { Component } from 'react';

import Header from './Header.js';
import Guts from './Guts.js';
import Footer from './Footer.js';

class Body extends Component {

  constructor() {
      super();
      this.state = {
        scrollstate: 'init'
      }
  }

  render(){ 
    return (
      <div id="body" className={this.state.scrollstate==='init' ? 'init': 'scrolled'}>
        <Header />
        <Guts />
        <Footer />
      </div>
    )
  }
}

export default Body;