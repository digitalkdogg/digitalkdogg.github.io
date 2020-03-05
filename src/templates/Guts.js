import React, { Component } from 'react';

import Theguts from './Theguts.js';
import Banner from './Banner.js';

class Guts extends Component {

  constructor() {
      super();
      this.state = {
        about: 'About Me',
        projects: 'My Projects',
        skills  : 'Skills',
        contact: 'Contact Me',
      }
    }

    render() {
      return(
        <div id="guts-section">
            <Banner />
            <Theguts />
        </div>
      )
  }
}

export default Guts;
