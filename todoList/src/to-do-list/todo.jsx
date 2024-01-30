import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./todo.css"

export const Todo = ({todo,completeTodo,deleteTodo}) => {
    
  return (
    <div className='todo'>
        <div className={todo.completed ? "completed-todo" : ""}>{todo.task}</div>
        {/* <p>
        {todo.completed ? "tamamlandı" : "tamamlanmadı"}
        </p> */}
        
        <div>
        <FontAwesomeIcon className='complete-icon' icon={faCheck} onClick={()=>completeTodo(todo.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>deleteTodo(todo.id)} />
        </div>
    
    </div>
  )
}
