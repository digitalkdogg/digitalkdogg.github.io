import React, { Component } from 'react';


class Buttonnav extends Component {

    scrollTop = () => {
        window.scrollTo(0, 0);
     }

	render(){
        
        let href = null;
      
        if (this.props.href) {
           href=<a href={this.props.href} onClick={this.scrollTop.bind(this)}>
                         <button className="green-grandient">Next Snippet</button>
                    </a>     
        } 
		return (
			<div id="button-nav" >
                <div className="mobile-space-small desktop-space-small" />
                <a href="/#/snippets" onClick={this.scrollTop.bind(this)} >
                    <button className="green-grandient">Go Back</button>
                </a>
               {href}	

               <div className="mobile-space-small desktop-space-large" />
               <div className="mobile-space-small desktop-space-large" />
               
			</div>


		)
	}
}//end class

export default Buttonnav;