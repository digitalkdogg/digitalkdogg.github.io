import React, { Component } from 'react';

import Mobilemenu from '../templateparts/header/Mobilemenu.js';

class Menu extends Component {

  constructor() {
      super();
      this.state = {}
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

  render(){ 
    return (
       <div id = "menu">
          <Mobilemenu id="mobile-menu" classList={this.state.classListStr} menu={this.menu()} scrollpos={this.state.scrollpos} />
       </div>
    )
  }
}

export default Menu;