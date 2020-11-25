import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'


import Home from '../JSON/Home';
import Projects from '../JSON/Projects';
import Contact from '../JSON/Contact';
import Snippets from '../JSON/Snippets'
import Aboutme from '../JSON/About';
import Skills from '../JSON/Skills';
import Imageoverlay from '../JSON/snippets/Imageoverlay.js';
import Growhover from '../JSON/snippets/Growhover.js';
import Flex from '../JSON/snippets/Flexlayout.js';

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
              <Route exact path="/snippets" component={Snippets} />
              <Route path="/contact" component={Contact} />
             
              <Route exact path ="/snippets/grow-hover" component={Growhover} />
              <Route exact path ="/snippets/image-overlay" component={Imageoverlay} />
              <Route exact path ="/snippets/flex" component={Flex} />
            </div>
          </HashRouter>

        </div>
      )
  }
}

export default Guts;
