import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Data from './data.json'

export default React.createClass({
  getInitialState() {
    return {
      photos: Data.filter(album=>{
        return album.albumName === this.props.match.params.albumName
      })[0].photos,
      albums: Data
    }
  },

  brokeBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

  showPhotos(e){
    e.preventDefault()
    this.props.match.params.albumName()
  },

  render(){
    return (
      <div id="containerAlbum">
        <div id="albumHeader">
          <h1>{this.props.match.params.albumName}</h1>
        </div>
        <div id="albumContainer">
        {this.state.photos.map(photo=>{
          console.log(photo)
          return (
            <div key={"photo" + photo.id} id="photoWrap">
              <Link to={'/photo/' + photo.id}><img src={photo.picture} alt="#"id="albumImage"/></Link>
            </div>
          )
        })}
        </div>
        <div id='leftNav'>
         <ul>
          <button id="backers" onClick={this.brokeBack}>Back</button>
        {
           this.state.albums.map(item=>{
            return(   
              <li key={item.albumId}>
                <Link to={'/album/' + item.albumName}>
                  <button onClick={item.albumName}>{item.albumName}</button>
                </Link>
              </li>
              )
            })}
          </ul>
        </div> 
        <div id="bottomBorder">
        <span id="ironDev">&copy; jitteryBastard</span>
        </div> 
      </div>
    )
  }

})