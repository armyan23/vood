import React, { Component } from 'react'
import Buttom from './Buttom'
import Users from './Users';

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }

  }
  handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        })
        console.log(this.state)
      })
  }
  render() {
    return (
      <div>
        <Buttom onClick={this.handleClick} />
        <div>
          {
              this.state.users.map(elem=>{
                return (
                    <div key={elem.id}>
                      <Users name={elem.name} userName={elem.username}/>
                    </div>
                )
              })
            }
        </div>
      </div>
    )
  }
}
