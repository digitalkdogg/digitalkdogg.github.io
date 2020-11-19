import React, { Component } from 'react';
import millwood from '../includes/img/millwood_thumb.jpg';
import olympic from '../includes/img/olympic_inspection.png';
import checkbook from '../includes/img/checkbook_scaled.png';
import plex from '../includes/img/plex_admin.png';


class Projects extends Component {



	render(props){

return (
     <div id="projects" className="section hidden">
		<div className="mobile-space-small desktop-space-large"></div>

		<div className="row-wrap">
		
			<div className="c100 block full-width box-shadow">
			
			<div className="flex">
				<div className="half-width flex-half">
					<h3 className="titleh3">Millwood Christian Church</h3>
				</div>
				<div className="half-width flex-half checkout">
					<a href="https://millwoodchurchnwa.com/" target="_blank">
						<button className="checkout green-grandient">
							View This Site
						</button>
					</a>
				</div>
			</div>
			<div className="tags">
				<div className="tag">
					<div className="md-chip-icon">
						<i className="fab fa-php"></i>
					</div>
					PHP 7
				</div>
				<div className="tag">
					<div className="md-chip-icon">
						<i className="far fa-object-group"></i>
					</div>
					UX Design
				</div>
				<div className="tag">
					<div className="md-chip-icon">
						<i className="fab fa-wordpress"></i>
					</div>
					Wordpress
				</div>
				<div className="tag">
					<div className="md-chip-icon">
						<i className="fas fa-stream"></i>
					</div>
					REST API
				</div>
			</div>
			<div className="flex">
				<div className="half-width flex-two">

					<div className="flex">
						<div className="name flex-half"><b>Project Brief : </b></div>
						<div className="value flex-one">A website I desing and maintain for my church. I enjoy giving back to my community</div>
					</div>
					<div className="flex">
						<div className="name flex-half"><b>Features : </b></div>
						<div className="value flex-one">
							<li>Customized Theme</li>
							<li>Dynamic Restful API Feed</li>
							<li>Online Donation Portal</li>
						</div>
					</div>
					
				</div>
				<div className="half-width flex-one">
					<img className="thumb" src={millwood} />
				</div>
				
			</div>
		</div>
		<div className="mobile-space-small desktop-space-large"></div>
		<div className="mobile-space-small desktop-space-large"></div>
		<div className="row-wrap">
		
			<div className="c100 block full-width box-shadow">
				<div className="flex">
					<div className="half-width flex-half">
						<h3 className="titleh3">Olympic Home Inspections</h3>
					</div>
					<div className="half-width flex-half checkout">
						<a href="http://olympicinspection.com" target="_blank">
							<button className="checkout green-grandient">
								View This Site
							</button>
						</a>
					</div>
				</div>
				<div className="tags">
					<div className="tag">
						<div className="md-chip-icon">
							<i className="far fa-object-group"></i>
						</div>
						UX Design
					</div>
					<div className="tag">
					<div className="md-chip-icon">
						<i className="fab fa-wordpress"></i>
					</div>
					Wordpress
				</div>
					<div className="tag">
						<div className="md-chip-icon">
							<i className="fas fa-box"></i>
						</div>
						Material Design
					</div>
				</div>
				<div className="flex">
					<div className="half-width flex-two">

						<div className="flex">
							<div className="name flex-half"><b>Project Brief :</b> </div>
							<div className="value flex-one">I did this project for a small business to help get their business off the ground.  I work directly with the customer and help purchase a domain, reviewed mockups and developed the site in support of their business.</div>
						</div>
						<div className="flex">
							<div className="name flex-half"><b>Features : </b></div>
							<div className="value flex-one">
								<li>Customized Theme</li>
								<li>UX Design </li>
								<li>Custom Contact Form</li>
							</div>
						</div>
						
					</div>
					<div className="half-width flex-one">
						<img className="thumb" src={olympic} />
					</div>
				
				</div>
			</div>
		</div>
		<div className="mobile-space-small desktop-space-large"></div>
		<div className="mobile-space-small desktop-space-large"></div>
		<div className="row-wrap">
		
			<div className="c100 block full-width box-shadow">
				<div className="flex">
					<div className="half-width flex-half">
						<h3 className="titleh3">Checkbook</h3>
					</div>
					
				</div>
				<div className="tags">
					<div className="tag">
						<div className="md-chip-icon">
							<i className="fab fa-php"></i>
						</div>
						PHP 5
					</div>
					<div className="tag">
						<div className="md-chip-icon">
							<i className="fas fa-fire-alt"></i>
						</div>
						Codeigniter
					</div>
					<div className="tag">
					<div className="md-chip-icon">
						<i className="fas fa-stream"></i>
					</div>
					REST API
				</div>
				</div>
				<div className="flex">
					<div className="half-width flex-two">

						<div className="flex">
							<div className="name flex-half"><b>Project Brief : </b></div>
							<div className="value flex-one">This was a personal project that I did in php codeigniter.  I needed a way to keep track of my bills and I wasn't too happy with any of the apps out there so I made my own.</div>
						</div>
						<div className="flex">
							<div className="name flex-half"><b>Features : </b></div>
							<div className="value flex-one">
								<li>Customized Theme</li>
								<li>UX Design </li>
								<li>Custom Contact Form</li>
							</div>
						</div>
					</div>
					<div className="half-width flex-one">
						<img className="thumb" src={checkbook} />
					</div>
				</div>
			</div>
		</div>
		<div className="mobile-space-small desktop-space-large"></div>
		<div className="mobile-space-small desktop-space-large"></div>
		<div className="row-wrap">
		
			<div className="c100 block full-width box-shadow">
				<div className="flex">
					<div className="half-width flex-half">
						<h3 className="titleh3">Plex Movie Manager</h3>
					</div>
					
				</div>
				<div className="tags">
					<div className="tag">
						<div className="md-chip-icon">
							<i className="fab fa-php"></i>
						</div>
						PHP 7
					</div>
					<div className="tag">
						<div className="md-chip-icon">
							<i className="fab fa-laravel"></i>
						</div>
						Laravel
					</div>
					<div className="tag">
						<div className="md-chip-icon">
							<i className="fas fa-expand-alt"></i>
						</div>
						Third party API
					</div>
				</div>
				<div className="flex">
					<div className="half-width flex-two">

						<div className="flex">
							<div className="name flex-half"><b>Project Brief : </b></div>
							<div className="value flex-one">Another personal project that I did.  The goal was to optimize my plex movie library.  I wrote this in laravel and it uses the plex api to tab into my library and allow me to see the details of eash of my movies</div>
						</div>
						<div className="flex">
							<div className="name flex-half"><b>Features :</b> </div>
							<div className="value flex-one">
								<li>Third Party API Integration</li>
								<li>Reporting Dashboard</li>
							</div>
						</div>
					

					</div>
					<div className="half-width flex-one">
						<img className="thumb" src={plex} />
					</div>
				</div>
			</div>
		</div>
	</div>
			
     </div>
      )
	}
}

export default Projects;