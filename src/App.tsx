import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './components/pages/Home'
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

const history = createBrowserHistory();
const store = createStore(reducer);

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className='container'>
        <Provider store={store}>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/register' component={Register} />
            <Route exact={true} path='/login' component={Login} />
          </Switch>
        </Provider>
      </div>
    </Router>
  )
}

export default App;
