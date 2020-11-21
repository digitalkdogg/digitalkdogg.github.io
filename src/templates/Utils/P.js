import React, { Component } from 'react';

class P extends Component {

	render(props){
		 return (
            <p className={this.props.class}>{this.props.text}</p>
      )
	}
}

export default P
