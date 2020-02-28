import React, { Component } from 'react';


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
            <div id = "about" className = "section">the about section</div>
            <div id = "projects" className = "section">The Projects section</div>
            <div id = "skills" className = "section">Skills</div>
            <div id = "contact" className = "section">Contact section</div>
        
        </div>
      )
  }
}

export default Guts;