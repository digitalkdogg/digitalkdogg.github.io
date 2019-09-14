import React, { Component } from 'react';

import H2 from '../utils/H2';
import Askill from './Askill';


class Skills extends Component {

  constructor() {
      super();
      this.state = {}
 }


  render(){ 
    return (
      <div id="skills-container" className="item">
          <div id="skills">
            <H2 text="Front End" />
            <Askill text="HTML 5" />
            <Askill text="CSS3" />
            <Askill text="Javascript"  />
            <Askill text="Jquery / React JS / Angular"  />
            <Askill text="Wordpress" />
            <Askill text="Drupal" />
          </div>
          <div id="skills">
            <H2 text="Back End" />
            <Askill text="PHP" />
            <Askill text="Codeigniter" />
            <Askill text="Laravel" />
            <Askill text="MySQL" />
            <Askill text="" />
          </div>
          <div id="skills">
            <H2 text="Server" />
            <Askill text="Git Version Contral" />
            <Askill text="Node JS" />
            <Askill text="Composer" />
            <Askill text="LAMP Stack" />
            <Askill text="" />
            <Askill text="" />

          </div>
          <div id="skills">
            <H2 text="Other Skills" />
            <Askill text="MVC Frameworks" />
            <Askill text="REST API's" />
            <Askill text="Agile Methodoloy" />
            <Askill text="Object Oriented Programming" />
            <Askill text="" />
            <Askill text="" />

          </div>
        </div>
    )
  }
}

export default Skills;