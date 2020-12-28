import React, { Component } from 'react';
import P from '../templates/Utils/P';
import Div from '../templates/Utils/Div';
import Contactblock from '../templates/Contactblock';
import Topskills from '../templates/Utils/Topskills';
import Githubapi from '../templates/Githubapi';

class Home extends Component {

	render(){
		 return (
       <div id="home" className="section show">
          <Div class="desktop-space desktop-space-small" />
           <div className="box-no-animate box-shadow full-width about">
              <P class="tag text-align-center" text="Hello I am Kevin Bollman" />
              <hr />
             
              <P text="Since I began my web design journey over 10 years ago, I have helped many people and organization with their web design needs.
                I enjoy helping people translate their business needs into an attractive usable website that both Google and people can love. 
                My web design philosophy is as follows, keep things simple and accessibile across all devices and your users will come back. "/>

            </div>
            <Div class="mobile-space mobile-space-small" />
            <Div class="desktop-space desktop-space-small" />
            
            <Topskills />
            
            <Div class="mobile-space mobile-space-large" />
            <Div class="desktop-space desktop-space-large" />
            
            <Githubapi />
            
            <Div class="mobile-space mobile-space-large" />
            <Div class="desktop-space desktop-space-large" />
            <Div class="mobile-space mobile-space-small" />
            
            <Contactblock />
            
          </div>
      )
	}
}

export default Home
