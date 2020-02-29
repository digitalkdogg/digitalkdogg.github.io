import React, { Component } from 'react';

import Banner from './Banner.js';
import Theguts from './Theguts.js';

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
        <div id = "guts-section">
            <Banner />
          
            <Theguts />

           

     

        </div>
      )
  }
}

export default Guts;
