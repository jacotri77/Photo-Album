import React from 'react'
import {Link} from 'react-router-dom';
import '../assets/css/index.css';
import Album from './data2.json'

export default React.createClass({
   getInitialState() {
    console.log(this.props.match.params.album)
    return {
      AlbumsPhotos: Album.filter(photo=>{
        return photo.album = this.props.match.params.album
      })

    }
  },
  render(){
    console.log(this.state.AlbumsPhotos)
    return (
    	<div id="containerz">
      	<div id="homeHeader">
      		<h1>Photo Albums</h1>
      	</div>
      	<div id="homeAlbums">
      			<div className="Photos_alb"> {
              this.state.AlbumsPhotos.map(album=>{
              return (
                <Link to={'/photo_album_spread/'+ photo.album} key={'i'+ album.id}><img src="https://source.unsplash.com/random/600x480" alt="#" />
                    <p>Album {photo.album}</p>
                </Link>
            )
            })}
      		</div>	
      	</div>
        <div id="bottomBorder">
        </div>
    	</div>


    )
  }


})

