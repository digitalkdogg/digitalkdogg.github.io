import React, { Component } from 'react';
import P from '../templates/Utils/P';
import '../includes/css/about.css';


class About extends Component {

	render(props){
		 return (
			<div id="about" className="section" >
			 <div className="mobile-space-normal"></div>
             <div className="mobile-space-normal"></div>
			 <div className="block c100 box box-shadow full-width about">
				<div class = "icon-wraper">
				<i class="far fa-id-card"></i>
				</div>
				<div class = "dets-wraper">
					<p>My name is Kevin Bollman a full stack developer located in North West Arkansas.  Curenlty I
						work on the worlds largest retail intranet developing components for our content management system.  
						On the side I enjoy building websites for individuals and other small businesses.  Please checkout my 
						projects page for more on that.  In my spare time I like to learn new technologies and design principles
						that help me to expand my mind.
					</p>
				</div>
			</div>
			<div className="mobile-space-normal"></div>
			<div className="mobile-space-normal"></div>
			<div className="mobile-space-small"></div>
			<div className="block c100 box box-shadow full-width about reverse">
				<div class = "icon-wraper">
				<i class="fas fa-crop"></i>
				</div>
				<div class = "dets-wraper">
					<h2>Favorite Design Principles</h2>
					<p>Learning new design principles can be fun but I do like to keep things simple.  I believe that you 
						can still build great aesthetically pleasing websites while keep your code simple and clean.  Not only does
						this allow for you to maintain your code easier but also makes it easy to interate and enhance your code 
						in the future.  Some of my favorite principles
						<ul>
							<li>Flex Box CSS Layouts</li>
							<li>Mobile First Adaptive Design</li>
							<li>Visual Hierarchy</li>
							<li>Occam's Razor</li>
							<li>Law Of Consistency</li>

						</ul>
					</p>
				</div>
				
			</div>
			<div className="mobile-space-normal"></div>
			<div className="mobile-space-normal"></div>
			<div className="mobile-space-small"></div>
			<div className="block c100 box box-shadow full-width about">
				<div class = "icon-wraper">
				<i class="fas fa-code"></i>
				</div>
				<div class = "dets-wraper">
					<h2>Favorite Code Frameworks</h2>
					<p>I really enjoy learning new skills.  One of the best ways I found to do this is by 
						explorer new frameworks.  I think it is remarkable how far some of these frameworks 
						have push the coding community over the years.
						<ul>
							<li>React</li>
							<li>Laravel PHP</li>
							<li>jQuery</li>
							<li>Angular</li>
							<li>Foundation</li>

						</ul>
					</p>
				</div>
				
			</div>


    	
	         </div>
      )
	}
}
export default About
