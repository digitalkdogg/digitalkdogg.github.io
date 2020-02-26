import React, { Component } from 'react';

import About from '../templateparts/guts/About';
import Projects from '../templateparts/guts/Projects';
import Skills from '../templateparts/guts/Skills';
import Contact from '../templateparts/guts/Contact';
import Modal from '../templateparts/utils/Modal';

import H2 from '../templateparts/utils/H2'

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
        <div id="the-guts">
        
          <div id="about-section" className="section">
            <H2 id="about" text="About Me" icon="far fa-user" />
            <About />
          </div>
          <div id="projects-section" className="section">
             <H2 id="projects" text="My Projects" icon="fas fa-server" />
            <Projects />
          </div>
          <div id="skills-section" className="section">
              <H2 id="skills" text="Skills" icon="fas fa-magic"/>
              <Skills />
          </div>
          <div id="contact-section" className="section">
              <H2 id="contact" text="Contact Me" icon="fas fa-address-book"/>
              <Contact />
          </div>

          <Modal />
        </div>
      )
  }
}

export default Guts;