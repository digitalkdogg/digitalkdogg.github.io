import React, { Component } from 'react';

//import Modal from '../utils/Modal';
//import Project from './Projects';
import Utilsjs from '../utils/Utilsjs';

class Aproject extends Component {

	constructor(props) {
      super(props);
      this.state = {
        'props': props,
        'modalclass': 'hidden'
      }

 }

 exec_proj_click = (project) => {
    const Utils = new Utilsjs();
    event.preventDefault();
   
    Utils.showModal('#modal-wrapper');

    var ele = document.getElementById('#modal-wrapper');
    ele.setAttribute('data-whichproject', project.props.project.href);

    let modal = ele.getElementsByClassName('modal-content')
    if (modal.length === 1) {
        let title = modal[0].getElementsByClassName('modal-title');
        let body = modal[0].getElementsByClassName('modal-body');
        let footer = modal[0].getElementsByClassName('modal-footer');
        let desc = body[0].getElementsByClassName('desc');
        let imgwrap = body[0].getElementsByClassName('img-wrap');
        let skills = footer[0].getElementsByClassName('skills-wrap');
        let visiturlbtn = footer[0].getElementsByClassName('visiturl');
        let maxheight = 150;


        if (Utils.isMobileDevice()===false) {
            maxheight = (window.innerHeight/2.5);
        }
        imgwrap[0].setAttribute('style', 'height:' + maxheight + 'px');

        title[0].innerHTML = project.props.project.title;
        desc[0].innerHTML = project.props.project.desc;
        imgwrap[0].classList.add(project.props.project.thumbname);
        let skillsarr = project.props.project.skills.split(',');
        skills[0].innerHTML = '';
        for (let x=0; x<skillsarr.length; x++) {
           skills[0].innerHTML = skills[0].innerHTML+'<span>'+skillsarr[x].trim()+'</span>';
        }

        if (project.props.project.href === '#') {
          visiturlbtn[0].setAttribute('style', 'display:none;');
        } else {
          visiturlbtn[0].removeAttribute('style');
        }

    }

  }


	render(props){
		 return (
      <div id="project-container" className="swiper-slide">
        <div className="project">
          <div className="title">
            {this.props.project.title}
          </div>
          <div className="desc">
              <div className="img-wrap">
						    <img alt="#" className={this.props.project.type} src={this.props.project.thumb} />
							</div>
						<div className='visible'>
						<a href="#" onClick={this.exec_proj_click.bind(this.props.project,this)}  >
							<button type="button" className="btn btn-primary" data-toggle="modal2" data-target={'#modal_'+this.props.project.id}>View More</button>
						</a>
						</div>
          </div>
          <div className="btn-container">
						<div>Platform : {this.props.project.platform}</div>
						<div>Skills : {this.props.project.skills}</div>

          </div>
        </div>



      </div>
      )
	}
}

export default Aproject
