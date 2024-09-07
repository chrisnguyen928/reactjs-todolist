import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos} = props /* destructure todos from App.jsx and use it using props (short for properties) */

  return (
    <ul className = 'main'>
      {todos.map((todo,todoIndex) => {
        return(
          <TodoCard {...props} key={todoIndex} index={todoIndex}> {/* uses prop attributes given in App.jsx, just add it using {...props} */}
            <p>{todo}</p>
          </TodoCard>
        )
      }
      )}
    </ul>
  )
}
