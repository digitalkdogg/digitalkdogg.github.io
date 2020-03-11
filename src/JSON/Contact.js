import React, { Component } from 'react';
import P from '../templates/Utils/P';
import Div from '../templates/Utils/Div';
import Contactblock from '../templates/Contactblock';
import Bottom from '../templates/Bottom';

class Contact extends Component {

	render(props){
		 return (
       <div id="contact" className="section hidden">


           <div className="block c100 box mini box-shadow">
             <P text="Do you think I can help you add value to your next project?" />
           </div>
    

         <Div class="mobile-space mobile-space-large" />
         <Div class="desktop-space desktop-space-normal" />
         <Contactblock />

         <Bottom/>
       </div>
      )
	}
}

export default Contact
