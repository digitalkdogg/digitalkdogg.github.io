import React, { Component } from 'react';

class Cardrepo extends Component {

     constructor(props){
          super(props);
           this.state = {
            issues: 0,
            branches: 0
           };
        }

     componentDidMount = () => {
          this.getBranches()
     }

     getBranches() {
          return fetch(`https://api.github.com/repos/digitalkdogg/`+this.props.title+`/branches?per_page=10`)
          .then(response => response.json())
          .then(response => {
               this.setState({'branches': response.length})
               return null
          })
         }

	render(){
          let formatDate = () => {
               let date = this.props.pushed
               let montharr = [
                    'Jan','Feb', 'Mar', 'April','May','June','July','Aug','Sept','Oct','Nov','Dec'
               ]
               return montharr[date.getMonth()] + '-' + date.getUTCDate() + '-' + date.getFullYear();
          }

          let getStyle = function (issues) {
               if (issues===0) {
                    issues = 0.5;
               }
               return {height: issues + 'vh'}
          }

		 return (
            <div className="card box-shadow border-radius-5">
               <div className="card-content">
                    <div className="card-title">
                         <h3>{this.props.title}</h3>
                    </div>
                    <div className="card-description">
                         <p className="desc">{this.props.description}</p>
                         <p>{'Last Pushed To : '+formatDate()}</p>
                    </div>
                    <div className="card-data">
                         <div className="inline-data">
                              <div className="flex flex-data">
                                   <div className="data"  data-branch={this.state.branches}
                                        style={getStyle(this.state.branches)}>
                                   </div>
                                   Branches
                              </div>
                         </div>
                         <div className="inline-data">
                              <div className="flex flex-data">
                                   <div className="data" data-branch={this.state.issues}
                                        style={getStyle(this.state.issues)}>
                                   </div>
                                  Issues
                              </div>
                         </div>

                    </div>

               </div>

          </div>
      )
	}
}

export default Cardrepo
