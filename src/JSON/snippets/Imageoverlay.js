import React, { Component } from 'react';
import P from '../../templates/Utils/P';
import Div from '../../templates/Utils/Div';
import Buttonnav from '../../templates/Buttonnav';
import '../../includes/css/prism.css';
import '../../includes/css/projects.css';


import Prism from 'prismjs';



class Imageoverlay extends Component {

	componentDidMount() {
    Prism.highlightAll();
  }


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

    const htmlString='<div id = "parent">\n   Interesting title\n</div>'
    const htmlString2='<div id = "parent">\n  <div id = "child">\n       testing\n    </div>\n</div>'
    const cssString='div#parent {\n   background: url("cool.jpg");\n}';
    const cssString2='div#parent {\n   background: url("cool.jpg");\n} \n div#child {\n    background:rgba(0,0,0,0.5);\n}';
		 return (
          <div className="block c100 box mini box-shadow full-width">
						 <Div class="mobile-space-small desktop-space-large" />
             <P class="title" text="Cover mask on images" />
             <P text="Sometimes you need to put text on a background image only to find that the text doen't pop enough Here is a trick you can do to get around that." />

             <div className="row-wrap">
                <div className="c5 min-height-50">
								<pre>
	  							<code className="language-html">
	  								{htmlString}
	  							</code>
								</pre>

                </div>
                <div className="c5 min-height-50" >
								<pre>
									<code className="language-css">
										{cssString}
									</code>
									</pre>

                </div>

              </div>

              <div className="row-wrap">
                <div id="backgorund" style={bgstyle}>
                  <P className="align-center" text="some sort of text" />
                </div>
              </div>

              <div className="row-wrap">
                  <P text="You can prevent this from happening by add an extra div and using the RGBA function of css to set a background overlay.  The result will dim the background and allow for the text to pop." />
              </div>

              <div className="row-wrap">
                <div className="c5 min-height-50">
								<pre>
	  							<code className="language-html">
                    {htmlString2}
                	</code>
									</pre>
                </div>
                <div className="c5 min-height-50">
								<pre>
									<code className="language-css">
                    {cssString2}
                  </code>
									</pre>
                </div>

              </div>

              <div className="row-wrap">


                  <div id="backgorund" style={bgstyle}>
                    <div id="cover" style={coverstyle}>
                      <P className="align-center" text="some sort of text" />
                    </div>
                  </div>
              </div>

              <Div class="row-wrap" text="Notice that there is no a dark overlay ontop of the image that doesn't affect the text ontop of the image" />
              <Buttonnav />
              <Div className="mobile-space-small desktop-space-large" />
              <Div className="mobile-space-small desktop-space-large" />
            </div>

      )
	}
}

export default Imageoverlay
