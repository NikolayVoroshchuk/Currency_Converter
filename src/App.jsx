import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Convert from './pages/convert';
import './App.css';
const App = () => {
  return (
    <Switch>
      <Route path="/" component={Convert} />
    </Switch>
  );
};

export default App;
