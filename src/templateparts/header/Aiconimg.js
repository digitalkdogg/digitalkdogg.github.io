import React, { Component } from 'react';  

class Aiconimg extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render(props) {
    return(
       <div className={this.props.valign}>
          <img src = {this.props.src} height= {this.props.height} width = {this.props.width} />
        </div>
    )
  }

}

export default Aiconimg