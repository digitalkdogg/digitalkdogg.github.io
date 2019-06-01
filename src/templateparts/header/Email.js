import React, { Component } from 'react';

class Email extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
         return(
        	<div className="email"><a href={'mailto:' + this.props.email}>{this.props.email}</a></div>
      	)
	}
}

export default Email