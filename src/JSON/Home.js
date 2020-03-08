import React, { Component } from 'react';
import P from '../templates/Utils/P';
import Div from '../templates/Utils/Div';
import Contactblock from '../templates/Contactblock';

import Bottom from '../templates/Bottom';

class Home extends Component {

	render(props){
		 return (
       <div id="home" className="section show">

            <div className="box box-shadow">
              <P class="tag" text="Hello I am Kevin Bollman" />
              <hr />
              <P class="sub" text="I build cool things and make them work" />

              <P text="Since I began my web design journey over 10 years, I have help many people / organization with their web design needs.
                I enjoy helping people with connect with their technology.  I am innovative, forward thinking and I am passionate about the
                work I do.  I challenge my self to learn new technologies to advance my skills and provide value to what ever team I am on." />

            </div>
            <Div class="mobile-space mobile-space-large" />
            <Div class="desktop-space desktop-space-small" />
            <Contactblock />
             <Bottom nextsection="about" />
          </div>
      )
	}
}

export default Home
