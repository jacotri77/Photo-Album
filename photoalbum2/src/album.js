import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Data from './data.json'

export default React.createClass({
 

  render(){
    return (
      <div id="containerAlbum">
        <div id="albumHeader">
          <h1>Album Name</h1>
        </div>
        <div id="bigAlbums">
          <img src="https://source.unsplash.com/random/600x480" alt="#"id="albumImage"/> 
          <h2 id="albumH2">Album Name</h2>
        </div>
        <div id='leftNav'>
        {
       
           Data.map(item=>{
            return(   
            <ul>
              <li key={item.albumId}>
                <Link to={'/album'+ item.albumName}>
                  <button>{item.albumName}</button>
                </Link>
              </li>
            </ul>
              
              )
            })}
         
        <div id="bottomBorder">
        </div> 
        </div>
      </div>
    )
  }

})