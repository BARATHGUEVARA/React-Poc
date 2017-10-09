import React from 'react';
import {Link} from 'react-router-dom'
class About extends React.Component {
   render() {
      return (
        <div>
          <h1>About Page</h1>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/page1">Page1</Link></li>
          </ul>
        </div>
      );
   }
}

export default About;