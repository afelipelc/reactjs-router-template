import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>About</h2>
          <p>
            Este es el componente About
          </p>
          <Link to="/">Index</Link>
          <Link to="/details">Details</Link>
        </header>
      </div>
    );
  }
}

export default About;
