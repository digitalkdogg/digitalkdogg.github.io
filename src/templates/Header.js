import React, { Component } from 'react';

class Header extends Component {

	constructor() {
      	super();
      	this.state = {
  			'showclass': ''
     	}
 	}


 	showhidemenu () {
			var body = document.querySelector('body');

 		if (this.state.showclass == '') {
 			this.setState({'showclass': 'show'})
		//	let body = document.querySelector('body');
			body.classList.add('overflowhidden');
 			//let guts = document.getElementById('the-guts');
 			//guts.setAttribute('style', 'position:fixed;');
 		} else {
 			this.setState({'showclass': ''})
		//	let body = document.querySelector('body');
			body.classList.remove('overflowhidden');
 		//	let guts = document.getElementById('the-guts');
 	//		guts.removeAttribute('style')
 		}
 	}

 	gotosection (section) {
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
 //		let guts = document.getElementById('the-guts');
 //		guts.removeAttribute('style')

		//let body = document.getElementById('body');
		if (section === 'home') {
			body.classList.remove('nothome')
			body.classList.add('home')
		} else {
			body.classList.remove('home');
			body.classList.add('nothome');
		}

 	}

	render(){
		return (
			<div id="header" >
				<div id = "logo-section">
					<i className="fas fa-less-than"></i>
					<span id = "kb"> KB </span>
					<i className="fas fa-greater-than"></i></div>
				<div id = "name-section">Kevin Bollman</div>
				<div id = "nine-box-section">
					<i className="fas fa-th-large" onClick={this.showhidemenu.bind(this)}></i>
					<div id = "menu-section" className={this.state.showclass}>
						<li onClick={this.gotosection.bind(this, 'home')}>Home</li>
						<li onClick={this.gotosection.bind(this, 'about')}>About Me</li>
						<li onClick={this.gotosection.bind(this, 'projects')}>Projects</li>
						<li onClick={this.gotosection.bind(this, 'skills')}>Skills</li>
						<li onClick={this.gotosection.bind(this, 'contact')}>Contact</li>
					</div>
				</div>
			</div>


		)
	}
}//end class

export default Header;
