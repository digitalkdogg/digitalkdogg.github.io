import React, { Component } from 'react';
import Utilsjs from './Utils/Utilsjs';
import Li from './Utils/Li';
import Hr from './Utils/Hr';

class Header extends Component {

	constructor() {
      	super();
      	this.state = {
  			'showclass': 'hide'
     	}
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
 		var others = document.querySelectorAll('.section');

 		for (let i = 0; i<others.length; i++) {
 			others[i].classList.remove('show');
 			others[i].classList.add('hidden');
 		}

 		var ele = document.getElementById(section)

 		ele.classList.remove('hidden');
 		ele.classList.add('show');

 		this.setState({'showclass': ''})

		let body = document.querySelector('body');
		body.classList.remove('overflowhidden')
 
		if (section === 'home') {
			body.classList.remove('nothome')
			body.classList.add('home')
		} else {
			body.classList.remove('home');
			body.classList.add('nothome');
		}

		
       	Utils.adjustcontactcircles();

 	}

	render(){
		return (
			<div id="header" >
				<div id="logo-section">
					<div className="menu-logo-wrap green-grandient">
						<div className="text">KB</div>
					</div>	
				</div>
				<div id="name-section">Kevin Bollman</div>
				<div id="nine-box-section">
					<i className="fas fa-th-large" onClick={this.showhidemenu.bind(this)}></i>
					<div id="menu-section" className={this.state.showclass}>
						<div className="menu-logo-wrap green-grandient">
								<div className="text">KB</div>
						</div>
						<Hr class="color-white" />
						<Li onclick={this.gotosection.bind(this, 'home')} text="Home" />
						<Li onclick={this.gotosection.bind(this, 'about')} text="About Me" />
						<Li onclick={this.gotosection.bind(this, 'projects')} text="Projects" />
						<Li onclick={this.gotosection.bind(this, 'skills')} text="Skills" />
						<Li onclick={this.gotosection.bind(this, 'contact')} text="Contact" />
					</div>
				</div>
			</div>


		)
	}
}//end class

export default Header;
