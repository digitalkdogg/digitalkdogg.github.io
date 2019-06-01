import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Title from '../templateparts/header/Title';
import Phone from '../templateparts/header/Phone';
import Email from '../templateparts/header/Email'

class Header extends Component {

	constructor() {
      super();
      this.state = {
      		'title_container' : {
 		    	'title': 'Kevin Bollman',
        		'phone': '814-777-1196',
        		'email': 'KevinBollman@gmail.com',
        		'headline': 'Full Stack Web Developer'
        	}
      }
 }


	render(){ 
		return (
			<div id = "header">
				<div id = "title-container">
            		<div id = "logo-container">&#x3C;K/&#x3E;</div>
              		<div id = "text-container">
              			<Title title = {this.state.title_container.title} />
                		<Phone phone = {this.state.title_container.phone} />
                		<Email email = {this.state.title_container.email} />
              		</div>
              	</div>
			</div>
		)
	}
}

export default Header;