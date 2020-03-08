import React, { Component } from 'react';

import Aboutme from '../JSON/About';
import Skills from '../JSON/Skills';
import Projects from '../JSON/Projects';
import Home from '../JSON/Home';
import Contact from '../JSON/Contact';

class Theguts extends Component {

  constructor() {
      super();
      this.state = {

      }
    }

    render() {
    	return(
    		<div id="the-guts">
    	    <Home />
          <Aboutme />
        	<Projects />
          <Skills />
          <Contact />
        </div>
    	)
    }

 }

 export default Theguts;
