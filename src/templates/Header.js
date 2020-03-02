import React, { Component } from 'react';

class Header extends Component {

	constructor() {
      	super();
      	this.state = {
  			'showclass': ''
     	}
 	}

 	componentDidMount() {
 		var self = this
 		window.addEventListener('scroll', function() {
 			if (self.state.showclass==='show') {
 			///	let ele = document.getElementById('the-guts');
 			//	ele.setAttribute('style', 'position:fixed;');
 			} else {
 			//	let ele = document.getElementById('the-guts');
 			//	ele.removeAttribute('style')
 			}
 		
 		});
 	}

 	
 	showhidemenu () {
 		if (this.state.showclass == '') {
 			this.setState({'showclass': 'show'})
 			let guts = document.getElementById('the-guts');
 			guts.setAttribute('style', 'position:fixed;');
 		} else {
 			this.setState({'showclass': ''})
 			let guts = document.getElementById('the-guts');
 			guts.removeAttribute('style')
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
 		let guts = document.getElementById('the-guts');
 		guts.removeAttribute('style')
 	
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