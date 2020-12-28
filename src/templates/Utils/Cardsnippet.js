import React, { Component } from 'react';
import '../../includes/css/snippets.css';

class Snippets extends Component {

     constructor() {
          super();
          this.state = {
              'btnClass': 'green-grandient'
         }
     }

     gotohref = (e) => {
          e.preventDefault(); 
          this.setState({'btnClass': 'active'});
          let href = this.props.href;
          setTimeout(function () {
               window.location = href
          }, 1000)
     }


	render(){
		 return (
            <div href={this.props.href} className="card gray-grandient-linear box-shadow border-radius-5">
               <div className="icon-circle box-shadow green-grandient">
               <i className={this.props.iclassname} aria-hidden="true"></i>
               </div>
               <div className="card-content">
                    <div className="card-title">
                         <h2>{this.props.title}</h2>
                    </div>
                    <div className="card-description">
                        {this.props.desc}
                    </div>
                   
               </div>
               <a href={this.props.href} >
                    <button className={this.state.btnClass} onClick={this.gotohref.bind(this)} >View Code</button>
               </a>
          </div>
      )
	}
}

export default Snippets