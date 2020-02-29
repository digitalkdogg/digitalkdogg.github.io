import React, { Component } from 'react';

import Aboutme from '../JSON/About.json';
import P from '../templateparts/utils/P';

class Theguts extends Component {

  constructor() {
      super();
      this.state = {
        
      }
    }

    parseAbout = () => {
  		let text = []
  		for (let i=0; i<Aboutme.About.text.length; i++) {
    		text.push(<P key={i} text={Aboutme.About.text[i]} />)
  		}
  		return text
	}

    render() {
    	return(
    		 <div id="the-guts">
              <div id = "about" className = "section show">
              {this.parseAbout()}

              </div>
              <div id = "projects" className = "section hidden">
                The Projects section
              </div>
              <div id = "skills" className = "section hidden">
                Skills
              </div>
              <div id = "contact" className = "section hidden">
                Contact section
              </div>

            </div>
    	)
    }

 }

 export default Theguts;