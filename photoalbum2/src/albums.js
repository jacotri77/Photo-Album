import React from 'react';
import Data from './data.json';
import {Link} from 'react-router-dom'


export default React.createClass({
render() {
	return (
    <div id="containerz">
        <div id="homeHeader">
          <h1>Photo Albums</h1>
        </div>
		 <div id="homeAlbums">
             {
              Data.map(item=>{
              return (
                <div className="PhotosAlb" key={item.albumId}>
                <Link to={'/album/'+ item.albumName}><img src={item.coverPicture} id="coverPhotoz" alt="#"/>
                  <span id="albName">{item.albumName}</span>
                </Link>
              </div>
            )})}
          </div>
        <div id="bottomBorder">
        <span id="ironDev">&copy; ironDev</span>
      </div>   
    </div>
	)
}
})