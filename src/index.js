import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Submit from './Submit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Submit" component={Submit} />
    </Switch>
  </Router>,
  rootElement
);
