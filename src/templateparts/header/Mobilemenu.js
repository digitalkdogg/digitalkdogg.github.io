import React, { Component } from 'react';

import Utilsjs from '../utils/Utilsjs'

class Mobilemenu extends Component {

	constructor(props) {
      super();
      this.state = {
         'menu' : 'despanded',
         'activemenu' : '',
         'scrollpos': props.scrollpos
      }
 }

	render(props){ 
		return (
      <div id="mobile-menu" className={this.props.classList}>
       <div id="mobile-menu-container">
          <div id="mobile-menu-box"  onClick={this.open_menu.bind(this)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <div id="active-menu-item">{this.state.activemenu}</div>

          <div id="mobile-menu-list" className={this.state.menu} >
            <div id="mobile-list-container">
            
                <div id={this.props.menu.about.id} onClick={this.menu_item.bind(this, 'about')}>{this.props.menu.about.text}</div>
                <div id={this.props.menu.projects.id}  onClick={this.menu_item.bind(this, 'projects')}>{this.props.menu.projects.text}</div>
                <div id={this.props.menu.skills.id}  onClick={this.menu_item.bind(this, 'skills')}>{this.props.menu.skills.text}</div>
                <div id={this.props.menu.contact.id}  onClick={this.menu_item.bind(this, 'contact')}>{this.props.menu.contact.text}</div>
              
            </div>
          </div>
        </div> 
      </div>
		)
	}


  handleScroll(event) {
      if (this.state.menu == 'expanded') {
        var menubox = document.getElementById('mobile-menu-box')
        menubox.click();
      }
      const Utils = new Utilsjs();
      var scrollpos = this.state.scrollpos
      scrollpos['this'] = Utils.getscrollpos(window.scrollY, scrollpos);

      this.setState({
        'scrollpos': scrollpos,
        'activemenu': scrollpos['this']
      })
    }

  componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
  }

/********************************************************
*.            ***   Open Menu box. ***                  *
*********************************************************
*. This is the click function to open the nine box      *
*  On the mobile menu                                   *
*  return : scrolls to menu item                        *
********************************************************/ 
  open_menu(e) {
    var status = 'depanded'
    if (this.state.menu==='despanded') {
      status = 'expanded';
    } else {
      status = 'despanded';
    }

    if (status !== null || status !== '') {
      this.setState({
        'menu': status
      })
    }
  }

/********************************************************
*.            ***   menu item. ***                      *
*********************************************************
*. This is the click function for the menu on           *
*  the desktop                                          *
*  return : scrolls to menu item                        *
********************************************************/ 
  menu_item(item) {
    const Utils = new Utilsjs();
    var el = document.getElementById(item);
    var topPos = Utils.getTopPos(el) -100; 
    if (topPos <= 0 ) {
      topPos=50
    }
    window.scrollTo({top: topPos}); 
    if (this.state.menu === 'expanded') {
      var menubox = document.getElementById('mobile-menu-box')
      menubox.click();
    }


    this.update_active_menu(item);
  }

  update_active_menu(item) {
   
     var activemenu = document.getElementById('active-menu-item');
    if (item === 'about') {
      this.setState({'activemenu': 'About Me'})
    }

    if (item === 'projects') {
       this.setState({'activemenu': 'My Projects'})
    }
    
    if (item === 'skills') {
       this.setState({'activemenu': 'Skills'})
    }
    
    if (item === 'contact') {
       this.setState({'activemenu': 'Contact'})
    }
  }

}

export default Mobilemenu;