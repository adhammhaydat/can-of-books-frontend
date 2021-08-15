import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile';
import { Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export class NavPar extends Component {
  render() {
    return (

      <div>
        
        <Nav variant="pills"  className="navbar navbar-dark bg-dark">
          <div style={{ marginLeft: "1rem" }}>{this.props.auth0.isAuthenticated ?
            <Logout /> :
            <Login />
          }</div>
          <Nav.Item>
            
           <a href="/Profile">profile</a>
            
          </Nav.Item>
          
          

        </Nav>
        
      </div>
    )
  }
}

export default withAuth0(NavPar)