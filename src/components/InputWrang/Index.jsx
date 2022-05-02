import React, { Component } from 'react'
import InputCh from './Input'
import Wrang from './Wrang'

export default class Input extends Component {
    state = {
        value: '',
        wrang: false,
    }
    handleChange = (e) =>{
        
        console.log(e.target.value)
        if(e.target.value.at(-1) < 'Z'){
            this.setState({wrang:!this.state.wrang})
            this.error()
        }
    }
    error(){
        let clear = setInterval(() => {
            setTimeout(() => {
                clearInterval(clear)
                this.setState({wrang:false})
            }, 1500);
        }, 500)
    }
  render() {
    return (
      <>
        <InputCh value={this.setState} change={this.handleChange}/>
        {this.state.wrang ?  <Wrang/> : null}    
      </>
    )
  }
}
