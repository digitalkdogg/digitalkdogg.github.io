import React, { Component } from 'react';
import '../includes/css/topskills.css';

class Topskills extends Component {

    componentDidMount() {
        let topskills = document.getElementById('top-skills');
        let topskillswrap = document.getElementById('top-skills-wrap');

        topskillswrap.setAttribute('Style', 'height:'+topskills.offsetHeight+'px;');
      }

	render(props){
        return (
        <div id="top-skills" className="full-width">
            <h3>Look what I can do</h3>
            <hr />
            <div id="top-skills-wrap" className="flex max-width-1200">
                <div className="icon-wrap">
                    <i className="fas fa-terminal mobile-hidden" aria-hidden="true"></i>
                    <i className="fas fa-keyboard mobile-hidden" aria-hidden="true"></i>
                    <i className="fab fa-css3" aria-hidden="true"></i>
                    <i className="fas fa-laptop-code" aria-hidden="true"></i>
                    <i className="fab fa-node" aria-hidden="true"></i>
                    <i className="fas fa-coffee mobile-hidden" aria-hidden="true"></i>
                    <i className="fab fa-connectdevelop mobile-hidden" aria-hidden="true"></i>
                    <br />
                    <i className="fas fa-server" aria-hidden="true"></i>
                    <i className="fab fa-jsfiddle mobile-hidden" aria-hidden="true"></i>
                    <i className="fas fa-database" aria-hidden="true"></i>
                    <i className="fas fa-table mobile-hidden" aria-hidden="true"></i>
                    <i className="fas fa-hourglass-start mobile-hidden" aria-hidden="true"></i>
                    <i className="fas fa-ruler-combined" aria-hidden="true"></i>
                    <br />
                    <i className="fas fa-globe-americas mobile-hidden" aria-hidden="true"></i>
                    <i className="fab fa-react" aria-hidden="true"></i>
                    <i className="fab fa-wordpress" aria-hidden="true"></i>
                    <i className="fab fa-angular" aria-hidden="true"></i>
                    <br />
                    <i className="fab fa-dev" aria-hidden="true"></i>
                    <i className="fab fa-js" aria-hidden="true"></i>
                    <i className="fab fa-chrome" aria-hidden="true"></i>
                
      
                </div>
                <div className="details-wrap">
                    <li>Design complete website from desgin to code</li>
                    <li>Material design UX specialist</li>
                    <li>WCAG accessibilty compliant</li>
                    <li>Full Stack Capabilities</li>
                    <li>Experties in multiple content management platforms</li>
                </div>
            </div>
        </div>
     )
   }
}

export default Topskills