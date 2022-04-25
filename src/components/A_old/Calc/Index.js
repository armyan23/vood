import { useState } from "react";
import { Math } from "./Math";
import './style.css'
// import {Operations} from './operations' 


export const Calc = () => {
    
    const [numChange,setNumChange] = useState('')
    const [numChangeTwo,setNumChangeTwo] = useState('')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('')
    const [toggle,setToggle] = useState(true)

    
    function operations(e){
        const thisValue = e.target.textContent
        if(Number.isFinite(+thisValue)){
            if(toggle){
                setNumChange(numChange + e.target.textContent)
            }else if(!toggle){
                setNumChangeTwo(numChangeTwo + e.target.textContent)
            }
        }else if(thisValue != '='){
            console.log(thisValue)
            setToggle(!toggle)
            setOperator(e.target.textContent)
        }else if(thisValue == '='){
            if(operator == '+') setResult(+numChange + +numChangeTwo)
            else if(operator == '-') setResult(+numChange - +numChangeTwo)
            else if(operator == '*') setResult(+numChange * +numChangeTwo)
            else if(operator == '/') setResult(+numChange / +numChangeTwo)
        }
    }


    return(
        <div className="parentCalc" onClick={operations}>
            <h4>{numChange} {operator} {numChangeTwo} </h4>
            <h2>{result}</h2>
            <Math />
        </div>
    );
}