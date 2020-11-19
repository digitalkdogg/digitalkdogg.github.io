import React, { Component } from 'react';
import Li from '../templates/Utils/Li';

class Skills extends Component {

	render(props){
		 return (
			 <div id="skills" className='section hidden'>
			        <div className="mobile-space-normal"></div>
				 <div className="row-wrap skills-wrap">
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"> <i className="fas fa-fill-drip"></i>&nbsp;Front End</div>
							 <Li className="bullet" text="HTML 5" />
							 <Li className="bullet" text="CSS3" />
							 <Li className="bullet" text="Javascript" />
							 <Li className="bullet" text="Jquery / React JS / Angular" />
							 <Li className="bullet" text="Wordpress" />
							 <Li className="bullet" text="Drupal" />
					 </div>
					 <div className="mobile-space-normal "></div>
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"><i className="fas fa-terminal rotate-180"></i> Back End</div>
							 <Li className="bullet" text="PHP" />
							 <Li className="bullet" text="Codeigniter" />
							 <Li className="bullet" text="Laravel" />
							 <Li className="bullet" text="Salesforce CRM" />
							 <Li className="bullet" text="Java" />
							 <Li className="bullet" text="MySQL" />
					 </div>
				 </div>

				 <div className="row-wrap skills-wrap">
				 <div className="mobile-space-normal "></div>
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"><i className="fas fa-server"></i> Server</div>
							 <Li className="bullet" text="Git Version Contral" />
							 <Li className="bullet" text="Node JS" />
							 <Li className="bullet" text="Composer" />
							 <Li className="bullet" text="LAMP Stack" />
					 </div>
					 <div className="mobile-space-normal "></div>
					 <div className="block c5 box-shadow box border-radius-5">
						 <div className="title"><i className="fas fa-box-open"></i>Other Skills</div>
							 <Li className="bullet" text="MVC Frameworks" />
							 <Li className="bullet" text="REST API's" />
							 <Li className="bullet" text="Agile Methodoloy" />
							 <Li className="bullet" text="Material Design" />
							 <Li className="bullet" text="Grid And Flex Layouts" />
							 <Li className="bullet" text="Accessibility Standards" />
							 
					 </div>
				 </div>

			 </div>
      )
	}
}
export default Skills
