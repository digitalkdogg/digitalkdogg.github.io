import React, { Component } from 'react';

class modal extends Component {

	constructor(props) {
      super();
      this.state = {'modalclass': props.modalclass }
 }

render(props){
 if (this.props.project.type!=='url') { 
		return (
      		<div className="modal-content">
        	
      		</div>  
      		)
    	} else {
    		return ('')
    	}
	}

}

export default modal