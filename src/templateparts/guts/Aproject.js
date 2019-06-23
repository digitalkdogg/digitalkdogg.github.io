import React, { Component } from 'react';

import Modal from '../utils/Modal';

class Aproject extends Component {

	constructor(props) {
      super(props);
      this.state = {
        'props': props,
        'modalclass': 'hidden' 
      }
      
 }

 exec_proj_click (project, that) {
    if (project.props.project.type ==='url') {
      var url = project.props.project.href
      var win = window.open(url, '_blank');
      win.focus();
    } else {
      project.setState({'modalclass': 'visible'})
    }
  }

  close_modal(project, that) {
    project.setState({'modalclass': 'hidden'})
  }


	render(props){
		 return (
      <div id="project-container">
        <div className="project">
          <div className="title">
            {this.props.project.title}
          </div>
          <div className="desc">
            {this.props.project.desc}
          </div>
          <div className="btn-container">
            <a>
              <button onClick={this.exec_proj_click.bind(this.props.project, this)}>View More</button>
            </a>

          </div>
        </div>
         <div id="modal" className={'modal ' + this.state.modalclass + ' modal_'+this.props.project.id}>
         <span id = "close" onClick={this.close_modal.bind(this.props.project, this)}>x</span>
          <Modal modalclass={this.state.modalclass} project={this.props.project}  />
        </div>
      </div>
      )
	}
}

export default Aproject