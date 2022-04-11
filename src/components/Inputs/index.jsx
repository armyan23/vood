import React, { useState } from "react"
import './style.css';

// This Inputs change h3 text ////// put in APP  =>  <Inputs/>

export const Inputs = () => {
    const [value,setValue] = useState('Text')
    const [text,setText] = useState('')

    
    function textChange() {
        setText(value)
        document.getElementById('input').value = ''
    }

    return(
        
        <div className='mainContainer'>
            <div>
                <h3>{text}</h3>
                <input type="text" id="input" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={textChange}>Click</button>
            </div>
        </div>
    )
}