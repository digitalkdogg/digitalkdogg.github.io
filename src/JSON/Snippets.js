import React, { Component } from 'react';
import Div from '../templates/Utils/Div';
import Bottom from '../templates/Bottom';


import Imageoverlay from '../JSON/Imageoverlay';


class Snippets extends Component {

	render(props){
		 return (
       <div id="snippets" className="section hidden">
            <Div class="mobile-space-small desktop-space-large" />
            <Imageoverlay />
            <Div class="mobile-space-large desktop-space-large" />
       </div>
      )
	}
}

export default Snippets