export const Input = (props) => {
    function addToArray(e) {
        const newTodo = document.getElementById('mainInput').value
        if(newTodo){
            let newArr = [...props.todo]
            newArr.push(newTodo)
            props.setTodo(newArr)
            document.getElementById('mainInput').value = ''
            props.setTole(newArr.length)
        }

    }

    return(
        <div>
            <input type="text" id='mainInput' />
            <button onClick={addToArray}>Add to list</button>
        </div>
    )
}