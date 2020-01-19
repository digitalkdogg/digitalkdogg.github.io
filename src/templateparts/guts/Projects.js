import React, { Component } from 'react';

import P from '../utils/P';
import Quote from '../utils/Quote';
import Aproject from '../guts/Aproject';
import Swiper from 'react-id-swiper';

import "../../includes/swiper/swiper.min.css";


class Projects extends Component {

	constructor() {
      super();
      this.state = {
        projs: {
          'millwood' : {
            'id': 1,
            'title': 'Millwood',
            'desc': 'This is a website I did for Millwood Church in rogers.  The site is built on wordpress and the features include a customized theme, an events calendar, and a blog news feed.  The updates of content is managed solely by the power users of the church.',
            'type': 'url',
						'thumb': '#',
						'platform': 'Wordpres',
						'skills': 'PHP, Wordpres, jQuery, git, UX Design, CMS',
            'href': 'https://millwoodchurchnwa.com'
          },
          'checkbook' : {
            'id': 2,
            'title': 'Checkbook',
            'desc': 'This was a personal project that I did on my own.  It uses php code igniter along with mysql db server',
            'type': 'modal',
						'platform': 'PHP - Codeigniter',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/checkbook.png',
						'skills': 'PHP, MySQL, Bootstrap 3, Responsive Design, Restfull API Design ',
            'href' : './src/includes/img/checkbook.png'
        },
          'resume' : {
            'id': 3,
            'title': 'Resume Builder',
            'desc': 'This was another personal project that I did on my own.  As I started my job search I wanted an easy way to manage different resume layouts.  This tool that I build allows me to do that.',
            'type': 'modal',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/resume_admin.png',
						'platform': 'PHP - Codeigniter',
						'skills': 'PHP, MySQL, jQuery, boostrap',
            'href' : './src/includes/img/resume_admin.png'
        },
          'checkboxme' : {
            'id': 4,
            'title': 'Checkbox.me',
            'desc': 'This started out as a simple need to implement a fancier version of a checkbox which I thought was pretty cool so I decided to turn this into a plugin.  This written in 100% jQuery and I hope to have this published soon on jquery\'s plguin site.',
            'type': 'url',
						'thumb': '#',
						'platform': 'jQuery',
						'skills': 'jQuery, Plugin Design, javascript',
            'href': 'https://digitalkdogg.github.io/checbox.github.io'
          },
          'millwoodadmin' : {
            'id': 5,
            'title': 'Millwood Admin',
            'desc': 'To help support the Millwood church website, we need an applicaiton to take care of some administrative tasks.  For example, the product owner will create a constant contact newsletter and than use this admin site to import into the news section of the website.',
						'type': 'modal',
						'thumb': 'https://digitalkdogg.github.io/src/includes/img/millwood_admin.png',
						'platform': 'PHP 7',
						'skills': 'PHP, javascript, Restful API, data integration',
						'href': './src/includes/img/millwood_admin.png'
          },
          'plexmanager' : {
            'id': 6,
            'title': 'Plex Manager',
            'desc': 'This project, made in Laravel, is a work in progress.  It utilizes the plex api to catolog my plex movies to a database.  This can than be used to analyze and optimize my plex library',
            'type': 'modal',
            'thumb': 'https://digitalkdogg.github.io/src/includes/img/plex_manager.jpeg',
            'platform': 'PHP - Laravel',
            'skills': 'PHP, javascript, Restful API',
            'href': './src/includes/img/plex_manager.jpeg'
          } }
      }
 }




	render(props){

      const params = {
      slidesPerView: 1,
      spaceBetween: 30,
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
                  <Aproject project={this.state.projs.resume}/>
                  <Aproject project={this.state.projs.checkboxme}/>
                  <Aproject project={this.state.projs.millwoodadmin} />
                  <Aproject project={this.state.projs.plexmanager} />

                  
                 
                </Swiper>
   

           </div>
      )
	}
}

export default Projects
