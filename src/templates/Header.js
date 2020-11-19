import React, { Component } from 'react';


import Utilsjs from './Utils/Utilsjs';

import P from './Utils/P';
import Ninebox from './Ninebox.js';



class Header extends Component {

	constructor() {
      	super();
      	this.state = {
  			'showclass': 'hide',
			'activesection': 'home',
     	}
 	}


	getActiveSection () {
		var activesection = document.querySelectorAll('.section.show');

		if (activesection.length===1) {
			  return activesection[0].getAttribute('id')
		}


		return null;
	}

 	showhidemenu () {
		var body = document.querySelector('body');

 		if (this.state.showclass === 'hide') {
 			this.setState({'showclass': 'show'});
			body.classList.add('overflowhidden');
 		} else {
 			this.setState({'showclass': 'hide'})
			body.classList.remove('overflowhidden');
 		}
 	}

 	gotosection (section) {
 		const Utils = new Utilsjs();

		//removes the overflow hidden so we can scroll again
		let body = document.querySelector('body');
		body.classList.remove('overflowhidden')

		//show desire section and hide every other section
		Utils.gotosection(section);

		this.setState({
			'showclass': '',
			'activesection': this.getActiveSection()
		})

 	}

	render(){
		return (

			<div id="header" >
			
				<div id="header-wrap">
					<div id="logo-section">
						<div className="menu-logo-wrap">
							<div className="text">KB</div>
						</div>
					</div>
					<div id="name-section"><h2>Kevin Bollman</h2></div>
					<Ninebox />
				</div>

				<div id="sub-header-wrap">
	
					<h3>Full Stack Developer</h3>
					<P class="sub" text="I design and develop digital solutions for everyday people" />

					</div>
			</div>


		)
	}
}//end class

export default Header;
