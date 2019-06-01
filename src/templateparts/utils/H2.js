import React, { Component } from 'react';

class H2 extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
		 return (
            <h2 id={this.props.id} className={this.props.class}>{this.props.text}</h2>
      )
	}
}

export default H2