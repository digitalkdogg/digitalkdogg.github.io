import React, { Component } from 'react';

class Quote extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
		 return (
            <div className="quote {this.props.class}">{this.props.text}</div>
      )
	}
}

export default Quote