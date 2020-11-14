import React, { Component } from 'react';
import P from '../templates/Utils/P';


class About extends Component {

	render(props){
		 return (
			<div id="about" className="section hidden" >
             <div className="mobile-space-normal"></div>
    			<div className="block c100 box box-shadow">
    				<P text="I am a full stack web designer / developer.  I design websites both professionally and on the side.  My biggest thrill is when I can empower customer to manage their own technology.  Why give someone a fish everyday when you can give them a fishing pole, and they are set for the rest of their life.  I enjoy connecting people with technology and in my spare time you will often find me coding or learning a new development stack just for fun." />
          	</div>
			  <div className="mobile-space-normal"></div>
				  <div className="block c100 box box-shadow">
    				
    			  	<P text="While I do enjoy connecting people with technology, I  think that my best strength is my ingenuity. My career has led me down many different paths and have given me the opportunity to leverage many different skill sets. In doing, so I have come to learn to leveage my skill set to best fit the project I am working on. Take this website for example.  I started this project as a way for me to learn react js and I have now turn into a full portfolio site." />
            		
          		</div>
				  <div className="mobile-space-normal"></div>
				  <div className="block c100 box box-shadow">
            		<P text="Currently I am working for Walmart as the Tech Lead for the team that manages the US Intranet .  I am proud of the fact that I get to empower my teammates to manage a great intranet system, I am even prouder of the solutions that I have developed here in my 7 year career at Walmart." />
          			</div>
					  <div className="mobile-space-normal desktop-space-large"></div>
	         </div>
      )
	}
}
export default About
