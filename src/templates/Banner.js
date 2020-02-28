import React, { Component } from 'react';


class Banner extends Component {

	constructor() {
      	super();
      	this.state = {
  			
     	}
 	}

	render(){ 
		return (
			<div id="banner" >
			   <p>Hi I am Kevin Bollman</p>
			   <p className="tag">Full Stack Web Developer</p>
      </div>
		)
	}
}//end class

export default Banner;