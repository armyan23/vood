export const Button = (props) =>{

    //LONG version //onclick function put in onClick atributs
    // function onclick(){
    //     props.setNumber(props.number+1)
    // }

    return(
        <button onClick={()=>props.setNumber(props.number+1)}>+</button>
    );
}