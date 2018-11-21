import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../logo.svg';
import '../../App.css';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Éste es el Index de nuestra App.
          </p>
          <Link to="/details">Details</Link>
          <Link to="/about">About</Link>
        </header>
      </div>
    );
  }
}

export default Index;
