import React, { Component } from 'react';
import P from '../../templates/Utils/P';
import Div from '../../templates/Utils/Div';

import SyntaxHighlighter from 'react-syntax-highlighter';


class Growhover extends Component {

  constructor(props) {
    super(props)
    this.state= {
      hover:false
    }
  }

  hoverMe() {
    let hover = document.getElementById('hover-me')
    hover.setAttribute('style', 'transform:scale(1.2); transition:1s transform; width:100%; height:200px; background: green; cursor: pointer;');
  }

  unHoverMe() {
    let hover = document.getElementById('hover-me')
    hover.setAttribute('style', 'transform:scale(1); transition:1s transform; width: 100%; height:200px; background:green; cursor: normal;');
  }

	render(props){
    const hoverstyle=({
        'background': 'green',
        'height': '200px',
        'width': '100%',
        'textalign': 'center',
        'color':'white',
    })

    const htmlString='<div id = "hover-me">\n    Mouse over to see effect\n</div>' ;
    const cssString='div#hover-me:hover {\n   transform:scale(1.5); \n   transition: 2s transform;\n}';
		 return (
     

          <div className="block c100 box mini box-shadow">
              <P class = "title" text = "Scale Hover Effect" />
              <P text = "The grow hover effect is a cool little trick that I see alot of developers not utilizing.  Instead they try to accomplish this with animating the height and width when in reality can be done some much simplier" />

              <P text = "Just set the transform effect to scale(1.5) on the hover sudo element on your hover element.  Next set the transition to transform in order to animate the effect." />

                <div className="row-wrap">
                  <div className="c5 min-height-50">
                    <SyntaxHighlighter language="html" className="html" >
                      {htmlString}
                    </SyntaxHighlighter>
                  </div>
            
                  <div className="c5 min-height-50">
                    <SyntaxHighlighter language="css" className="css" >
                      {cssString}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div className="row-wrap">
                  <div id = "hover-wrap" style = {hoverstyle}>
                    <div id = "hover-me" style = {hoverstyle} className = "align-center"  onMouseEnter={this.hoverMe} onMouseLeave={this.unHoverMe}>
                      Mouse Over to see effect
                    </div>
                  </div>
                </div>

                <div className="row-wrap">
                  <p> Now you can adjust the size of big it grows by anjsting the value in the ().  1 is the initial value is a percentage of that initial value.  IE 1.5 = 150% of the original size <br />
                      <br />Also you can do the same for just the x axis by setting scaleX and the same for the vertical axis by setting scaleY
                  </p>
                 </div>
            </div>

      )
	}
}

export default Growhover