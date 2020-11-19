import React, { Component } from 'react';

class A extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){
		 return (
            <a href={this.props.href} className={this.props.class}>{this.props.text}</a>
      )
	}
}

export default A
