import React, { Component } from 'react';

class Li extends Component {

	render(props){
		 return (
            <li onClick={this.props.onclick} 
                  className={this.props.class}>
                  {this.props.text}
            </li>
      )
	}
}

export default Li