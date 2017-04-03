import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css'
import Albums from './albums.js'
import Album from './album.js'
import Photo from './photo.js'

 export default React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Albums}/>
          <Route path="/album/:albumName" component={Album} />
          <Route path="/photo/:photoId" component={Photo} />
        </div>
      </BrowserRouter>
    )
  }
})


