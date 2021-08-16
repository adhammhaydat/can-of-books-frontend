import React, { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import { Card } from 'react-bootstrap';
import axios from 'axios';
class Profile extends Component {
  componentDidMount =  () => {  
    if(this.props.auth0.isAuthenticated) {
       
      this.props.auth0.getIdTokenClaims()
      .then(result => {
        const jwt = result.__raw;
        const config = {
          headers: {"Authorization" : `Bearer ${jwt}`},
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/auth'
        }
        axios(config)
          .then(axiosResults => console.log(axiosResults.data))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    }
  }    
    render() { 
        const { isAuthenticated } = this.props.auth0;
        const {name , email ,picture} = this.props.auth0.user
        return ( <div >
        {isAuthenticated && (
          <Card
            text="white"
            className="text-center p-3"
            
          >
            <Card.Img
              style={{width:"20rem"}}
              src={picture}
              alt={name}
              
            />
            <Card.Body>{isAuthenticated&& <><Card.Title style={{color:"black"}}>{name}</Card.Title>
              <Card.Text style={{color:"black"}}>{email}</Card.Text></>}
              
            </Card.Body>
          </Card>
        )}
      </div> );
    }
}
 
export default withAuth0(Profile);