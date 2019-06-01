import React, { Component } from 'react';

class Utilsjs extends Component {

/*******************************************************
  *   *** check and remove from array function  ****     *
  ********************************************************
  *  This function checks for a string in array and      *
  *  removes it                                          *
  *  @return : new array                                   *
  *******************************************************/
  removefromarray(arr, value) {
     if (this.hasValue(arr, value) ===true) {
        var newlist = []
        for (var x = 0; x<arr.length; x++) {

          if (arr[x] !== value) {
            newlist.push (arr[x])
          }
        }
        arr = newlist
      }
      return arr;
  }

  /*******************************************************
  *              *** in array function  ****     *
  ********************************************************
  *  This function this function determines if a string  *
  * is in a certain array or not                         *
  *  @return : boolean                                   *
  *******************************************************/

   hasValue(arr,value) {
    for (var i=0; i<arr.length; i++) { 
      if (arr[i] === value) {
        return true;
      } 
    }
    return false;
  }

  /*******************************************************
  *   *** convert array to str function  ****     *
  ********************************************************
  *  loops through an array and converts it to a str     *
  *. this is so we can build a poper html class list.    *
  *  @return : new string                                *
  *******************************************************/
  convertarraytostr(arr) {
    var arrstr = '';
    for (var x=0; x<arr.length; x++) {
      if (arrstr === '') {
        arrstr = arr[x] + ' ';
      } else {
        arrstr = arrstr + arr[x] + ' ';
      }
    }
    return arrstr
  }

/*******************************************************
*         *** is mobile device function  ****          *
********************************************************
*  This function does several differnt method checks   *
*  to determine if you on a mobile device / screen size*
*  @return : boolean                                   *
*******************************************************/
   isMobileDevice() {
  var device = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  if(window.innerWidth <= 800) {
      device = true;
  } else {
    device = false;
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) === true) {
      device=true;
    } 
 }
 
return device
};


/********************************************************
*.                ***  get scroll pos. ***              *
*********************************************************
*. gets the pos title of the passed in scroll element   *
*  Return text                                          *
********************************************************/ 
getscrollpos(pos, params) {

  var section = '';
  var keys = Object.keys(params);
    for (var i = 0; i<keys.length; i++) {
      try {
        if (params[keys[i]] !== undefined) {
            if (pos >= params[keys[i]].start.desktop  ) {
              if (pos <= params[keys[i]].end.desktop ) {
                section = params[keys[i]].this
              }
            }
        }
      } catch (e) {}
    }

  return section
}   

/********************************************************
*.                ***  get Top Pos. ***                 *
*********************************************************
*. Returns the top pos of an passed in element          *
*  return : numnber                                     *
********************************************************/ 
getTopPos(el) {
    for (var topPos = 0;
        el != null;
        topPos += el.offsetTop, el = el.offsetParent);
    return topPos;
}

/*******************************************************
*        *** get top bottom pos of ele  ****           *
********************************************************
*  get the top and bottom pos of a given element       *
*  @return : obj                                    *
*******************************************************/
getTopBotPosOfEle(obj, ele, nextele) {

  var nexttop = 0;
  var top = this.getTopPos(document.getElementById(ele)) - 250;

  if (nextele.length > 0 ) {
    nexttop = this.getTopPos(document.getElementById(nextele)) - 250;
  } else {
    nexttop = top + 500;
  }

  obj.start.desktop = top-50
  obj.end.desktop = nexttop-50;

  return obj;
}

}



export default Utilsjs;