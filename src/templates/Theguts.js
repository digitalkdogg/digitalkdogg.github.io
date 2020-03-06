import React, { Component } from 'react';

import Aboutme from '../JSON/About.json';
import P from './Utils/P';

import Skills from '../JSON/Skills';
import Projects from '../JSON/Projects';
import Home from '../JSON/Home';
import Contact from '../JSON/Contact';

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
    	     <Home />

              	<div id="about" className="section hidden">
              		<div className="row-wrap">
              			<div className="block c100 box">
              				{this.parseAbout()}
              			</div>
              		</div>
              	</div>
              	<Projects />

                <Skills />
                <Contact />

            </div>
    	)
    }

 }

 export default Theguts;
