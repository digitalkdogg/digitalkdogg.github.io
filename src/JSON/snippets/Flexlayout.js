import React, { Component } from 'react';
import P from '../../templates/Utils/P';
import Div from '../../templates/Utils/Div';
import Bottom from '../../templates/Bottom';

import SyntaxHighlighter from 'react-syntax-highlighter';


class Flexlayout extends Component {

	render(props){
    const bgstyle={
      'background': 'url(https://placeimg.com/1840/280/any)',
      'backgroundRepeat': 'no-repeat',
      'height':'200px',
      'width' : '100%',
      'color':'white',
      'maxwidth': '800px'
    }

    const coverstyle={
    'background':'rgba(0,0,0,0.5)',
    'height': '200px',
    'marginTop' : '-20px',
    'color': 'white'
    }

    const htmlString='<div id = "parent">\n   <div class = "child">child1</div>\n   <div class = "child">child2</div>\n   <div class = "child">child3</div>\n</div>' 
    const htmlString2='<div id = "parent">\n  <div id = "child">\n       testing\n    </div>\n</div>'
    const cssString='div#parent {\n   display:flex; flex-direction: column;\n}';
    const cssString2='div#parent {\n   background: url("cool.jpg");\n} \n div#child {\n    background:rgba(0,0,0,0.5);\n}';
		 return (
     

          <div className="block c100 box mini box-shadow">
              <P class = "title" text = "Flex Box Layout" />
              <P text = "Flex Box Layout can be an important tool in your web design arsonel but if you are not familar with it than it could tricky getting it to work right.  Here is how you can make it work." />

              <P text = "First we need to set the flex direction on the parent element" />

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
            </div>

      )
	}
}

export default Flexlayout