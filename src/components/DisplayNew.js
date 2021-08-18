import React, { Component } from 'react'

export class DisplayNew extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.discription}</h1>
        <h1>{this.props.status}</h1>
      </div>
    )
  }
}

export default DisplayNew
