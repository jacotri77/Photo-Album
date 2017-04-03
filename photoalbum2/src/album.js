import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Data from './data.json'

export default React.createClass({
    brokeBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

  picFilter(){
    var newArray = Data.filter(item=>{
       if(item.albumName === this.props.match.params.albumName){
        return this.props.match.params.albumName
      }
    })[0] 
    console.log(newArray)
    return newArray
  },
  photoFilter(){
  var albumPhoto = this.state.newArray.filter(photo=>{
      console.log('hi', albumPhoto)
      return Number(photo.id) === Number(this.props.match.params.id)
    }) 
    this.setState({
    photo: photo[0]
    
  })
  },

  render(){
    return (
      <div id="containerAlbum">
        <div id="albumHeader">
          <h1>Album Name</h1>
        </div>
        
        {
          this.picFilter().map(photo=>{
              return (
             <div key={photo.albumId}>
             <Link to={'/photo/:' + photo.photos}><img src={photo.picture} alt="#"id="albumImage"/>
             </Link>
            </div>
          )})
         
        })
        <div id='leftNav'>
         <ul>
          <button id="backers" onClick={this.brokeBack}>Back</button>
        {
           Data.map(item=>{
            return(   
              <li key={item.albumId}>
                <Link to={'/album/' + item.albumName}>
                  <button>{item.albumName}</button>
                </Link>
              </li>
              )
            })}
          </ul>
        </div> 
        <div id="bottomBorder">
        <span id="ironDev">&copy; ironDev</span>
        </div> 
      </div>
    )
  }

})