import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../assets/css/index.css';
import Home from './Home.js';
import Photo_album_spread from './photo_album_spread.js';
import Photo_individual from './Photo_individual.js';
import Data from './data2.json'

export default React.createClass({

  render() {
    return(
      <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/photo_album_spread">Albums</Link></li>
        <li><Link to="/photo_individual">Photos</Link></li>
      </ul>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/photo_album_spread/:album" component={Photo_album_spread}/> 
      <Route path="/photo_individual/:id" component={Photo_individual} />
    </div>
  </BrowserRouter>

    )
  }

})

   