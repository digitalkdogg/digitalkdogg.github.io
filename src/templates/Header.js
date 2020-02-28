import React, { Component } from 'react';


class Header extends Component {

	constructor() {
      	super();
      	this.state = {
  			
     	}
 	}

	render(){ 
		return (
			<div id="header" >
				<div id = "name-section">Kevin Bollman</div>
				<div id = "nine-box-section">
					<i className="fas fa-th-large"></i>
					<div id = "menu-section">
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