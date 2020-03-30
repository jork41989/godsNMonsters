import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';






// import SettingsContainer from './profile/settings_container';

const App = () => (
  <div className={'mainDiv'}>
    <div className={'NavDivWidth'}>
      NAV here
    </div>
    <div className={'body'}> 
    <Switch>
      {/* <Route exact path="/" component={MoviesIndexContainer} /> */}
      
    </Switch>

    </div>
  </div>
);

export default App;