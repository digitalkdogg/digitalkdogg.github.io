import { Component } from 'react';

class Utilsjs extends Component {

/*********************************************************
  *   *** Adjust contact circles                ****     *
  ********************************************************
  *  This function gets the width of the block and than  *
  *  circles left position to a perfect center           *
  *  @return : null                                      *
  *******************************************************/
  adjustcontactcircles() {
      var block = document.querySelectorAll('#the-guts .section.show .block.c33');
      if (block.length > 0) {
        for (let i=0;i<block.length;i++) {
          let width = block[i].offsetWidth / 2 - 65
          let circle=block[i].querySelector('.circle-wrap')

          if (circle != null) {

              circle.setAttribute('style', 'left:'+width+'px;')

          }
        }

      }
      return null;
  }  

}//end class
export default Utilsjs;
