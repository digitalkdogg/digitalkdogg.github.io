import React, { Component } from 'react';
import Utilsjs from './Utils/Utilsjs';
import Li from './Utils/Li';
import Hr from './Utils/Hr';



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
						<Li onclick={this.gotosection.bind(this, 'home')}
								text="Home" class={this.state.activesection==='home' ? 'active': ''} />
						<Li onclick={this.gotosection.bind(this, 'about')}
								text="About Me" class={this.state.activesection==='about'? 'active': ''} />
						<Li onclick={this.gotosection.bind(this, 'projects')}
								text="Projects" class="hidden2" />
						<Li onclick={this.gotosection.bind(this, 'skills')}
								text="Skills" class={this.state.activesection==='skills'? 'active' : ''}  />
						<Li onclick={this.gotosection.bind(this, 'contact')}
							text="Contact" class={this.state.activesection==='contact'? 'active' : ''}  />
					</div>
				</div>

			</div>


		)
	}
}//end class

export default Header;
