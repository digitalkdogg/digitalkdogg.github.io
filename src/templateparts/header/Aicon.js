import React from 'react';

 class Aicon extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render(props) {
      return(
         <div className={this.props.valign}>
            <i className={this.props.className} aria-hidden="true"></i>
          </div>
      )
    }

  }

export default Aicon