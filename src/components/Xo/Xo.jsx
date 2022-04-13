import { useEffect, useState } from "react";
import { PlayerZone } from "./PlayerZone";
import { EventClick } from "./eventClick";
import './style.css'
import { Winner,clearField } from "./winner";

export const Xo = () => {
        
        let winArr = [
            ['1-1','1-2','1-3'],
            ['1-1','2-2','3-3'],
            ['1-1','2-1','3-1'],
            
            ['1-2','2-2','3-2'],

            ['1-3','2-3','3-3'],
            ['1-3','2-2','3-1'],

            ['2-1','2-2','2-3'],
            ['3-1','3-2','3-3'],
        ]
        const [player,setPlayer] = useState(true)
        const [winX,setWinX] = useState([...winArr])
        const [winO,setWinO] = useState([...winArr])
        const [field, setField] = useState('')


        let spansField = document.querySelectorAll('span')
        useEffect(()=> {
            if(field){
                if(field.textContent == 'X') Winner(setWinX,winX,field,'X',winArr,spansField,setWinO);
                else if(field.textContent == 'O') Winner(setWinO,winO,field,'O',winArr,spansField,setWinX);
            }
        },[player,field])



    return(
        <div className="parent">
            <PlayerZone spanClick={EventClick} player={player} setPlayer={setPlayer} setField={setField} />
            <button onClick={(e)=>clearField(e, spansField,setWinX,setWinO,winArr)}>Clear</button>
        </div>
    );
}