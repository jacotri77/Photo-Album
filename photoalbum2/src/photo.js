import React from 'react'
import './index.css'
import Data from './data.json'

export default React.createClass({
    getInitialState(){
      return {
        photo: Data.filter(photo=>{
          return (photo.id) === (this.props.match.params.photosId)
        })[0],
      }
    },

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
        <div key={"photo" + this.state.photo.id} id="photoWrap">
          <img src={this.state.photo.picture} alt="#"id="indPicture"/>
        </div>
      <div id="bottomBorder">
      <span id="ironDev">&copy; jitteryBastard</span>
      </div>
    </div> 


  )
    
  }

})
