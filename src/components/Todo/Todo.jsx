import { useState } from "react"
import { Input } from "./Input"
import './style.css'

export const Todo = (props) =>{
    let [todo,setTodo] = useState([])
    let [tole,setTole] = useState(todo.length)
    let [boo,setBoo] = useState(0)
    
    function table(e) {
        let thisId = e.target.parentElement.parentElement.parentElement.dataset.id
        if(e.target.classList.contains('delet')) {
            let newArr = [...todo]
            newArr.splice(thisId,1)
            
            if(e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.checked) setBoo(boo - 1)
            setTodo(newArr)
            setTole(newArr.length)
        }
    }
    
    function increment(e) {
            console.log(e.target.checked)
            
            if(e.target.checked) setBoo(boo + 1)
            else setBoo(boo - 1)
        
    }

    return(
        
        <div className="container">
            <p>ToDo list</p>
            <Input setTodo={setTodo} todo={todo} setTole={setTole}/>
            <table id="table" onClick={table}>
                <tbody>
                {todo.map((elem,index)=> (
                        <tr key={index} data-id={index}>
                            <td> <input type="checkbox" id={index} onClick={increment} /></td>
                            <td> <label htmlFor={index}>{elem}</label></td>
                            <td >
                                <span >
                                    <img src='./img/delet.png' className="delet"/>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>{boo} / {tole}   Complatet</div> 
            
        </div>
    )
}