import React, { Component } from 'react';
import P from '../templates/Utils/P';
import Div from '../templates/Utils/Div';
import Contactblock from '../templates/Contactblock';

class Contact extends Component {

	constructor() {
      super();
 }

	render(props){
		 return (
       <div id="contact" className="section hidden">

         <div className="row-wrap">
           <div className="block c100 box mini box-shadow">
             <P text = "Do you think I can help you add value to your next project?" />
           </div>
         </div>

         <Div class="mobile-space mobile-space-large" />
         <Div class="desktop-space desktop-space-normal" />
         <Contactblock />
       </div>
      )
	}
}

export default Contact
