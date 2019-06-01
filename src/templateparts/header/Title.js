import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

class Title extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
		 return (
          <div id = "title">{this.props.title}</div>
      )
	}
}

export default Title