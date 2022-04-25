import React, { useState } from "react";
import { Button } from "./Button";
import './style.css'


// This Incdrc => icrement and decrement number /// put in APP   =>   <Incdec/>

export const Incdec = () => {
    const [number,setNumber] = useState(0)

    return(
        <div className="mainContainer">
            <div>
                <h3>{number}</h3>
                <button onClick={()=>(setNumber(number-1))}>-</button>
                <Button number={number} setNumber={setNumber}/>
                {/* <button onClick={()=>(setNumber(number+1))}>+</button> */}
            </div>
        </div>
    );
}