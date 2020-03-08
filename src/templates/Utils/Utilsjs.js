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

  /*********************************************************
    *   *** go to section function                ****     *
    ********************************************************
    *  This function loops through all sections and first  *
    *  hides the section and than shows the desire section *
    *  @return : null                                      *
    *******************************************************/
  gotosection(section) {
    var others = document.querySelectorAll('.section');

    for (let i = 0; i<others.length; i++) {
      others[i].classList.remove('show');
      others[i].classList.add('hidden');
      if (others[i].getAttribute('id')===section) {
        others[i].classList.add('show');
      }
    }
    this.adjustcontactcircles();
  }

  

}//end class
export default Utilsjs;
