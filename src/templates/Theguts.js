import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


import Aboutme from '../JSON/About';
import Skills from '../JSON/Skills';
import Projects from '../JSON/Projects';
import Home from '../JSON/Home';
import Contact from '../JSON/Contact';
import Snippets from '../JSON/Snippets';

class Theguts extends Component {

  constructor() {
      super();
      this.state = {

      }
    }


    

    render() {
      var routing = (
        <Router>
          <div>
            <Route path="/projects" component={Projects} />
          </div>
        </Router>
      )
    	return(
    		<div id="the-guts">
          <Router>
            <div>
              <Route path="/projects" component={Projects} />
            </div>
          </Router>
    	    {/* <Home />
          <Aboutme />
        	<Projects />
          <Snippets />
          <Skills />
          <Contact /> */}
        </div>
    	)
    }

 }

 export default Theguts;
