import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './index.css';
import Albums from './albums.js';
import Album from './album.js';
import Photo from './photo.js';

 export default React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
      <ul>
        <li><Link to="/">Albums</Link></li>
        <li><Link to="/album">Album</Link></li>
        <li><Link to="/photo">Individual Photo</Link></li>
      </ul>
      
      <Route exact={true} path="/" component={Albums}/>
      <Route path="/album/:albumName" component={Album} />
      <Route path="/photo/" component={Photo} />
      
    </div>
      </BrowserRouter>
    )
  }
})


