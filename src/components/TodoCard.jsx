import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props /* receive children component from TodoList using props */
  return (
    <li className='todoItem'>
      {children} 
      <div className='actionsContainer'>
        <buttons onClick={() => {
          handleEditTodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </buttons>
        
        <buttons onClick={() => {
          handleDeleteTodo(index)
        }}> {/* assign handleDeleteTodo function to trash can button */}
          <i className="fa-regular fa-trash-can"></i>
        </buttons>
      </div>
    </li>
  )
}
