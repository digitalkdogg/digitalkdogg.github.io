import React, { Component } from 'react';
import Utilsjs from './Utils/Utilsjs';

import '../includes/css/contactblock.css';

class Contactblock extends Component {

    componentDidMount() {
    	 const Utils = new Utilsjs();
       Utils.adjustcontactcircles();

       window.addEventListener('resize', function () {
         Utils.adjustcontactcircles();
       });
    }

    

    render() {
    	return(
    		<div className="row-wrap contact-wrap">
            <a className="block c33 box-shadow" href="tel://814-777-1196" role="link">
              
                <div className="circle-wrap box-shadow green-grandient">
                  <div className="text"> 
                    <i className="fas fa-phone"></i>
                    <h4>Phone</h4>
                  </div>
                </div> 
                <div className="info-wrap">
                814-777-1196
                </div>   
            </a>
            <a className="block c33 box-shadow" href="mailto://KevinBollman@gmail.com" role="link">
              
              <div className="circle-wrap box-shadow green-grandient">
                <div className="text"> 
                  <i className="fas fa-envelope-open"></i>
                  <h4>Email</h4>
                </div>
              </div> 
              <div className="info-wrap">
              KevinBollman@gmail.com
              </div>           
          </a>
          <a className="block c33 box-shadow" href="https://github.com/digitalkdogg" role="link">             
              <div className="circle-wrap box-shadow green-grandient">
                <div className="text"> 
                  <i className="fas fa-github-alt"></i>
                  <h4>Github</h4>
                </div>
              </div> 
              <div className="info-wrap">
              digitalkdogg on Github
              </div>
          </a>
      </div>
    	)
    }

 }

 export default Contactblock;
