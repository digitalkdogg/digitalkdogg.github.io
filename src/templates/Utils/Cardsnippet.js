import React, { Component } from 'react';
import '../../includes/css/snippets.css';

class Snippets extends Component {

	render(){
		 return (
            <div href = {this.props.href} className="card gray-grandient-linear box-shadow border-radius-5">
               <div className="icon-circle box-shadow green-grandient">
               <i class={this.props.iclassname} aria-hidden="true"></i>
               </div>
               <div className="card-content">
                    <div className="card-title">
                         <h2>{this.props.title}</h2>
                    </div>
                    <div className="card-description">
                        {this.props.desc}
                    </div>
                   
               </div>
               <a href={this.props.href}>
                    <button>View Code</button>
               </a>
          </div>
      )
	}
}

export default Snippets