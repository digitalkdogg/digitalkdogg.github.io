import React from 'react';
import ReactDOM from 'react-dom';

import Body from './templates/Body';


import './includes/css/kevinbollman.css';
import './includes/font-awesome/css/all.css';


var e = React.createElement;
ReactDOM.render(
    e('div', null, <Body /> ),
    document.getElementById('root')
);
