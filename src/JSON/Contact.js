import React, { Component } from 'react';
import P from '../templates/Utils/P';
import Div from '../templates/Utils/Div';
import Contactblock from '../templates/Contactblock';

class Contact extends Component {

	render(){
		 return (
       <div id="contact" className="section">
           <div className="block c100 box mini box-shadow full-width">
             <P text="Do you think I can help you add value to your next project?" />
           </div>
    

         <Div class="mobile-space mobile-space-large" />
         <Div class="desktop-space desktop-space-normal" />
         <Div class="mobile-space mobile-space-large" />
         <Div class="desktop-space desktop-space-normal" />
         <Div class="desktop-space desktop-space-normal" />
         <Contactblock />

        
       </div>
      )
	}
}

export default Contact
