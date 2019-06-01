import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import About from '../templateparts/guts/About'


class Guts extends Component {

  constructor() {
      super();
      this.state = {
        about: 'About Me',
        projects: 'My Projects',
        skills  : 'Skills',
        contact: 'Contact Me',
        myskills : {
          'frontend': {
            'id': 1,
            'text': 'Front End',
            'data': {
              'html': {
                'id': 1,
                'text':'HTML5'
              }, 
              'css': {
                'id': 2,
                'text':'CSS3'
              }
            }
          },
          'backend': {}
        },
        projs: {
          'millwood' : {
            'id': 1,
            'title': 'Millwood',
            'desc': 'This is a website I did for Millwood Church in rogers.  The site is built on wordpress and the features include a customized theme, an events calendar, and a blog news feed.  The updates of content is managed solely by the power users of the church.',
            'href': 'https://millwoodchurchnwa.com'
          }, 
          'checkbook' : {
            'id': 2,
            'title': 'Checkbook',
            'desc': 'This was a personal project that I did on my own.  It uses php code igniter along with mysql db server',
            'href' : './public/includes/img/checkbook.png'
        }, 
          'resume' : {
            'id': 3,
            'title': 'Resume Builder',
            'desc': 'This was another personal project that I did on my own.  As I started my job search I wanted an easy way to manage different resume layouts.  This tool that I build allows me to do that.',
            'href' : './public/includes/img/resume_admin.png'
        } }
      }
    }

    render() {
      return(
        <div id = "the-guts">
          <div id = "about-section">
            <About />
          </div>
          <div id = "projects-section">
          
          </div>
          <div id = "skills-section">
        
          </div>
          <div id = "contact-section">
        
          </div>

        </div>
      )
  }
}

export default Guts;