import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home';

import logo from './logo.svg';
import './App.css';

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  )
};

export default withRouter( App );