import React, { Component } from 'react';

import P from '../utils/P';
import Quote from '../utils/Quote';
import Aproject from '../guts/Aproject';
import Swiper from 'react-id-swiper';
import Utilsjs from '../utils/Utilsjs';
import Projs from '../../JSON/Projects.json';

import '../../includes/swiper/swiper.min.css';

class Projects extends Component {

	constructor() {
      super();
      this.state = {
        'modalstate': 'hidden',
      }
 }

componentDidMount() {
  setTimeout(function () {
     if (document.querySelector('.swiper-pagination-total')!= null) {
       document.querySelector('.swiper-pagination-total').innerText = document.querySelectorAll('#project-container').length;
      }
    },100);

 
 
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

      const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      autoHeight: true,
       pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        800: {
          slidesPerView: 2,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          },
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
		 return (
           <div className="item projects">
           		  <P text="I enjoy doing side projects in my spare time because it gives me the chance to grow my skills set and also learn about new technologies.  In today's world of changing technologies, I find it is import to constiently challenge my self to learn, develop and grow my skills the correct way" />
                <Quote text="&quot;I have not failed, I've just found 10,000 ways that won't work&quot;" />
                <P class="quote-name" text=" -Thomas Edison" />
                <P text="" />
                <Swiper {...params}>
                  <Aproject project={Projs.millwood} />
                  <Aproject project={Projs.checkbook} />
                  <Aproject project={Projs.olympic}/>
                  <Aproject project={Projs.checkboxme}/>
                  <Aproject project={Projs.millwoodadmin} />
                  <Aproject project={Projs.plexmanager} />
                  <Aproject project={Projs.resume}/>




                </Swiper>

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



           </div>
      )

	}
}

export default Projects
