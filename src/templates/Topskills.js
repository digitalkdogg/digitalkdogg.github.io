import React, { Component } from 'react';

class Topskills extends Component {

    componentDidMount() {
     
      }

    componentDidMount() {

        window.addEventListener('resize', this.handleResize.bind(this));
        this.setHeight();
      
      }

      setHeight() {
        let topskills = document.getElementById('top-skills');
        let topskillswrap = document.getElementById('top-skills-wrap');

        let height = topskills.offsetHeight;
        topskillswrap.setAttribute('Style', 'height:'+topskills.offsetHeight+'px;');
      }

      handleResize() {
      //  this.setHeight();
      }

	render(props){
        return (
        <div id="top-skills" className="full-width">
            <h3>Look what I can do</h3>
            <hr />
            <div id = "top-skills-wrap" className = "flex max-width-1200">
                <div className="icon-wrap">
                    <i className="fas fa-terminal"></i>
                    <i className="fas fa-keyboard"></i>
                    <i className="fab fa-css3"></i>
                    <i className="fas fa-laptop-code"></i>
                    <i className="fab fa-node"></i>
                    <i className="fas fa-coffee"></i>
                    <i className="fab fa-connectdevelop"></i>
                    <br />
                    <i className="fas fa-server"></i>
                    <i className="fab fa-jsfiddle"></i>
                    <i className="fas fa-database"></i>
                    <i className="fas fa-table"></i>
                    <i className="fas fa-hourglass-start"></i>
                    <i className="fas fa-ruler-combined"></i>
                    <br />
                    <i className="fas fa-globe-americas"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-wordpress"></i>
                    <i className="fab fa-angular"></i>
                    <br />
                    <i className="fab fa-dev"></i>
                    <i className="fab fa-js"></i>
                    <i className="fab fa-chrome"></i>

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