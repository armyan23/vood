import React, { useState } from "react";
import './style.css'
import {data} from './objects.js'

//This is search and sort inside my table // put in APP  =>    <TableMy/>
export const TableMy = () => {
        // console.log(data)
      const [toggle,setToggle]=useState(true);
      const [obj,setObj]= useState(data)
      const [len, setLen] = useState(0)
      let newArr = [...data];


      function sortL(nameSort){
        if(toggle){
            newArr.sort(function(a,b){
                return a.nameSort > b.nameSort ?  1: -1;
            })
          setToggle(!toggle);
        }else if(!toggle){
            newArr.sort(function(a,b){
                return a.nameSort > b.nameSort ? -1 : 1
            })
            setToggle(!toggle)
        }
            setObj(newArr);
      }
    

      function searchFunction(){
        let thisValue = document.getElementById('search').value
        let elemSearch = ""

        if(thisValue.length > len){
          newArr = obj.filter((elem) => {
            for(let i in elem){
              elemSearch =  elem[i].toString()
              if(elemSearch.startsWith(thisValue)){
                return elem
              }
            }
            
          })
          setLen(thisValue.length)
          setObj(newArr)
        } else if(thisValue.length <= len)  {
          newArr = data.filter((elem) => {
            for(let i in elem){
              elemSearch =  elem[i].toString()
              if(elemSearch.startsWith(thisValue)){
                return elem
              }
            }
            
          })
          setObj(newArr)
        }
        setLen(thisValue.length)
      }

    
    return(
      <div className="mainConteiner">
        <form action='#'>
          <input type="search" id='search' onChange={searchFunction} placeholder="Search"></input>
        </form>
        <table className='myTable'>
            <thead>
                <tr>
                    <th  onClick={()=>sortL('firstName')}>First Name</th>
                    <th  onClick={()=>sortL('lastName')}>Last Name</th>
                    <th  onClick={()=>sortL('age')}>Age</th>
                    <th  onClick={()=>sortL('city')}>City</th>
                </tr> 
            </thead>
            <tbody>
                {obj.map((elem)=>(
                    <tr key={Math.random() * 10}>
                      <td>{elem.firstName}</td>
                      <td>{elem.lastName}</td>
                      <td>{elem.age}</td>
                      <td>{elem.city}</td>
                    </tr>
                ))}
            </tbody>
            </table>
      </div>
   
    );
}