import React, { Component } from 'react';
import Li from './Utils/Li';
import A from './Utils/A';

class Ninebox extends Component {

    constructor() {
        super();
        this.state = {
            'showclass': 'hide',
            'activesection': 'home'
       }
      }

    componentDidMount() {
        let section = window.location.pathname.replace('/#/','')
        this.setState({'activesection': section});

        if (window.location.pathname === '/#/') {
            this.setState({'activesection': 'home'})
        }
     
      
    }

    showhidemenu () {
        let body = document.querySelector('body');
 		if (this.state.showclass === 'hide') {
 			this.setState({'showclass': 'show'});
            body.classList.add('overflowhidden');

            if (window.innerHeight<300) {
                body.classList.add('small-menu');
            }
      
 		} else {
 			this.setState({'showclass': 'hide'})
		    body.classList.remove('overflowhidden');
 		}
     }
     
    gotosection (section) {
        let body = document.querySelector('body');
        body.classList.remove('overflowhidden');

        this.setState({
           'showclass': 'hide',
        })
     }


    render() {
    	return(
    		<div id="nine-box-section" className={this.state.showclass}>
				<i className="fas fa-th-large" onClick={this.showhidemenu.bind(this)}></i>
                <div id="menu-section" className={this.state.showclass}
                    role="navigation" aria-label="main">		
                    <br />
                    <A text={<Li onclick={this.gotosection.bind(this, 'home')}
                        text="Home" class={this.state.activesection==='home' ? 'active': ''} />} href="/#/" />
                    <A text={<Li onclick={this.gotosection.bind(this, 'about')}
                        text="About Me" class={this.state.activesection==='about' ? 'active': ''} />} href="/#/about"  />
                    <A text={<Li onclick={this.gotosection.bind(this, 'projects')}
                        text="Projects" class={this.state.activesection==='projects' ? 'active': ''} />} href="/#/projects"  />
                    <A text={<Li onclick={this.gotosection.bind(this, 'snippets')}
                        text="Snippets" class={this.state.activesection==='snippets' ? 'active': ''} />} href="/#/snippets"  />
                    <A text={<Li onclick={this.gotosection.bind(this, 'skills')}
                        text="Skills" class={this.state.activesection==='skills' ? 'active': ''} />} href="/#/skills"  />
                    <A text={<Li onclick={this.gotosection.bind(this, 'contact')}
                        text="Contact" class={this.state.activesection==='contact' ? 'active': ''} />} href="/#/contact" />
                            
                </div>
            </div>
    	)
    }
}

export default Ninebox;   