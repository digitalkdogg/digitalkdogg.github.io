import React, { Component } from 'react';

import P from '../utils/P';
import Quote from '../utils/Quote';
import Aproject from '../guts/Aproject';
import Swiper from 'react-id-swiper';
import Utilsjs from '../utils/Utilsjs';

import "../../includes/swiper/swiper.min.css";


class Projects extends Component {

	constructor() {
      super();
      this.state = {
        'modalstate': 'hidden',
        projs: {
          'millwood' : {
            'id': 1,
            'title': 'Millwood',
            'desc': 'When my church approach me i was super excited to do this project.  Not only did I get to do what I love but I felt I got to help my community as well.  We migrated the site from a old 5 year old drupal site.  The site is features a fully customized theme along with a facebook and constant contact integration. The website is now fully maintain by the staff at Millwood Christian Church',
            'type': 'url',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/millwood.png',
            'thumbname' : 'millwood',
						'platform': 'PHP / Wordpres',
						'skills': 'PHP, Wordpres, jQuery, git, UX Design, CMS',
            'href': 'https://millwoodchurchnwa.com'
          },
          'checkbook' : {
            'id': 2,
            'title': 'Checkbook',
            'desc': 'Checkbook was a personal project that I did a couple of years ago that I still use today.  I needed an application that would allow me to keep track of my bills and help me balance my budget.  I didn\'t lke anything out there so I wrote my own.  The app is made in php 7 with codeigniter and runs off my own MySQL server',
            'type': 'url',
						'platform': 'PHP - Codeigniter',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/checkbook_scaled.png',
            'thumbname' : 'checkbook',
						'skills': 'PHP, MySQL, Bootstrap 3, Responsive Design, Restfull API Design ',
            'href' : '#'
        },
          'olympic' : {
            'id': 3,
            'title': 'Olympic Inspection',
            'desc': 'Olympic Inspection is a site that I develop for a customer to help start up thier small business doing home inspections. It is really interesting to work with a company from the ground up and really see how the website really does help and grow their business.  The site is build with wordpress and features a custom theme along with a contact / db form.',
            'type': 'url',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/olympic_inspection.png',
            'thumbname' : 'olympic',
						'platform': 'PHP - Wordpress',
						'skills': 'PHP, MySQL, jQuery',
            'href' : 'https://olympicinspection.com'
        },
          'checkboxme' : {
            'id': 4,
            'title': 'Checkbox.me',
            'desc': 'This was my first attempted at making a jQuery plugin.  I need this because I was working on a project that required me to make a little bit more fancy of a checkbox.  I did some digging around and came up wiht this way to render a checkbox using a div and an web font.  I decided to turn this into a plugin in case anyone wanted to use it.',
            'type': 'url',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/checkboxme.png',
            'thumbname' : 'checkboxme',
						'platform': 'jQuery',
						'skills': 'jQuery, Plugin Design, javascript',
            'href': 'https://digitalkdogg.github.io/checkbox.github.io'
          },
          'millwoodadmin' : {
            'id': 5,
            'title': 'Millwood Admin',
            'desc': 'To help support the Millwood church website, we need an applicaiton to take care of some administrative tasks.  For example, the product owner will create a constant contact newsletter and than use this admin site to import into the news section of the website.  We did it this way instead of doing a straight api feed because we wanted the ability to pick and choose which news letters show up on the website.',
						'type': 'url',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/millwood_admin.png',
            'thumbname' : 'millwoodadmin',
						'platform': 'PHP 7',
						'skills': 'PHP, javascript, Restful API, data integration',
						'href': '#'
          },
          'plexmanager' : {
            'id': 6,
            'title': 'Plex Manager',
            'desc': 'I have over 200 movies stored on my plex server.  I made this application to help me categorize and optimize my plex library.  The plex application doesn\'t have this functionality.  Built with Laravel 5 and leverages the plex api service.' ,
            'type': 'url',
            'thumb': 'https://digitalkdogg.github.io/src/includes/img/plex_admin.png',
            'thumbname' : 'plexmanager',
            'platform': 'PHP - Laravel',
            'skills': 'PHP, javascript, Restful API',
            'href': '#'
          },
          'resume' : {
            'id': 7,
            'title': 'Resume Builder',
            'desc': 'Another personal project that I did in my spare time.  I wanted something to help me keep track of new opportunities that I am interested and I have applied for.  The application is build in code ignitor and uses the mPDF class to dymanically generate PDF\'s',
            'type': 'url',
            'thumb': 'https://digitalkdogg.github.io/src/includes/img/resume_admin.png',
            'thumbname': 'resumeadmin',
            'platform': 'PHP - Codeigniter',
            'skills': 'PHP, MySQL, jQuery, boostrap',
            'href' : '.#'
        } }
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
      /*    slidesPerGroup: 1, */
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
                  <Aproject project={this.state.projs.millwood} />
                  <Aproject project={this.state.projs.checkbook} />
                  <Aproject project={this.state.projs.olympic}/>
                  <Aproject project={this.state.projs.checkboxme}/>
                  <Aproject project={this.state.projs.millwoodadmin} />
                  <Aproject project={this.state.projs.plexmanager} />
                  <Aproject project={this.state.projs.resume}/>




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
