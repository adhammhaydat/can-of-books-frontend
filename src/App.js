import React, { Component } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile'
import { Nav } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavPar from './components/NavPar';


export class App extends Component {
  render() {
    return (
      <div>
        <NavPar />
        
        <Router>
            <Switch>
              <Route exact path="/Profile" >
                <Profile/>
              </Route>

            </Switch>
          </Router>
      </div>
      
    )
  }
}

export default withAuth0(App)
