import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {
   render() {
    return (
        <div>
          <h1>Home Page</h1>
          <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/page1">Page1</Link></li>
          </ul>
        </div>
      );
   }
}

export default Home;