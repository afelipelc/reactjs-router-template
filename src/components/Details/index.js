import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

class Details extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Details</h2>
          <p>
            Este es el componente Details
          </p>
          <Link to="/">Index</Link>
          <Link to="/about">About</Link>
        </header>
      </div>
    );
  }
}

export default Details;
