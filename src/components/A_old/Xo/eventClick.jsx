export const  EventClick = (e, props) => {
    if(e.target.nodeName == 'SPAN' && !e.target.textContent){
        if(props.player){
            e.target.textContent = 'X'
            props.setPlayer(!props.player)
            props.setField(e.target)
        }else if(!props.player){
            e.target.textContent = 'O'
            props.setPlayer(!props.player)
            props.setField(e.target)
        }
    }
}