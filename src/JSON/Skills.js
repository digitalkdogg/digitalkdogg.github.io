import React, { Component } from 'react';
import Li from '../templates/Utils/Li';

class Skills extends Component {

	render(props){
		 return (
			 <div id="skills" className='section hidden'>
			        <div className="mobile-space-normal"></div>
				 <div className="row-wrap skills-wrap">
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"> <i class="fas fa-fill-drip"></i>&nbsp;Front End</div>
							 <Li class="bullet" text="HTML 5" />
							 <Li class="bullet" text="CSS3" />
							 <Li class="bullet" text="Javascript" />
							 <Li class="bullet" text="Jquery / React JS / Angular" />
							 <Li class="bullet" text="Wordpress" />
							 <Li class="bullet" text="Drupal" />
					 </div>
					 <div className="mobile-space-normal "></div>
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"><i class="fas fa-terminal rotate-180"></i> Back End</div>
							 <Li class="bullet" text="PHP" />
							 <Li class="bullet" text="Codeigniter" />
							 <Li class="bullet" text="Laravel" />
							 <Li class="bullet" text="Salesforce CRM" />
							 <Li class="bullet" text="Java" />
							 <Li class="bullet" text="MySQL" />
					 </div>
				 </div>

				 <div className="row-wrap skills-wrap">
				 <div className="mobile-space-normal "></div>
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"><i class="fas fa-server"></i> Server</div>
							 <Li class="bullet" text="Git Version Contral" />
							 <Li class="bullet" text="Node JS" />
							 <Li class="bullet" text="Composer" />
							 <Li class="bullet" text="LAMP Stack" />
					 </div>
					 <div className="mobile-space-normal "></div>
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"><i class="fas fa-box-open"></i>Other Skills</div>
							 <Li class="bullet" text="MVC Frameworks" />
							 <Li class="bullet" text="REST API's" />
							 <Li class="bullet" text="Agile Methodoloy" />
							 <Li class="bullet" text="Material Design" />
							 <Li class="bullet" text="Grid And Flex Layouts" />
							 <Li class="bullet" text="Accessibility Standards" />
							 
					 </div>
				 </div>

			 </div>
      )
	}
}
export default Skills
