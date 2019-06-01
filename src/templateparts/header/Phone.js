import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

class Phone extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
         return(
        	<div class="phone"><a href = {'tel:' + this.props.phone}>{this.props.phone}</a></div>
      	)
	}
}

export default Phone