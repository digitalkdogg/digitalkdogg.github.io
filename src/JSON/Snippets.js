import React, { Component } from 'react';
import Div from '../templates/Utils/Div';


import Imageoverlay from './snippets/Imageoverlay';
import Flexlayout from './snippets/Flexlayout';
import Growhover from './snippets/Growhover';


class Snippets extends Component {

	render(props){
		 return (
       <div id="snippets" className="section hidden">
            <Div class="mobile-space-small desktop-space-large" />
            <Imageoverlay />
            <Growhover />
            <Flexlayout />
            <Div class="mobile-space-large desktop-space-large" />
       </div>
      )
	}
}

export default Snippets