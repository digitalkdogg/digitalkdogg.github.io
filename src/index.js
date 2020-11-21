import React from 'react';
import ReactDOM from 'react-dom';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import Projects from './JSON/Projects.js'


import Body from './templates/Body';


import './includes/css/kevinbollman.css';
import './includes/font-awesome/css/all.css';

//const routing = (
//    <Router>
//      <div>
//        <Body />
//        <Route path="/projects" component={Projects} />
//      </div>
//    </Router>
//  )
  

//  ReactDOM.render(routing, document.getElementById('root'))

var e = React.createElement;
ReactDOM.render(
    e('div', null, <Body /> ),
    document.getElementById('root')
);
