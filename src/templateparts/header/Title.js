import React, { Component } from 'react';

class Title extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
		 return (
          <div id="title">{this.props.title}</div>
      )
	}
}

export default Title