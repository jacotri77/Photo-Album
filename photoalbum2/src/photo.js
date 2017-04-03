import React from 'react';
import './index.css';
// import Data from './data.json'

export default React.createClass({
    brokeBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

  render(){
    return (
    <div id="indContainer">
      <div id="indPhoto"> 
        <button id="backers" onClick={this.brokeBack}>Back</button>
      </div>
		    <img src="https://source.unsplash.com/random/1280x1024" alt="#" id="indPicture"/>    
      <div id="bottomBorder">
      <span id="ironDev">&copy; ironDev</span>
      </div>
    </div> 


  )
    
  }

})
