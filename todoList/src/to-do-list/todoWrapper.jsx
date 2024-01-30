import React, { useEffect, useState } from 'react'
import { TodoForm } from './todoForm'
import { v4 as uuidv4 } from "uuid";
import { Todo } from './todo';
import { Footer } from './Footer';
import "./todoWrapper.css"
uuidv4();


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const [data, setData] = useState([...todos])
  console.log("data",data)

    useEffect(() => {
      
    }, [todos])
    
    

    const addTodo=(value)=>{
        setTodos([...todos,{id:uuidv4(),task:value,completed:false,isEditing:false}])
        setData([...todos,{id:uuidv4(),task:value,completed:false,isEditing:false}])
        
        // console.log(todos)
    }

    const completeTodo=(id)=>{
      const  newTodos=todos.map((todo)=>{
        if(todo.id===id){
          return {...todo,completed:!todo.completed}
        }else{
          return todo;
        }
        
      })
      // console.log(id)
      // console.log(newTodos)
      setTodos(newTodos)
      setData(newTodos)
    }

    const deleteTodo=(id)=>{
      const filteredTodos=todos.filter((todo)=>{
        if(todo.id !==id){
          return todo;
        }
      })
      
      
      setTodos(filteredTodos)
    }

  return (
    <div className='todo-wrapper'>
        <h1>Get things done</h1>
        <TodoForm addTodo={addTodo}/>
        {
            todos.map((todo,index)=>(
                 <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} key={index}/>
            ))
           
        }
        
        <Footer data={data} setData={setData} todos={todos} setTodos={setTodos}/> 
       
    </div>
  )
}
