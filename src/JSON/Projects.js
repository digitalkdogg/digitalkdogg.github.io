import React, { Component } from 'react';
import millwood from '../includes/img/millwood.png';

class Projects extends Component {

	render(props){
		 return (
     <div id="projects" className="section hidden">
			 <div className="row-wrap skills-wrap">
				 <div className="block c5 box-shadow box flip-card">

						 <div class="flip-card-inner">

							 <div class="flip-card-front">
								 <img src={millwood} alt="Avatar" />
							 </div>

							 <div class="flip-card-back">
								 <h1 className="title">Millwood Christian Church</h1>
								 <p>cool description here</p>
								 <p>also here</p>
							 </div>

						 </div>

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
