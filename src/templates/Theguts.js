import React, { Component } from 'react';

import Aboutme from '../JSON/About.json';
import P from './Utils/P';
import Contactblock from './Contactblock';
import Li from './Utils/Li';
import Div from './Utils/Div';

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
    		 	<div id="home" className="section show">
          			<div className="box box-shadow">
          				<P class="tag" text="Hello I am Kevin Bollman" />
             			<hr />
            			<P class="sub" text="I build cool things and make them work" />
            			<P text="Since I began my web design journey over 10 years, I have help many people / organization with their web design needs.
            				I enjoy helping people with connect with their technology.  I am innovative, forward thinking and I am passionate about the
            				work I do.  I challenge my self to learn new technologies to advance my skills and provide value to what ever team I am on." />
            			
          			</div>
          			<Div class="mobile-space mobile-space-large" />
          			<Div class="desktop-space desktop-space-small" />
          			<Contactblock />
          		</div>

              	<div id="about" className="section hidden">
              		<div className="row-wrap">
              			<div className="block c100 box">
              				{this.parseAbout()}
              			</div>
              		</div>
              	</div>
              	<div id="projects" className="section hidden">
                	The Projects section
              	</div>
              	<div id="skills" className="section hidden">
                  <div className="row-wrap skills-wrap">
                    <div className="block c5 box-shadow box">
                      <div className="title">Front End</div>
                        <Li class="nobullet" text="HTML 5" />
                        <Li class="nobullet" text="CSS3" />
                        <Li class="nobullet" text="Javascript" />
                        <Li class="nobullet" text="Jquery / React JS / Angular" />
                        <Li class="nobullet" text="Wordpress" />
                        <Li class="nobullet" text="Drupal" />
                    </div>
                    <div className="block c5 box-shadow box">
                      <div className="title">Back End</div>
                        <Li class="nobullet" text="PHP" />
                        <Li class="nobullet" text="Codeigniter" />
                        <Li class="nobullet" text="Laravel" />
                        <Li class="nobullet" text="MySQL" />
                    </div>
                  </div>

                  <div className="row-wrap skills-wrap">
                    <div className="block c5 box-shadow box">
                      <div className="title">Server</div>
                        <Li class="nobullet" text="Git Version Contral" />
                        <Li class="nobullet" text="Node JS" />
                        <Li class="nobullet" text="Composer" />
                        <Li class="nobullet" text="LAMP Stack" />
                    </div>
                    <div className="block c5 box-shadow box">
                      <div className="title">Other Skills</div>
                        <Li class="nobullet" text="MVC Frameworks" />
                        <Li class="nobullet" text="REST API's" />
                        <Li class="nobullet" text="Agile Methodoloy" />
                        <Li class="nobullet" text="Object Oriented Programming" />
                    </div>
                  </div>

              	</div>
              	<div id="contact" className="section hidden">
              		
              		<div className="row-wrap">
              			<div className="block c100 box mini box-shadow">
               				<p>Do you think I can help you add value to your next project?</p>
               			</div>
              		</div>
              	
              		<Div class="mobile-space mobile-space-large" />
              		<Div class="desktop-space desktop-space-normal" />
                	<Contactblock />
              	</div>
            </div>
    	)
    }

 }

 export default Theguts;