import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import HomePage from './homepage/homepage'
import AdminDates from './adminDate/amin_date_container'
import AdminSchedule from './adminSchedule/admin_scheduel_container'
import NavBarContainer from './navbar/navbar_container';
import TourSuccess from './tourSuccess/tourSuccess';
import Login from './session/login_form_container'
import Signup from './session/signup_form_container'
import './index.css'




// import SettingsContainer from './profile/settings_container';

const App = () => (
  <div className={'mainDiv'}>
    <div className={'NavDivWidth'}>
      <NavBarContainer />
    </div>
    <div className={'body'}> 
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/datesForm" component={AdminDates} />
      <Route exact path='/timesAvailable' component={AdminSchedule}/>
      <Route exact path="/tourBooked" component={TourSuccess} />
      <Route exact path="/godLogin" component={Login} />
      <Route exact path="/godSignup" component={Signup} />
    </Switch>

    </div>
  </div>
);

export default App;