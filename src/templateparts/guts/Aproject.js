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
      <div id="project-container" className = "swiper-slide">
        <div className="project">
          <div className="title">
            {this.props.project.title}
          </div>
          <div className="desc">
						<div className="lefttrix">
            	{this.props.project.desc}
						</div>
						<div className="righttrix">
							<img alt="#" className={this.props.project.type==='url'? 'hidden': 'visible'} src={this.props.project.thumb} />
						</div>
						<div className={this.props.project.type==='url'? 'visible': 'hidden'}>
						<a href={this.props.project.href} target="_blank">
							<button>View Site</button>
						</a>
						</div>
          </div>
          <div className="btn-container">
						<div>Platform : {this.props.project.platform}</div>
						<div>Skills : {this.props.project.skills}</div>

          </div>
        </div>
         <div id="modal" className={'modal ' + this.state.modalclass + ' modal_'+this.props.project.id}>
         <span id="close" onClick={this.close_modal.bind(this.props.project, this)}>x</span>
          <Modal modalclass={this.state.modalclass} project={this.props.project}  />
        </div>
      </div>
      )
	}
}

export default Aproject
