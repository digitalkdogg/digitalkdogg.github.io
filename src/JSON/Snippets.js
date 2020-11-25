import React, { Component } from 'react';
import '../includes/css/snippets.css';
import Cardsnippet from '../templates/Utils/Cardsnippet';

class Snippets extends Component {

	render(){
		 return (
       <div id="snippets" className="section flex">
          <Cardsnippet 
               href="/#/snippets/flex" 
               iclassname="fab fa-buromobelexperte" 
               title="Flex Layout 101" 
               desc="The basics of how to switch from a grid layout to 
               a flex box layout."
          />

          <Cardsnippet 
               href="/#/snippets/grow-hover" 
               iclassname="fas fa-expand-arrows-alt" 
               title="Scale Hover Effect" 
               desc=" Learn how to use the transform property to scale an element.  No more having to chage both the height and width. "
          />

          <Cardsnippet 
               href="/#/snippets/image-overlay" 
               iclassname="fas fa-braille" 
               title="Image Overlay Accessibility" 
               desc="Overlaying text ontop of an image can be tricky.  Here is a tick to keep your text accessibily compliant."
          />
          
       </div>
      )
	}
}

export default Snippets