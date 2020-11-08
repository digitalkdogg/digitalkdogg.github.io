import React, { Component } from 'react';
import Utilsjs from './Utils/Utilsjs';

class Contactblock extends Component {

  constructor() {
      super();
      this.state = {

      }
    }

    componentDidMount() {
    	 const Utils = new Utilsjs();
       Utils.adjustcontactcircles();
    }

    

    render() {
    	return(
    		   <div className="row-wrap contact-wrap">
            <div className="block c33 box-shadow">

              <div className="circle-wrap box-shadow green-grandient">
                <div className="text"> 
                  <i className="fas fa-phone"></i>
                  <h4>Phone</h4>
                </div>
              </div>  

              
          
              <div className="info-wrap">
                <a href="tel://814-777-1196">814-777-1196</a>
              </div>
            </div>
            <div className="block c33 box-shadow">
             <div className="circle-wrap box-shadow green-grandient">
                <div className="text"> 
                  <i className="fas fa-envelope-open"></i>
                  <h4>Email</h4>
                </div>
              </div>  
             
              <div className="info-wrap">
                <a href="mailto://KevinBollman@gmail.com">KevinBollman@gmail.com</a>
              </div>
            </div>
            <div className="block c33 box-shadow">
             <div className="circle-wrap box-shadow green-grandient">
                <div className="text"> 
                  <i className="fab fa-github-alt"></i>
                  <h4>Github</h4>
                </div>
              </div>  
              
               <div className="info-wrap">
                  <a href="https://github.com/digitalkdogg">Digitalkdogg On Github</a>
               </div>
            </div>
          </div>
    	)
    }

 }

 export default Contactblock;
