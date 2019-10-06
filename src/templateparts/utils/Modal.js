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
        		<div className="modal-header">
          			<h4 className="modal-title">{this.props.project.title}</h4>
        		</div>
        		<div className="modal-body">
          			<p>{this.props.project.desc}</p>
         
          			<div id="img-wrapper" className={this.props.project.href ?  'visible': 'hidden' }>
          
            			<img src={'https://digitalkdogg.github.io/' + this.props.project.href} alt={this.props.project.title} />
            
          			</div>
          
        		</div>
        		<div className="modal-footer">
        		</div>
      		</div>
      		)
    	} else {
    		return ('')
    	}
	}
}

export default modal