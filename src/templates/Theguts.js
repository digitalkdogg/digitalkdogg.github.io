import React, { Component } from 'react';

import Aboutme from '../JSON/About.json';
import P from '../templateparts/utils/P';
import Contactblock from './Contactblock';

import Cover from './Cover.js';

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
    		 	<div id="home" className = "section show">
          			<div className="box box-shadow">
            			<p className="tag"> Hello I am Kevin Bollman</p>
             			<hr />
            			<p className="sub">I build cool things and I love what I do</p>

            			<p>Since I began my web design journey over 10 years, I have help many people / organization with their web design needs.
            				I enjoy helping people with connect with their technology.  I am innovative, forward thinking and I am passionate about the
            				work I do.  I challenge my self to learn new technologies to advance my skills and provide value to what ever team I am on.
            			</p>
          			</div>
          			<br />
          			<br />
          			<Contactblock />
          		</div>
          		<br />
          		<br />
    		 
              	<div id = "about" className="section hidden">
              		<div className="box style2">
              			{this.parseAbout()}
              		</div>
              	</div>
              	<div id="projects" className="section hidden">
                	The Projects section
              	</div>
              	<div id="skills" className="section hidden">
                	Skills
              	</div>
              	<div id="contact" className="section hidden">
                	<Contactblock />
              	</div>
            </div>
    	)
    }

 }

 export default Theguts;
