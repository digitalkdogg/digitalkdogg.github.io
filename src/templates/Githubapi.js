import React, { Component } from 'react';

import Cardrepo from './Utils/Cardrepo'
import '../includes/css/github.css'

class Githubapi extends Component {
    constructor(props){
      super(props);
       this.state = {
        username: 'digitalkdogg',
        userrepo: '',
        displayapi : false
       };
    }


    componentDidMount() {
        this.getUser();
    }

    getUser() {
        let local = JSON.parse(localStorage.getItem('digitalkdogg'));
        if (local !== null) {
            if (new Date(local.date).toDateString() === new Date().toDateString()) {
                this.setState(local);
                return local;
            }
        }
        return fetch(`https://api.github.com/users/digitalkdogg/repos?sort=pushed&per_page=3`)
        .then(response => response.json())
        .then(response => {
            if (response.message) {
                this.setState({displayapi:false});
            } else {
                local = {
                        'date':new Date().toDateString(), 
                        'userrepo': response, 
                        'displayapi': true
                        }
                localStorage.setItem('digitalkdogg', JSON.stringify(local));
                this.setState(local)
            }
        })
     
   }


  render() {
      let arr = [];
      let json = this.state.userrepo;
      let repos = function () {
        Object.keys(json).forEach(function (key){
            arr.push(json[key])
        })


       return <div id="git-hub-wrap">
                {arr.map(item =>
                <Cardrepo key={item.full_name}
                title={item.name}
                description={item.description}
                pushed={new Date(item.pushed_at)}
                issues={item.open_issues}
                />)}
            </div>
        }
    
        if (this.state.displayapi === false) {
            return null;
        } else {
            return (

                <div className="github-section">
                    <header>
                        <h2>
                            <i className="fab fa-github" aria-hidden="true"></i>Latest from github 
                        </h2>
                    </header>
                    {repos()}
                </div>
            )
        }
    }
}//end class
export default Githubapi;
