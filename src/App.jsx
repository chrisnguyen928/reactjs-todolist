import {useState, useEffect} from "react"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
function App() {
  /* TodoInput and TodoList components need access to todos, so define list here */
  /* We define our todo list as a state variable instead of ordinary variable because a user will modify and interact with it */
  /* setTodos is a function that updates value of variable todos, naming convention is set<<name of variable>> */
  /* setTodos uses the useState function */
  const [todos, setTodos] = useState([])
  const [todoValue, setToDoValue] = useState('')

  // allows webpage to persist new data after reload
  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  /* create handleAddTodos function so that webpage can visually update todo list, even though JavaScript updates it in the background */
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  /* filter method takes arrow function */
  /* if todoIndex !== index, todo item is allowed to stay in the array */
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setToDoValue(valueToBeEdited) /* set input value to be the value that is gonna be edited */
    handleDeleteTodo(index)
  }

  // useEffect function performs side effects such as fetching and updating data
  // square bracket takes dependency array, empty array means function runs whenever page loads
  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')

    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setToDoValue={setToDoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/> {/* pass attribute to component tags */}
    </>
  )
}

export default App
