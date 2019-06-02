import React from 'react';
import ReactDOM from 'react-dom';


import Body from './templates/Body';
import '../public/includes/css/style.css';

var e = React.createElement;
ReactDOM.render(
    e('div', null, <Body /> ),
    document.getElementById('root')
);