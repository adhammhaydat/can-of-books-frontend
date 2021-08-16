import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import MyFavoriteBooks from './BestBooks';
import Profile from './Profile';

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` 
                component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated? <MyFavoriteBooks/>:<Login/>}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated? <Profile />:<Login/>
                }
                
              </Route>
            </Switch>
            <Footer />
          
        </Router>
      </>
    );
  }
}

export default  withAuth0(App);
