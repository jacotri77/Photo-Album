import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Data from './data.json'

export default React.createClass({
//  getInitialState(){
//    return {
//     photoAlbum: Data.filter(photo=>{
//       return photo.albumName = this.props.match.params.albumName
//     })
//    }
//  },

  render(){
    return (
      <div id="containerAlbum">
        <div id="albumHeader">
          <h1>Album Name</h1>
        </div>
        
        {
          Data.filter(photo=>{
            for(var i = 0; i < photo.length ; i++){
            if(photo.photos.picture === this.props.match.params.albumName){
              return (
             <div>
             <Link to={'/photo/:' + photo.picture}><img src={photo.albumName} alt="#"id="albumImage"/>
             </Link>
            </div>
          )
         
        }}})}

       
        <div id='leftNav'>
         <ul>
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