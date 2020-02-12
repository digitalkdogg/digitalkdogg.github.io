import React, { Component } from 'react';

import P from '../utils/P';
import Aboutme from '../../JSON/About.json';

class About extends Component {

	constructor() {
      super();
      this.state = { }
 }




	render(props){ 
     return (
           <div className="item about">
              <P text = {Aboutme.About.text[0]} />
              <P text = {Aboutme.About.text[1]} />
              <P text = {Aboutme.About.text[2]} />
           </div>
      )
	}
}

export default About