import React, { Component } from 'react'

export default class Buttom extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
    return (
        <>
            <button onClick={this.props.onClick}>Click Fetch</button>
        </>
    )
  }
}
