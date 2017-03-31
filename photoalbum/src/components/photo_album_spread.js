
import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/index.css';
import Data from './data2.json'

export default React.createClass({
  getInitialState() {
    return {
      photoAlbum: Data.filter(photo=>{
        return photo.album = this.props.match.params.album
      })
    }
  },

  render(){
    return (
      <div id="container_album">
        <div id="album_header">
          <h1>Album Name</h1>
        </div>
        <div id="bigAlbums">
          <img src="https://source.unsplash.com/random/600x480" alt="#"id="album_image"/> 
          <h2 id="album_h2">Album Name</h2>
        </div>
        <div id='leftNav'>
          <ul>
          {
            this.state.photoAlbum.map(photo=>{
            return(
            <li key={'i'+ photo._id}><Link to={'/photo_album_spread/'+ photo.album} >
              <button>Album {photo.album}</button>
              </Link></li>
              )
            })}
          </ul>
         <div id="bottomBorder">
         </div> 
        </div>
      </div>

    )
  }

})