export function Winner(arrWinner,winP,field,player,winArr,spansField,loseWiner){
    let neWin = [...winP]
    for(let i of neWin){
        for(let x = 0; x < i.length; x++){
            if(i[x] == field.dataset['num']) i[x] = player
        }
        if(i[0] == player && i[1] == player && i[2] == player) {
            alert(`You win ${player}`)
            clearField(null,spansField,arrWinner,loseWiner,winArr)
        }
    }
}
export function clearField(e,spansField,arrWinner,loseWiner,winArr){
    arrWinner([...winArr])
    loseWiner([...winArr])
    for(let i of spansField){
        i.textContent = ''
    }
}