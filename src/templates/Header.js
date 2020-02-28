import React, { Component } from 'react';


class Header extends Component {

	constructor() {
      	super();
      	this.state = {
  			'showclass': ''
     	}
 	}

 	showhidemenu () {
 		if (this.state.showclass == '') {
 			this.setState({'showclass': 'show'})
 		} else {
 			this.setState({'showclass': ''})
 		}
 	}

	render(){ 
		return (
			<div id="header" >
				<div id = "name-section">Kevin Bollman</div>
				<div id = "nine-box-section">
					<i className="fas fa-th-large" onClick={this.showhidemenu.bind(this)}></i>
					<div id = "menu-section" className={this.state.showclass}>
						<li>About Me</li>
						<li>Projects</li>
						<li>Skills</li>
						<li>Contact</li>
					</div>
				</div>
			</div>
		)
	}
}//end class

export default Header;