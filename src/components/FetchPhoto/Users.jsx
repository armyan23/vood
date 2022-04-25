import React from 'react'

export default class Users extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <>
            {
                this.props.photo.map((elem,index)=>{
                    return (
                            <div key={elem.id}>
                                <img src={elem.boo} alt="" /> 
                                <span>{this.props.users[index].id})</span>
                                <span>{this.props.users[index].name}</span>
                                <span>{this.props.users[index].phone}</span>
                            </div>
                        )
                })
            }
        </>
    )
  }
}
