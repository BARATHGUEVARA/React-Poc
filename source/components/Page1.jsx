import React from 'react';
import {Link} from 'react-router-dom'
class Page1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Page1 Page</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>

      </div>
    );
  }
}

export default Page1;