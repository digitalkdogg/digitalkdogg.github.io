import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

class Email extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
         return(
        	<div class="email"><a href = {'mailto:' + this.props.email}>{this.props.email}</a></div>
      	)
	}
}

export default Email