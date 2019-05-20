import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-header">
          {this.props.title}
        </div>
        <div class="card-body">
          <p class="card-text">{this.props.children}</p>
        </div>
      </div>
    )
  }
}
