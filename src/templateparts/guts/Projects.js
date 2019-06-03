import React, { Component } from 'react';

import P from '../utils/P';
import Aproject from '../guts/Aproject';

class Projects extends Component {

	constructor() {
      super();
      this.state = {  
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
            'href' : './src/includes/img/checkbook.png'
        }, 
          'resume' : {
            'id': 3,
            'title': 'Resume Builder',
            'desc': 'This was another personal project that I did on my own.  As I started my job search I wanted an easy way to manage different resume layouts.  This tool that I build allows me to do that.',
            'href' : './src/includes/img/resume_admin.png'
        } } 
      }
 }


	render(props){ 
		 return (
           <div className="item">
           		  <P text="Currently working on Walmart's Intranet doesn't leave me with very many opportunities to share my work.  I do
            have a number of personal projects that I can share.   I enjoy doing side projects in my spare time because it gives me the 
            chance to grow my skills set and also learn about new technologies." />

            <Aproject project={this.state.projs.millwood} />
            <Aproject project={this.state.projs.checkbook} />
            <Aproject project={this.state.projs.resume} />
           </div>
      )
	}
}

export default Projects