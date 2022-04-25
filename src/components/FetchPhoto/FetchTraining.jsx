import React, { Component } from 'react'
import './style.scss'
import Users from './Users'

export default class FetchTraining extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            photo: [],

        }
        this.userInfo = 'https://jsonplaceholder.typicode.com/users'
        this.userPhoto = 'https://jsonplaceholder.typicode.com/photos'
    }
    
    handleClick = () => {
        fetch(this.userInfo)
        .then((res)=>(res.json()))
        .then((data)=> {
            this.setState({users: data})
            // console.log(this.state.users)
        })    
        fetch(this.userPhoto)
        .then((res)=>(res.json()))
        .then((data)=> {
            let datas = data.filter((elem)=>{
                if(elem.id <= 10 ){
                    return elem.boo = elem.url 
                }
            })
            this.setState({photo: datas})
        })  
    }
    render() {
        return (  
        <>
            <button onClick={this.handleClick}>
               Fetch click
            </button>
            <div className='usersDiv'>
                <Users photo={this.state.photo} users={this.state.users}/>     
            </div>
        </>
        )
    }
}
