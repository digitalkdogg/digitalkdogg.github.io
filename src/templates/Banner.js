import React, { Component } from 'react';


class Banner extends Component {

	constructor() {
      	super();
      	this.state = {
  			 'iconpos': 10
     	}
 	}


	render(){ 
		return (
			<div id="banner" >
			   <i className="fab fa-react i-1"></i>
         <i className="fab fa-node-js i-2"></i>
         <i className="fab fa-jsfiddle i-3"></i>
         <i className="fab fa-php i-4"></i>
         <i className="fas fa-code i-5"></i>
         <i className="fas fa-laptop-code i-6"></i>
         <i className="fab fa-github i-7"></i>
         <i className="fab fa-gratipay i-8"></i>
         <i className="fab fa-mobile-alt i-9"></i>
         <p className="tag">Full Stack Web Developer</p>
         <i className="fas fa-database i-10"></i>
         <i className="fas fa-sliders-h i-11"></i>
         <i className="fab fa-git i-12"></i>
         <i className="fab fa-angular i-13"></i>
         <i className="fas fa-code-branch i-14"></i>
         <i className="fab fa-css3-alt i-15"></i>
         <i className="fab fa-codepen i-16"></i>
         <i className="fab fa-html5 i-17"></i>
         <i className="fas fa-terminal i-18"></i>
      </div>
		)
	}
}//end class

export default Banner;