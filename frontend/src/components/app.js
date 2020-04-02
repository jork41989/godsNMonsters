import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import HomePage from './homepage/homepage'
import AdminDates from './adminDate/amin_date_container'
import AdminSchedule from './adminSchedule/admin_scheduel_container'
import NavBar from './navbar/navBar'
import './index.css'




// import SettingsContainer from './profile/settings_container';

const App = () => (
  <div className={'mainDiv'}>
    <div className={'NavDivWidth'}>
      <NavBar/>
    </div>
    <div className={'body'}> 
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/datesForm" component={AdminDates} />
      <Route exact path='/timesAvailable' component={AdminSchedule}/>
    </Switch>

    </div>
  </div>
);

export default App;