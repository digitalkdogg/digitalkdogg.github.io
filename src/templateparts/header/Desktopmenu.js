import React, { Component } from 'react';

class Desktopmenu extends Component {

	constructor() {
      super();
      this.state = {}
 }

	render(props){ 
		return (
      <div id="desktop-menu" className={this.props.classList}>
			   <div id="desktop-menu-container">
            <div id={this.props.menu.about.id} onClick={this.menu_item.bind(this, 'about')}>{this.props.menu.about.text} </div>
            <div id={this.props.menu.projects.id} onClick={this.menu_item.bind(this, 'projects')}>{this.props.menu.projects.text}</div>
            <div id={this.props.menu.skills.id} onClick={this.menu_item.bind(this, 'skills')}>{this.props.menu.skills.text}</div>
            <div id={this.props.menu.contact.id} onClick={this.menu_item.bind(this, 'contact')}>{this.props.menu.contact.text}</div>
        </div>
      </div>
		)
	}

/********************************************************
*.            ***   menu item. ***                      *
*********************************************************
*. This is the click function for the menu on           *
*  the desktop                                          *
*  return : scrolls to menu item                        *
********************************************************/ 
  menu_item(item) {
    var el = document.getElementById(item);
    var topPos = this.getTopPos(el) -300; 
    if (topPos <= 0 ) {
        topPos=50
    }
    window.scrollTo({top: topPos}); 
  }

/********************************************************
*.                ***  get Top Pos. ***                 *
*********************************************************
*. Returns the top pos of an passed in element          *
*  return : numnber                                     *
********************************************************/ 
  getTopPos(el) {
    for (var topPos = 0;
          el != null; 
          topPos += el.offsetTop, el = el.offsetParent);
    return topPos;
  }

}

export default Desktopmenu;