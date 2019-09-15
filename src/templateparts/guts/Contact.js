import React, { Component } from 'react';

import P from '../utils/P';

class Contact extends Component {

  constructor() {
      super();
      this.state = {}
 }


  render(props){ 
    return (
      <div id="contact-wrapper" className="item">
          <P text="Github pages is great because it lets you have a static website for free.  Unfortunately it doesn't let 
          you do server side stuff, like email too easily.  I haven't got a chance to hook it up to any kind of api so right now you will have to email me.  Relax!  I have made it
          easy for you.  Just click the button below and it will start your email client.  I look forward to hearing from you." />
         <div id="btn-wrapper">
           <a href="mailto:KevinBollman@gmail.com?Subject=Kevin Bollman Website Contact"><button>Email Me!</button></a>
         </div>
      </div>
    )
  }
}

export default Contact;