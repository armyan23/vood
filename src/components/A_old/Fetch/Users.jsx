import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    return (
        <div>
          This name <b>{this.props.name}</b> 
          AND this First name <b>{this.props.userName}</b> 
        </div>
    )
  }
}
