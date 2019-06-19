import React, { Component } from 'react';

import Aicon from './Aicon';
import Aiconimg from './Aiconimg';

class Icons extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){ 
         return(
        	<div id="icon-container">
        		<Aicon className="fa fa-git-square" valign="top" />
          		<Aiconimg src="https://digitalkdogg.github.io/src/includes/img/react_icon.png" height="48px" width="48px" valign="bottom" />
          		<Aicon className="fa fa-html5" valign="top" />
          		<Aiconimg src="https://digitalkdogg.github.io/src/includes/img/nodejs_icon.png" height="36px" width="36px" valign="bottom" />
          		<Aicon className="fa fa-code" valign="top" />
          		<Aiconimg src="https://digitalkdogg.github.io/src/includes/img/php_icon.png" height="48px" width="48px" valign="bottom" />
          		<Aicon className="fa fa-jsfiddle" valign="top" />
        	</div>
      	)
	}
}

export default Icons