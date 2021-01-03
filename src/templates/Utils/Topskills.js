import React, { Component } from 'react';
import '../../includes/css/topskills.css';

class Topskills extends Component {

    componentDidMount() {
        let topskills = document.getElementById('top-skills');
        let topskillswrap = document.getElementById('top-skills-wrap');

        topskillswrap.setAttribute('Style', 'height:'+parseInt(topskills.offsetHeight+15,10) +'px;');
      }

	render(props){
        return (
        <div id="top-skills" className="full-width">
            <h3>Some of my specialities</h3>
            <hr />
            <div id="top-skills-wrap" className="flex max-width-1200">
                <div className="icon-wrap">
                    <div class = "row one">
                        <i className="fas fa-terminal" aria-hidden="true"></i>
                        <i className="fas fa-keyboard" aria-hidden="true"></i>
                        <i className="fab fa-css3" aria-hidden="true"></i>
                        <i className="fas fa-laptop-code" aria-hidden="true"></i>
                        <i className="fab fa-js" aria-hidden="true"></i>
                        <i className="fas fa-coffee" aria-hidden="true"></i>
                        <i className="fab fa-jsfiddle" aria-hidden="true"></i>
                    </div>
                    <div class = "row two">
                        <i className="fas fa-server" aria-hidden="true"></i>
                        <i className="fab fa-connectdevelop" aria-hidden="true"></i>
                        <i className="fas fa-database" aria-hidden="true"></i>
                        <i className="fas fa-table" aria-hidden="true"></i>
                        <i className="fas fa-hourglass-start" aria-hidden="true"></i>
                        <i className="fas fa-ruler-combined" aria-hidden="true"></i>
                    </div>
                    <div class = "row three">
                        <i className="fas fa-globe-americas" aria-hidden="true"></i>
                        <i className="fab fa-react" aria-hidden="true"></i>
                        <i className="fab fa-wordpress" aria-hidden="true"></i>
                        <i className="fab fa-angular" aria-hidden="true"></i>
                    </div>
                    <div class = "row four">
                        <i className="fab fa-dev" aria-hidden="true"></i>
                        <i className="fab fa-node" aria-hidden="true"></i>
                        <i className="fab fa-chrome" aria-hidden="true"></i>
                    </div>
      
                </div>
                <div className="details-wrap">
                    <li>Build complete websites from desgin to code to production</li>
                    <li>Material design UX Expert</li>
                    <li>A believer in flex css layouts</li>
                    <li>WCAG accessibilty compliant</li>
                    <li>Full Stack Server Administration</li>
                    <li>Experties in multiple content management platforms</li>
                </div>
            </div>
        </div>
     )
   }
}

export default Topskills