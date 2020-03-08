import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

//import Utilsjs from './Utils/Utilsjs';


class Bottom extends Component {


	constructor() {
      super();
      this.state = {
      		'imgViz': false
      }
 }

render(props){
	 return (
        <div id="bottom-wrap">
        	<VizSensor onChange={(isVisible) => {
				this.setState({'imgViz': isVisible})
				//const Utils = new Utilsjs();
				//const _self = this;
			}} 
			>
			<div id="bottom" >bottom</div>
			</VizSensor>
         </div>
      )
	}
}

export default Bottom