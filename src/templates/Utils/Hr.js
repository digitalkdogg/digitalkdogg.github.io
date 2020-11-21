import React, { Component } from 'react';

class Hr extends Component {

	render(props){
		 return (
                  <hr className={this.props.class}></hr>
            )
	}
}

export default Hr