import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps ={
    onAddTodo: (todoText: string) => void
}

const NewTodo:React.FC <NewTodoProps>= (props) => {

    const textRef = useRef<HTMLInputElement>(null)

    let todoSubmitHandler = (e: React.FormEvent)=>{
        e.preventDefault()
        const enteredText = textRef.current!.value
        console.log(enteredText)
        props.onAddTodo(enteredText)
    }



  return (
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id='todo-text' ref={textRef} />
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo