import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './components/pages/Home'
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
const store = createStore(reducer);

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Provider store={store}>
          <Route exact={true} path='/' component={Home} />
        </Provider>
      </Switch>
    </Router>
  )
}

export default App;
