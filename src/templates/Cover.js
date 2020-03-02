import React, { Component } from 'react';

class Cover extends Component {

  constructor() {
      super();
      this.state = {
    
      }
    }

    render() {
      return(
        <div id = "cover">
          <div className = "box">
            <p className="tag"> Hello I am Kevin Bollman</p>
             <hr />
            <p className = "sub">I build cool things and I love what I do</p>

            <p>Since I began my web design journey over 10 years, I have help many people / organization with their web design needs.  
            I enjoy helping people with connect with their technology.  I am innovative, forward thinking and I am passionate about the
            work I do.  I challenge my self to learn new technologies to advance my skills and provide value to what ever team I am on.
            </p>
          </div>
        </div>
      )
  }
}

export default Cover;
