import React, { Component } from 'react';
import Li from '../templates/Utils/Li';

import Bottom from '../templates/Bottom';

class Skills extends Component {

	render(props){
		 return (
			 <div id="skills" className='section hidden'>
			        <div className="mobile-space-normal"></div>
				 <div className="row-wrap skills-wrap">
					 <div className="block c5 box-shadow box">
						 <div className="title">Front End</div>
							 <Li class="nobullet" text="HTML 5" />
							 <Li class="nobullet" text="CSS3" />
							 <Li class="nobullet" text="Javascript" />
							 <Li class="nobullet" text="Jquery / React JS / Angular" />
							 <Li class="nobullet" text="Wordpress" />
							 <Li class="nobullet" text="Drupal" />
					 </div>
					 <div className="block c5 box-shadow box">
						 <div className="title">Back End</div>
							 <Li class="nobullet" text="PHP" />
							 <Li class="nobullet" text="Codeigniter" />
							 <Li class="nobullet" text="Laravel" />
							 <Li class="nobullet" text="MySQL" />
					 </div>
				 </div>

				 <div className="row-wrap skills-wrap">
					 <div className="block c5 box-shadow box">
						 <div className="title">Server</div>
							 <Li class="nobullet" text="Git Version Contral" />
							 <Li class="nobullet" text="Node JS" />
							 <Li class="nobullet" text="Composer" />
							 <Li class="nobullet" text="LAMP Stack" />
					 </div>
					 <div className="block c5 box-shadow box">
						 <div className="title">Other Skills</div>
							 <Li class="nobullet" text="MVC Frameworks" />
							 <Li class="nobullet" text="REST API's" />
							 <Li class="nobullet" text="Agile Methodoloy" />
							 <Li class="nobullet" text="Object Oriented Programming" />
					 </div>
				 </div>

				 <Bottom nextsection="contact" />

			 </div>
      )
	}
}
export default Skills
