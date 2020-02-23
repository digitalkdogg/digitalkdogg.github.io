import React, { Component } from 'react';
import Utilsjs from '../utils/Utilsjs';


class modal extends Component {

	constructor(props) {
      super();
      this.state = {'modalclass': props.modalclass }
 }

 close_modal(project) {
      const Utils = new Utilsjs();
      event.preventDefault();
      Utils.closeModal('#modal-wrapper');
  }

   exec_url(project) {
         let ele = document.getElementById('#modal-wrapper');
      let href = ele.getAttribute('data-whichproject');

     if (href !== '#') {
       window.open(href, '_blank');
    }
  }

render(props){
		return (
      <div className={'modal fade'} id={'#modal-wrapper'} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button type="button"  onClick={this.close_modal.bind(this.props.project, this)} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="desc"></p>
              <p className="img-wrap"></p>


            </div>
            <div className="modal-footer">
             <div className='skills-wrap'></div>
             <div className='footer-btn-wrap'>
                <button type="button" onClick={this.exec_url.bind(this.props.project, this)} className="btn btn-secondary visiturl" >Visit Site</button>
                <button type="button" onClick={this.close_modal.bind(this.props.project, this)} className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}

}

export default modal