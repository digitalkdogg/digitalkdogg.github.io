import React, { Component } from 'react';

class Aproject extends Component {

	constructor(props) {
      super();
      this.state = {
        'props': props,
        'modalclass': 'hidden' 
      }
 }

 exec_proj_click (project, that) {
    if (project.props.project.type =='url') {
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
      <div id = "project-container">
        <div className="project">
          <div className="title">
            {this.props.project.title}
          </div>
          <div className="desc">
            {this.props.project.desc}
          </div>
          <div className="btn-container">
         
            <a>
              <button onClick = {this.exec_proj_click.bind(this.props.project, this)}>View More</button>
            </a>

          </div>
        </div>
         <div id = "modal" className = {'modal ' + this.state.modalclass}>
           <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" onClick = {this.close_modal.bind(this.props.project, this)} >&times;</button>
                <h4 className="modal-title">{this.props.project.title}</h4>
            </div>
            <div className="modal-body">
              <p>{this.props.project.desc}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick = {this.close_modal.bind(this.props.project, this)}>Close</button>
            </div>
          </div>
        </div>
      </div>
      )
	}
}

export default Aproject