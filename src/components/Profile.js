import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import { Card } from 'react-bootstrap'


export class Profile extends Component {
  render() {
    return (
      <div>
        
        {this.props.auth0.isAuthenticated && <>
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={this.props.auth0.user.picture}  />
          <Card.Body>
            <Card.Title>{this.props.auth0.user.name}</Card.Title>
            <Card.Text>
              {this.props.auth0.user.name}
            </Card.Text>
          </Card.Body>
        </Card>
        </>}
        
      </div>
    )
  }
}

export default withAuth0(Profile)
