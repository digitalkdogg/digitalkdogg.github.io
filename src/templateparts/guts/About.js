import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import P from '../utils/P';

class About extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
		 return (
           <div class = "item">
           		<P  text = "I am a full stack web designer / developer.  I design websites both professionally and on the side.  
           		My biggest thrill is when I can empower customer to manage their own technology.  Why give someone a fish everyday
            when you can give them a fishing pole, and they are set for the rest of their life.  I enjoy connecting people
            with technology and in my spare time i am often coding or learning a new language or development stack to code in." />

             <P text = "People say that my biggest strength is my passion for a happy customer. While I do find that I am very 
           passionate about my work, I tend to think that my best strength is my ingenuity. My career has led me down many different
            path and have given me the opportunity to leverage many different technologies. In doing, so I have come to learn my 
            skill set to best fit the project I am working on. Take this website for example, why buy a domain when you can set up 
            a static website using reacts and GitHub pages to host your work." />

            <P text = "Currently I am working for walmart as the Tech Lead - Intranet Admin.  I am proud of the fact that I get to
             empower my teammates to run a great intranet system for 1.4 million assoicates." />
           </div>
      )
	}
}

export default About