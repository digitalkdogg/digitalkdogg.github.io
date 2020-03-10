import React, { Component } from 'react';
import millwood from '../includes/img/millwood_thumb.jpg';

class Projects extends Component {



	render(props){
		const millwoodstyle = {
	'background': 'url(' + millwood + ')',
	'background-size': 'cover'
}
		 return (
     <div id="projects" className="section hidden">
			 <div className="row-wrap skills-wrap">
				 <div className="block c5 box-shadow box flip-card">

						 <div class="flip-card-inner">

							 <div class="flip-card-front" style = {millwoodstyle}>
								
							 </div>

							 <div class="flip-card-back">
								 <h1 className="title">Millwood Christian Church</h1>
								 <p>cool description here</p>
								 <p>also here</p>
							 </div>

						 </div>
						 <div class = "project-footer">Millwood Christian Church</div>

					 </div>
				 
				 <div className="block c5 box-shadow box">
					 <div className="title">Olympic Inspection</div>

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
