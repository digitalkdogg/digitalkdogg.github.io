import React, { Component } from 'react';

class Aproject extends Component {

	render(){

        let href = null;
      
        if (this.props.href) {
           href=<a href={this.props.href} target="_blank">
                    <button className="checkout green-grandient">
                        View This Site
                    </button>
                </a>   
        } 

		return (
        <div className="row-wrap row">  
            <div className="c100 block full-width box-shadow">   
                <div className="flex checkout-row">
                    <div className="half-width flex-half">
                        <h3 className="titleh3">{this.props.title}</h3>
                    </div>
                    <div className="half-width flex-half checkout">
                        {href}
                    </div>
                </div>


                <div className="tags">
                   {this.props.tags.map(tag =>
                    <div className="tag" key={tag.name}>
                        <div className="md-chip-icon">
                            <i className={tag.value}></i> 
                        </div>    
                        {tag.name}
                    </div>
                    )
                   }
                </div>
                <div className="flex">
                    <div className="half-width flex-two">

                        <div className="flex">
                            <div className="name flex-half"><b>Project Brief : </b></div>
                            <div className="value flex-one">{this.props.desc}</div>
                        </div>
                        <div className="flex">
                            <div className="name flex-half"><b>Features : </b></div>
                            <div className="value flex-one">
                              {this.props.projects.map(project =>
                                <li key={project.name}>{project.name}</li>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="half-width flex-one">
                        <img alt={this.props.imgalt} className="thumb" src={this.props.imgsrc} />
                    </div>
                </div>
            </div>
        </div>
		)
	}
}//end class

export default Aproject;