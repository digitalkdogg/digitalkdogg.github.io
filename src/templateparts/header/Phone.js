import React, { Component } from 'react';

class Phone extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
         return(
        	<div className="phone"><a href={'tel:' + this.props.phone}>{this.props.phone}</a></div>
      	)
	}
}

export default Phone