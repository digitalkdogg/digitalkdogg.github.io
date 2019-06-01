import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter'

import Body from './templates/Body';
import '../public/includes/css/style.css';

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Body />
   </BrowserRouter>
 ), document.getElementById('root'));