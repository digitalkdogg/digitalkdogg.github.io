import React, { Component } from 'react';

class Quote extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
		 return (
            <quote className={this.props.class}>{this.props.text}</quote>
      )
	}
}

export default Quote