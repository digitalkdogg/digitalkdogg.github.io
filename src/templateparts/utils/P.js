import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

class P extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
		 return (
            <p className = {this.props.class}>{this.props.text}</p>
      )
	}
}

export default P