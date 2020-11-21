import React, { Component } from 'react';
import { HashRouter, Route, BrowserRouter as Router } from 'react-router-dom'


import Home from '../JSON/Home';
import Projects from '../JSON/Projects';
import Contact from '../JSON/Contact';
import Snippets from '../JSON/Snippets'
import Aboutme from '../JSON/About';
import Skills from '../JSON/Skills';

class Guts extends Component {
    render() {
      return(
        <div id="guts-section">

        <HashRouter>
            <div id="the-guts">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Aboutme} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/snippets" component={Snippets} />
              <Route path="/contact" component={Contact} />
            </div>
          </HashRouter>

        </div>
      )
  }
}

export default Guts;
