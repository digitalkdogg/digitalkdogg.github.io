import React, { Component } from 'react';
import '../includes/css/header.css';
import P from './Utils/P';
import Ninebox from './Ninebox.js';

class Header extends Component {

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
					<P class="sub" text="Let's make the complex things simple!" />

					</div>
			</div>


		)
	}
}//end class

export default Header;
