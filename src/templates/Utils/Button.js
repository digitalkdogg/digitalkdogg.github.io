import React, { Component } from 'react';

class Button extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){
		 return (
            <button className={this.props.class}>{this.props.text}</button>
      )
	}
}

export default Button
