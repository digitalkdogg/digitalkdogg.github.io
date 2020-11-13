import React, { Component } from 'react';
import millwood from '../includes/img/millwood_thumb.jpg';
import olympic from '../includes/img/olympic_inspection.png';
import checkbook from '../includes/img/checkbook_scaled.png';
import plex from '../includes/img/plex_admin.png';


class Projects extends Component {



	render(props){
		const millwoodstyle = {
			'background': 'url(' + millwood + ') center center / contain no-repeat',
		}

		const olympicstyle = {
			'background': 'url(' + olympic + ') center center / contain no-repeat',
		}

		const checkbookstyle = {
			'background': 'url(' + checkbook + ') center center / contain no-repeat',
		}

		const plexstyle = {
			'background': 'url(' + plex + ') center center / contain no-repeat',
		}

return (
     <div id="projects" className="section hidden">
     			 <div className="mobile-space-small desktop-space-large"></div>
			 <div className="row-wrap">
			 <div className="mobile-space-small"></div>
				 <div className="block c5 box-shadow box flip-card">

						 <div className="flip-card-inner">

							 <div className="flip-card-front bg-img" style={millwoodstyle}>
							 	<div className="flip-card-cover"></div>
							 	<div className="flip-card-title">Millwood Christian Church</div>
							 </div>

							 <div className="flip-card-back">
								
								 <h1 className="title">Millwood Christian Church</h1>
								 <div className="content-wrap">
									 <div className="row">
									 	<div className="name ">Project Brief : </div>
									 	<div className="value">I did this project for my church to give back to my community.  We migrated the domain from existing drupal site and manage the new site from wire frame to completion</div>
									 </div>
									  <div className="row">
									 	<div className="name">Features : </div>
									 	<div className="value">
									 		<li className="nobullet">Customized Theme</li>
									 		<li className="nobullet">Dynamic Restful API Feed</li>
									 		<li className="nobullet">Online Donation Portal</li>
									 	</div>
									 </div>
									 <div className="row">
									 	<div className="name">Technologies : </div>
									 	<div className="value">PHP, UX Design, Word Press, CSS, REST API</div>
									 </div>
								</div>

								 <div className="row footer align-center" >
									<button className="green-grandient">
										<a href="https://olympicinspection.com/" target="_blank">View Site</a>
									</button>	
								</div>

							 </div>

						 </div>
				

					 </div>
					 <div className="mobile-space-small"></div>
					 <div className="block c5 box-shadow box flip-card">

						 <div className="flip-card-inner">

							 <div className="flip-card-front bg-img" style={olympicstyle}>
							 	<div className="flip-card-cover"></div>
							 	<div className="flip-card-title">Olympic Home Inspections</div>
							 </div>

							 <div className="flip-card-back">
								<h1 className="title">Olympic Home Inspections</h1>
								<div className="content-wrap">
									<div className="row" >
										<div className="name">Project Brief : </div>
										<div className="value">I did this project for a small business to help get their business off the ground.  I work directly with the customer and help purchase a domain, reviewed mockups and developed the site in support of their business.</div> 
									</div>

									<div className="row">
										<div className="name">Features : </div>
										<div className="value">
											<li className="nobullet">Customized Theme</li>
											<li className="nobullet">UX Design</li>
									 		<li className="nobullet">Online Contact Form</li>
										</div> 
									</div>
									<div className="row" >
										<div className="name">Technologies : </div>
										<div className="value">UX Design, Word Press, CSS</div> 
									</div>
								</div>

								 <div className="row footer align-center" >
									<button className="green-grandient">
										<a href="http://www.googel.com" target="_blank">View Site</a>
									</button>	
								</div>
							 </div>

						 </div>
				

					 </div>

				 </div>
		 
			 <div className="row-wrap">
			 <div className="mobile-space-small"></div>
				 <div className="block c5 box-shadow box flip-card">

						 <div className="flip-card-inner">

							 <div className="flip-card-front bg-img" style={checkbookstyle}>
							 	<div className="flip-card-cover"></div>
							 	<div className="flip-card-title">Checkbook</div>
							 </div>

							 <div className="flip-card-back">
								
								 <h1 className="title">Checkbook</h1>
								 <div className="content-wrap">
									 <div className="row">
									 	<div className="name ">Project Brief : </div>
									 	<div className="value">
									 		This was a personal project that I did in php codeigniter.  I needed a way to keep track of my bills and I wasn't too happy with any of the apps out there so I made my own.
									 	</div>
									 </div>
									  <div className="row">
									 	<div className="name">Features : </div>
									 	<div className="value">
									 		<li className="nobullet">Complete Dynamic Dashboard</li>
									 		<li className="nobullet">Full Reporting Suite</li>
									 	</div>
									 </div>
									 <div className="row">
									 	<div className="name">Technologies : </div>
									 	<div className="value">PHP, Codeigniter, REST API</div>
									 </div>
								</div>

								 

							 </div>

						 </div>
				

					 </div>
					 <div className="mobile-space-small"></div>
					 <div className="block c5 box-shadow box flip-card">

						 <div className="flip-card-inner">

							 <div className="flip-card-front bg-img" style={plexstyle}>
							 	<div className="flip-card-cover"></div>
							 	<div className="flip-card-title">Plex Movie Manager</div>
							 </div>

							 <div className="flip-card-back">
								<h1 className="title">Plex Movie Manager</h1>
								<div className="content-wrap">
									<div className="row" >
										<div className="name">Project Brief : </div>
										<div className="value">
											Another personal project that I did.  The goal was to optimize my plex movie library.  I wrote this in laravel and it uses the plex api to tab into my library and allow me to see the details of eash of my movies
										</div> 
									</div>

									<div className="row">
										<div className="name">Features : </div>
										<div className="value">
											<li className="nobullet">Third Party API Integration</li>
											<li className="nobullet">Reporting Dashobard</li>
										</div> 
									</div>
									<div className="row" >
										<div className="name">Technologies : </div>
										<div className="value">PHP, Laravel, Third party API</div> 
									</div>
								</div>

								
							 </div>

						 </div>
				

					 </div>

				 </div>
			 <div className="mobile-space-large desktop-space-large"></div>
     </div>
      )
	}
}

export default Projects;