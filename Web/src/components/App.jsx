import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { PrivateRoute } from '../utils/PrivateRoute';
import { PublicRoute } from '../utils/PublicRoute';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              {/* <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/users" component={User} /> */}
              <PublicRoute exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;