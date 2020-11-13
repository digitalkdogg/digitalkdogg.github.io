import React, { Component } from 'react';

import Utilsjs from './Utils/Utilsjs';
import Li from './Utils/Li';
import Hr from './Utils/Hr';
import P from './Utils/P';



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
					<div id="nine-box-section">
						<i className="fas fa-th-large" onClick={this.showhidemenu.bind(this)}></i>
						<div id="menu-section" className={this.state.showclass}>
							
							<Hr class="color-white" />
							<Li onclick={this.gotosection.bind(this, 'home')}
									text="Home" class={this.state.activesection==='home' ? 'active': ''} />
							<Li onclick={this.gotosection.bind(this, 'about')}
									text="About Me" class={this.state.activesection==='about'? 'active': ''} />
							<Li onclick={this.gotosection.bind(this, 'projects')}
									text="Projects" />
							<Li onclick={this.gotosection.bind(this, 'snippets')}
									text="Code Snippets" />
							<Li onclick={this.gotosection.bind(this, 'skills')}
									text="Skills" class={this.state.activesection==='skills'? 'active' : ''}  />
							<Li onclick={this.gotosection.bind(this, 'contact')}
								text="Contact" class={this.state.activesection==='contact'? 'active' : ''}  />
						</div>
					</div>
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
