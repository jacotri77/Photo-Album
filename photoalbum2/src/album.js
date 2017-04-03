import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Data from './data.json'

export default React.createClass({
    brokeBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

  render(){
    return (
      <div id="containerAlbum">
        <div id="albumHeader">
          <h1>Album Name</h1>
        </div>
        
        {
          Data.filter(photo=>{
            if(photo.photos.picture === this.props.match.params.albumName){
              return (
             <div>
             <Link to={'/photo/:' + photo.photos.picture}><img src={photo.photos.picture} alt="#"id="albumImage"/>
             </Link>
            </div>
          )
         
        }})}

       
        <div id='leftNav'>
         <ul>
          <button id="backers" onClick={this.brokeBack}>Home</button>
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
        </div> 
      </div>
    )
  }

})