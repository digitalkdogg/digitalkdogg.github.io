import React, { Component } from 'react';
import Div from '../templates/Utils/Div';


import Imageoverlay from './snippets/Imageoverlay';
import Flexlayout from './snippets/Flexlayout';
import Growhover from './snippets/Growhover';


class Snippets extends Component {

	render(props){
		 return (
       <div id="snippets" className="section">
            <Div class="mobile-space-small desktop-space-large" />
            <Imageoverlay />
            <Div class="mobile-space-small desktop-space-large" />
            <Growhover />
            <Div class="mobile-space-small desktop-space-large" />
            <Flexlayout />
            <Div class="mobile-space-large desktop-space-large" />
       </div>
      )
	}
}

export default Snippets