import React, { Component } from 'react';

class Askill extends Component {

  constructor() {
      super();
      this.state = {}
 }


  render(props){ 
    return (
       <div className="skill">
          {this.props.text}
        </div>
    )
  }
}

export default Askill;