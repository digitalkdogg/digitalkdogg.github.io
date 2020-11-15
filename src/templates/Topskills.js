import React, { Component } from 'react';

class Topskills extends Component {
	render(props){
        return (
        <div id="top-skills" className="full-width">
            <h3>Look what I can do</h3>
            <hr />
            <div class = "flex">
                <div className="icon-wrap">
                    <i class="fas fa-terminal"></i>
                    <i class="fas fa-keyboard"></i>
                    <i class="fab fa-css3"></i>
                    <i class="fas fa-laptop-code"></i>
                    <i class="fab fa-node"></i>
                    <i class="fas fa-coffee"></i>
                    <i class="fab fa-connectdevelop"></i>
                    <br />
                    <i class="fas fa-server"></i>
                    <i class="fab fa-jsfiddle"></i>
                    <i class="fas fa-database"></i>
                    <i class="fas fa-table"></i>
                    <i class="fas fa-hourglass-start"></i>
                    <i class="fas fa-ruler-combined"></i>
                    <br />
                    <i class="fas fa-globe-americas"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-wordpress"></i>
                    <i class="fab fa-angular"></i>
                    <br />
                    <i class="fab fa-dev"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-chrome"></i>

                </div>
                <div className="details-wrap">
                    <li>Design complete website from begining to end</li>
                    <li>Material design UX specialist</li>
                    <li>WCAG accessibilty compliant</li>
                    <li>Mobile first responsive design princibles</li>
                    <li>Experties in multiple content management platforms</li>
                </div>
            </div>
        </div>
     )
   }
}

export default Topskills