import React, { Component } from 'react';
import P from '../../templates/Utils/P';
import Div from '../../templates/Utils/Div';
import Buttonnav from '../../templates/Buttonnav';

import '../../includes/css/prism.css';
import '../../includes/css/projects.css';

import Prism from 'prismjs';

class Flexlayout extends Component {

	render(props){

    const simplestyle={
      'display':'flex',
      'flexDirection': 'row',
      'background': '#eee',
      'width':'100%',
      'lineHeight': 2,
    }

    const columnStyle={
      'display':'flex',
      'flexDirection': 'column',
      'background': '#eee',
      'width':'20%',
      'lineHeight': 2,
      'margin': '0 5%'
    }

    const grow1={
      'flexGrow' : '1',
      'textAlign': 'center'
    }

    const grow2={
      'flexGrow' : '3',
      'borderLeft': '1px solid black',
      'borderRight': '1px solid black',
      'textAlign': 'center'
    }

    const borderStyleVert= {
      'borderBottom': '1px solid black'

    }

    const borderstyle={
      'borderLeft': '1px solid black',
      'borderRight': '1px solid black',
       'padding' : '0 10px',
       'margin' : '0 20px'
    }

    const htmlString='<div id = "parent">\n   <div class = "child">child1</div>\n   <div class = "child">child2</div>\n   <div class = "child">child3</div>\n</div>'
    const htmlString2='<div id = "parent">\n   <div class = "child one">child1</div>\n   <div class = "child two">child2</div>\n   <div class = "child three">child3</div>\n</div>'
    const cssString='div#parent {\n   display:flex; flex-direction: row;\n}';
    const cssString2='div#parent {\n   display:flex;\n   flex-direction: row;\n} \ndiv.child.two {flex: 2;}';
	  const columnString='<div id = "parent"\n  <div class = "child one">Child 1</div>\n  <div class = "child two">Child 2</div>\n  <div class = "child tow">Child 3</div>\n</div>'
     const columnCssString='div#parent {\n   display:flex; flex-direction: column;\n}'

     return (


          <div className="block c100 box mini box-shadow full-width">
              <Div class="mobile-space-small desktop-space-large" />

              <P class="title" text="Flex Box Layout" />
              <P text="Flex Box Layout can be an important tool in your web design arsonel but if you are not familar with it than it could tricky getting it to work right.  Here is how you can make it work." />

              <P text="First we need to set display: flex and the flex direction on the parent element" />

                <div className="row-wrap">
                  <div className="c5 min-height-50">
									<pre>
										<code className="language-html">
                      {htmlString}
                		</code>
									</pre>
                  </div>

                  <div className="c5 min-height-50">
									<pre>
										<code className="language-html">
                      {cssString}
                  	</code>
										</pre>
                  </div>
                </div>

                <div className="row-wrap">
                  <div id="parent" style={simplestyle}>
                    <div className="child">child1</div>
                    <div className="child" style={borderstyle}>child2</div>
                    <div className="child">child3</div>
                  </div>
                </div>

                 <P text="Now you can set the size of child or the columns.  By default all of your childern will be evenly sized.  You can override this by using the flexGrow property to set how much you want a column to grow." />



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
										<code className="language-html">
                      {cssString2}
                  	</code>
										</pre>
                  </div>
                </div>

                 <div className="row-wrap">
                  <div id="parent" style={simplestyle}>
                    <div className="child" style={grow1}>flex-grow : 1</div>
                    <div className="child" style={grow2}>flex-grow : 2</div>
                    <div className="child" style={grow1}>flex-grow : 1</div>
                  </div>
                </div>


                 <P text="You can use the same concept to do a vertical layout by setting the flex-direction property to column instead of row" />

                 <div className="row-wrap">
                  <div className="c5 min-height-50">
									<pre>
										<code className="language-html">
                      {columnString}
                		</code>
										</pre>
                  </div>

                  <div className="c5 min-height-50">
									<pre>
										<code className="language-html">
                      {columnCssString}
                  	</code>
										</pre>
                  </div>
                </div>

                  <div className="row-wrap">
                  <div id="parent" style={columnStyle}>
                    <div className="child" style={borderStyleVert}>Row 1</div>
                    <div className="child" style={borderStyleVert}>Row 2</div>
                    <div className="child"> Row  3</div>
                  </div>
                </div>
                <Buttonnav href="/#/snippets/grow-hover" />
                <Div className="mobile-space-small desktop-space-large" />
                <Div className="mobile-space-small desktop-space-large" />
            </div>

      )
	}
}

export default Flexlayout
