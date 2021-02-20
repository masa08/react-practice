import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './components/pages/Home'

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
