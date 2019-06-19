import React, { Component } from 'react';

class modal extends Component {

	constructor(props) {
      super();
      this.state = {'modalclass': props.modalclass }
 }

  close_modal(project, that) {
    project.setState({'modalclass': 'hidden'})
  }


render(props){
 	if (this.props.project.type !== 'url') { 
		return (
       		<div className="modal-content">
        		<div className="modal-header">
          			<button type="button" className="close" data-dismiss="modal" onClick={this.close_modal.bind(this.props.project, this)} >&times;</button>
            			<h4 className="modal-title">{this.props.project.title}</h4>
        		</div>
        		<div className="modal-body">
          			<p>{this.props.project.desc}</p>
         
          			<div id="img-wrapper" className={this.props.project.href ?  'visible': 'hidden' }>
          
            			<img src={'https://digitalkdogg.github.io/' + this.props.project.href} alt={this.props.project.title} />
            
          			</div>
          
        		</div>
        		<div className="modal-footer">
          			<button type="button" className="btn btn-default" onClick={this.close_modal.bind(this.props.project, this)}>Close</button>
        		</div>
      		</div>
      		)
    	} else {
    		return ('')
    	}
	}
}

export default modal