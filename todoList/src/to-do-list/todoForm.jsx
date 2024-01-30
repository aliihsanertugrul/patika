import React, { useState } from 'react'
import "./todoForm.css"

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
console.log(value)
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(value)
        setValue("")
    }
  return (
    <form className='todoForm'  onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='what is the task today?' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
