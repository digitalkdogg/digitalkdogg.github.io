import React, { Component } from 'react';


class Topbanner extends Component {

   constructor() {
         super();
         this.state = {
          'iconpos': 10
      }
   }


   render(){ 
      return (
         <div id="banner" className={'num_'+this.props.num}  >
         <i className="fas fa-file-code i-2 v-text-top"></i>
         <i className="fas fa-project-diagram i-4"></i>
         <i className="fab fa-github i-7 v-text-top"></i>
         <i className="fas fa-desktop i-10"></i>
         <i className="fas fa-cogs i-14 v-text-top"></i>
         <i className="fab fa-js-square i-16"></i>
         <i className="fab fa-html5 i-17 v-text-top"></i>

         <i className="fab fa-react i-1 "></i>
         <i className="fab fa-node-js i-2 v-text-top"></i>
         <i className="fab fa-jsfiddle i-3"></i>
         <i className="fab fa-php i-4 v-text-top"></i>
         <i className="fas fa-code i-5"></i>
         <i className="fas fa-laptop-code i-6 v-text-top"></i>
         <i className="fas fa-file i-7"></i>
         <i className="fab fa-gratipay i-8 v-text-top"></i>
         <i className="fab fa-mobile-alt i-9"></i>
         <i className="fas fa-database i-10 v-text-top"></i>
         <i className="fas fa-sliders-h i-11 "></i>
         <i className="fab fa-git i-12 v-text-top"></i>
         <i className="fab fa-angular i-13"></i>
         <i className="fas fa-code-branch i-14 v-text-top"></i>
         <i className="fab fa-css3-alt i-15"></i>
         <i className="fab fa-codepen i-16 v-text-top"></i>
         <i className="fab fa-html5 i-17"></i>
         <i className="fas fa-terminal i-18 v-text-top"></i>
         <i className="fas fa-search"></i>
         <i className="fas fa-search-plus v-text-top"></i>
         <i className="fas fa-mouse-pointer"></i>
         <i className="fas fa-i-cursor v-text-top"></i>
         <i className="fas fa-mouse"></i>
         <i className="fas fa-warehouse v-text-top"></i>
         <i className="fas fa-plug"></i>
         <i className="fas fa-lightbulb v-text-top"></i>
         <i className="fas fa-tachometer-alt"></i>
         <i className="fas fa-twitch v-text-top"></i>
         <i className="fas fa-circle-notch "></i>
         <i className="fas fa-wrench v-text-top"></i>
         <i className="fas fa-weixin"></i>
         <i className="fas fa-free-code-camp v-text-top"></i>
         <i className="fas fa-shield-alt"></i>

      </div>
      )
   }
}//end class

export default Topbanner;