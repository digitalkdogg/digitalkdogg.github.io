import React, { Component } from 'react';

class Div extends Component {

	render(props){
		 return (
            <div 
                  className={this.props.class}>
                  {this.props.text}
            </div>
      )
	}
}

export default Div
