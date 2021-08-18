import React, { Component } from 'react'

export class DisplayNew extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.discription}</h2>
        <h3>{this.props.status}</h3>
        <h3>{this.props.email}</h3>
      </div>
    )
  }
}

export default DisplayNew
