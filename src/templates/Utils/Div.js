import React, { Component } from 'react';

class Div extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){
		 return (
            <div className={this.props.class}>{this.props.text}</div>
      )
	}
}

export default Div
