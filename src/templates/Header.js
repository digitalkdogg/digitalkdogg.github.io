import React, { Component } from 'react';

import Title from '../templateparts/header/Title';
import Phone from '../templateparts/header/Phone';
import Email from '../templateparts/header/Email'
import Desktopmenu from '../templateparts/header/Desktopmenu';
import Mobilemenu from '../templateparts/header/Mobilemenu';
import Utilsjs from '../templateparts/utils/Utilsjs';
import Icons from '../templateparts/header/Icons';

class Header extends Component {

	constructor() {
      	super();
      	this.state = {
  			'classList': [],
    		'classListStr': '',
    		'scrollstate': 'init',
  			'title_container' : {
		    	'title': 'Kevin Bollman',
    			'phone': '814-777-1196',
    			'email': 'KevinBollman@gmail.com',
    			'headline': 'Full Stack Web Developer'
    		},
    		'scrollpos': {
          		'this': 'about',
          		 'about': {
              		'this': 'About Me',
              		'start': {'desktop': 50, 'mobile': 50},
              		'end': {'desktop':200, 'mobile':300},          
        		},
          		'projects' : {
            		'this': 'My Projects',
            		'start': {'desktop': 201, 'mobile':301},
            		'end': {'desktop': 400, 'mobile': 1000}
            	},
        		'skillsection' : {
           			'this': 'Skills',
            		'start': {'desktop': 401, 'mobile':1001},
            		'end': {'desktop': 700, 'mobile': 1400}
          		},
        		'contact' : {
           			'this': 'Contact Me',
            		'start': {'desktop': 701, 'mobile':1401},
            		'end': {'desktop': 1000, 'mobile': 1800}
          		}
    		}
     	}
 	}



 componentDidMount() {
	const Utils = new Utilsjs();

  var scrollpos = this.state.scrollpos
    
  scrollpos.about = Utils.getTopBotPosOfEle(scrollpos.about, 'about', 'projects'); 
	scrollpos.projects = Utils.getTopBotPosOfEle(scrollpos.projects, 'projects', 'skills');
  scrollpos.skillsection = Utils.getTopBotPosOfEle(scrollpos.skillsection, 'skills', 'contact');
  scrollpos.contact = Utils.getTopBotPosOfEle(scrollpos.contact, 'contact', '');

  this.checkscreensize();
  window.addEventListener("resize", this.checkscreensize.bind(this));
  window.addEventListener('scroll', this.handleScroll.bind(this));

  var mobileordesktop = 'isdesktop';
  if (Utils.isMobileDevice() === true) {
    mobileordesktop = 'ismobile';

  } else {
    mobileordesktop = 'isdesktop';																																																																																																																																																																																																																																																																																		
  }
  this.setState({'ismobile': mobileordesktop});

 }

   menu() {
      return(
        {
          'about': {
            'id': 'menu-item',
            'class': 'about',
            'text': 'About Me',
            'href': '#about'
          }, 
          'projects': {
            'id': 'menu-item',
            'class': 'projects',
            'text': 'Projects',
            'href': '#projects'
          }, 
          'skills': {
            'id': 'menu-item',
            'class': 'skills',
            'text': 'Skills',
            'href': '#skills'
          }, 
          'contact': {
            'id': 'menu-item',
            'class': 'contact',
            'text': 'Contact Me',
            'href': '#contact'
          }
        }
      )
    }

    handleScroll(event) {
    	const Utils = new Utilsjs();

    	var classList = this.state.classList;
     	var scrollpos = this.state.scrollpos;
     	var thestate = '';

      	if (window.scrollY>50) {

      		scrollpos['this'] = Utils.getscrollpos(window.scrollY, this.state.scrollpos);

      		classList = Utils.removefromarray(classList, 'init');
    		  if (Utils.hasValue(classList, 'scrolled')===false) {
          		classList.push('scrolled')
        	}
        	thestate='scrolled';
    	   } else {
        	classList = Utils.removefromarray(classList, 'scrolled');
    	
        	if (Utils.hasValue(classList, 'init')===false) {
          		classList.push('init')
        	}
        	thestate = 'init'
    	  }


    	 this.setState({'scrollstate': thestate, 
                    'classList': classList,
                    'classListStr': Utils.convertarraytostr(classList),
                    'scrollpos' : scrollpos
                });
      
    }


    checkscreensize() {
    	const Utils = new Utilsjs();
      	var classList = this.state.classList;
      	if (Utils.isMobileDevice() === true) {
        	classList = Utils.removefromarray(classList, 'isdesktop');
      
        	if (Utils.hasValue(classList, 'ismobile') ===false) {
          		classList.push('ismobile')
        	}
      	} else {
         
         	classList = Utils.removefromarray(classList, 'ismobile');
      
        	if (Utils.hasValue(classList, 'isdesktop')===false) {
          		classList.push('isdesktop');
        	}
      	}
      	
      	var mobileordesktop = 'isdesktop';
        var hidedesktop = '';
        var hidemobile = ''
      	 if (Utils.isMobileDevice() === true) {
    		  mobileordesktop = 'ismobile';
         } else {
    		  mobileordesktop = 'isdesktop';																																																																																																																																																																																																																																																																															
    	 }

      	this.setState({
          ismobile: mobileordesktop, 
          classList: classList, 
          classListStr: Utils.convertarraytostr(classList)
        })

    }


	render(){ 
		return (
			<div id="header" className={this.state.scrollstate + ' ' + this.state.ismobile} >
				<div id="menu-container" className={this.state.scrollstate} >
          <Desktopmenu id="desktop-menu" classList={this.state.classListStr}  menu={this.menu()} />
          <Mobilemenu id="mobile-menu" classList={this.state.classListStr} menu={this.menu()} scrollpos={this.state.scrollpos} />
        </div>
        <div id="title-container">
          <div id="logo-container"><i className="fa fa-chevron-left" />KB /<i className="fa fa-chevron-right"></i></div>
          <div id="text-container">
            <Title title={this.state.title_container.title} />
            <Phone phone={this.state.title_container.phone} />
            <Email email={this.state.title_container.email} />
          </div>
           <div id="float-container">
            <i id="starti1" className="fa fa-cog float rotating" data-hstart="1" data-step="5" data-end="18" ></i>
          </div>
        </div>

         
               
          <Icons />
			
      </div>
		)
	}
}//end class

export default Header;