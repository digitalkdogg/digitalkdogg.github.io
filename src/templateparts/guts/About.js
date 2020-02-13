import React, { Component } from 'react';

import P from '../utils/P';
import Aboutme from '../../JSON/About.json';

class About extends Component {

	constructor() {
      super();
      this.state = { }
 }

parseAbout = () => {
  let text = []
  for (let i=0; i<Aboutme.About.text.length; i++) {
    text.push(<P key={i} text={Aboutme.About.text[i]} />)
  }
  return text
}


	render(props){ 
     return (
           <div className="item about">
              {this.parseAbout()}
           </div>
      )
	}
}

export default About