import React, { Component } from 'react'

export class AboutBooks extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.books.title}</h3>
        <p>{this.props.books.description}</p>
        <small>{this.props.books.status}</small>
      </div>
    )
  }
}

export default AboutBooks
