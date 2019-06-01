import React, { Component } from 'react';

class Aproject extends Component {

	constructor() {
      super();
      this.state = { }
 }


	render(props){
		 return (
        <div className="project">
          <div className="title">
            {this.props.project.title}
          </div>
          <div className="desc">
            {this.props.project.desc}
          </div>
          <div className="btn-container">
            <a href={this.props.project.href} target="_blank">
              <button>View More</button>
            </a>
          </div>
        </div>
      )
	}
}

export default Aproject