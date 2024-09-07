import {useState} from "react"

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setToDoValue} = props

    return(
        <header>
            {/* input value is what is being typed */}
            {/* onChange is an event handler. When input field changes, calls function that receives event (e)  */}
            <input value={todoValue} onChange={(e) => {
                setToDoValue(e.target.value)
            }} placeholder='Enter todo...' />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setToDoValue('')
                }}>Add</button>
        </header>
    )
}