import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Header from './Header.js';
import Guts from './Guts.js';

class Body extends Component {

  constructor() {
      super();
      this.state = {
        scrollstate: 'init'
      }
 }


  render(){ 
    return (
      <div id = "body" className = {this.state.scrollstate=='init' ? 'init': 'scrolled'}>
        <Header />
        <Guts />
      </div>
    )
  }
}

export default Body;