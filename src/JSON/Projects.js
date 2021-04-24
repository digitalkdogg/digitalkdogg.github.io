import React, { Component } from 'react';

import '../includes/css/projects.css';
import millwood from '../includes/img/millwood_thumb_new.jpg';
import walmartworld from '../includes/img/walmartworld.png';
import olympic from '../includes/img/olympic_inspection.png';
import checkbook from '../includes/img/checkbook_scaled.png';
import plex from '../includes/img/plex_admin.png';

import Aproject from '../templates/Aproject';


class Projects extends Component {

render(){
return (
     <div id="projects" className="section">


		<div className="mobile-space-small desktop-space-large"></div>

		<Aproject
			title='Millwood Christian Church'
			href='https://millwoodchurchnwa.com'
			desc='A website I desing and maintain for my church. I enjoy giving back to my community'
			tags={[
				{name:'PHP 7', value:'fab fa-php'},
				{name:'UX Design', value:'fas fa-drafting-compass'},
				{name:'Wordpress', value:'fab fa-wordpress'},
				{name:'REST API', value:'fas fa-stream'}]}
			projects={[
				{'name':'Customized Theme'},
				{'name':'Dynamic Restful API Feed'},
				{'name':'Online Donation Portal'}
			]}
			imgalt='Millwood'
			imgsrc={millwood}
		/>


		<div className="mobile-space-small desktop-space-large"></div>
		<div className="mobile-space-small desktop-space-large"></div>

    <Aproject
      title='Walmart World'
      href='https://walmartworld.com'
      desc='This was my first public site I did for Walmart since most of my work is done for the intranet'
      tags={[
        {name:'Adobe AEM', value:'fas fa-braille'},
        {name:'UX Design', value:'fas fa-drafting-compass'},
        {name:'REST API', value:'fas fa-stream'}]}
      projects={[
        {'name':'Material Design'},
        {'name':'Restfull API (See milestone section)'},
        {'name':'CMS Customization'}
      ]}
      imgalt='Walmart World'
      imgsrc={walmartworld}
    />


    <div className="mobile-space-small desktop-space-large"></div>
    <div className="mobile-space-small desktop-space-large"></div>

			<Aproject
			title='Olympic Home Inspections'
			href='http://olympicinspection.com'
			desc='I did this project for a small business to help get their business off the ground.  I work directly with the customer and help purchase a domain, reviewed mockups and developed the site in support of their business.'
			tags={[
				{name:'UX Design', value:'fas fa-drafting-compass'},
				{name:'Wordpress', value:'fab fa-wordpress'},
				{name:'Material Design', value:'fab fa-box'}]}
			projects={[
				{name:'Customized Theme'},
				{name:'UX Design'},
				{name:'Custom Contact Form'}]}
			imgalt='Olympic Inspection'
			imgsrc={olympic}
		/>

		<div className="mobile-space-small desktop-space-large"></div>
		<div className="mobile-space-small desktop-space-large"></div>

		<Aproject
			title='Checkbook'
			desc='This was a personal project that I did in php codeigniter.  I needed a way to keep track of my bills and I was not too happy with any of the apps out there so I made my own.'
			tags={[
				{name:'PHP', value:'fab fa-php'},
				{name:'Codeigniter', value:'fas fa-fire-alt'},
				{name:'Rest API', value:'fas fa-stream'}]}
			projects={[
				{name:'DB UML Design'},
				{name:'Material Design'},
				{name:'Data Dashboard'}]}
			imgalt='Checkbook'
			imgsrc={checkbook}
		/>


		<div className="mobile-space-small desktop-space-large"></div>
		<div className="mobile-space-small desktop-space-large"></div>

		<Aproject
			title='Plex Movie Manager'
			desc='Another personal project that I did.  The goal was to optimize my plex movie library.  I wrote this in laravel and it uses the plex api to tab into my library and allow me to see the details of eash of my movies'
			tags={[
				{name:'PHP 7', value:'fab fa-php'},
				{name:'Laravel', value:'fab fa-laravel'},
				{name:'Third party API', value:'fas fa-expand-alt'}]}
			projects={[
				{name:'Third Party API Integration'},
				{name:'Reporting Dashboard'}]}
			imgalt='Plex Movie Manager'
			imgsrc={plex}
		/>

		<div className="mobile-space-small desktop-space-large"></div>
		<div className="mobile-space-small desktop-space-large"></div>
	</div>

      )
	}
}

export default Projects;
