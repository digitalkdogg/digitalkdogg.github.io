import React, { Component } from 'react';
import millwood from '../includes/img/millwood_thumb.jpg';

class Projects extends Component {



	render(props){
		const millwoodstyle = {
	'background': 'url(' + millwood + ')',
	'background-size': 'contain',
	'background-repeat': 'no-repeat',
	'background-position':'center'
}


return (
     <div id="projects" className="section hidden">
			 <div className="row-wrap skills-wrap">
				 <div className="block c5 box-shadow box flip-card">

						 <div class="flip-card-inner">

							 <div class="flip-card-front" style = {millwoodstyle}>
							 	<div class="flip-card-cover"></div>
							 	<div class="flip-card-title">Millwood Christian Church</div>
							 </div>

							 <div class="flip-card-back">
								 <h1 className="title">Millwood Christian Church</h1>
								 <div class = "row">
								 	<div className = "name ">Project Brief : </div>
								 	<div className = "value">I did this project for my church to give back to my community.  We migrated the domain from existing drupal site and manage the new site from wire frame to completion</div>
								 </div>
								  <div class = "row">
								 	<div className = "name">Features : </div>
								 	<div className = "value">
								 		<li className = "nobullet">Customized Theme</li>
								 		<li className = "nobullet">Dynamic Restful API Feed</li>
								 		<li className = "nobullet">Online Donation Portal</li>
								 	</div>
								 </div>
								 <div class = "row">
								 	<div className = "name">Technologies : </div>
								 	<div className = "value">PHP, UX Design, Word Press, CSS, REST API</div>
								 </div>

								 <div className ="row footer" >
									<button>View Site</button>	
								</div>

							 </div>

						 </div>
				

					 </div>

					 <div className="block c5 box-shadow box flip-card">

						 <div class="flip-card-inner">

							 <div class="flip-card-front" style = {millwoodstyle}>
							 	<div class="flip-card-cover"></div>
							 	<div class="flip-card-title">Millwood Christian Church</div>
							 </div>

							 <div class="flip-card-back">
								 <h1 className="title">Millwood Christian Church</h1>
								<div className ="row" >
									<div className = "name">Project Brief : </div>
									<div className = "value">really fun project description would go here and be as long as I think it should be to fill this wonderfull space to my liking.</div> 
								</div>

								<div className ="row">
									<div className = "name">Features : </div>
									<div className = "value">really fun project description would go here and be as long as I think it should be to fill this wonderfull space to my liking.</div> 
								</div>
								<div className ="row" >
									<div className = "name">Technologies : </div>
									<div className = "value">really fun project description would go here and be as long as I think it should be to fill this wonderfull space to my liking.</div> 
								</div>

								<div className ="row" >
									<button>View Site</button>	
								</div>

							 </div>

						 </div>
				

					 </div>

				 </div>
		 

		 <div className="row-wrap skills-wrap">
			 <div className="block c5 box-shadow box">
				 <div className="title">Checkbook</div>

			 </div>
			 <div className="block c5 box-shadow box">
				 <div className="title">Checkbox.js</div>

			 </div>
		 </div>
		 <div className="row-wrap skills-wrap">
			<div className="block c5 box-shadow box">
				<div className="title">Checkbook</div>

			</div>
			<div className="block c5 box-shadow box">
				<div className="title">Checkbox.js</div>

			</div>
		</div>
     </div>
      )
	}
}

export default Projects
