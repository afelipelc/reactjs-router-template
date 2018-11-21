import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Index from './Index';
import Details from './Details';
import About from './About';

export default () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/details" component={Details} />
    <Route path="/about" component={About} />
  </Switch>
);
