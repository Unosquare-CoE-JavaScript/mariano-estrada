import React, {useState} from 'react'
import TodoList from './Components/TodoList'
import NewTodo from './Components/NewTodo'
import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string)=>{
      setTodos(prevTodos => [...todos, {id: Math.random().toString(), text: text}])
  }

  const deleteTodoHandler = (todoId: string) =>{
    setTodos(prevTodos =>{
      return prevTodos.filter(todo => todo.id !== todo.id)
    })
  } 
  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  )
}

export default App
