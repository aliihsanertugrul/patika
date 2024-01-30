import React, { useEffect, useState } from 'react'
import "./footer.css"

export const Footer = ({todos,setTodos,data,setData}) => {
  console.log(todos)
  



  
  
  const clearCompleted=()=>{
    const cleared=todos.filter((todo)=>
      !todo.completed
    )
    console.log("cleared",cleared)
    setTodos(cleared)

  }

  const ClearAll = () => {
    setData([]);
    setTodos([])
  }

  const completedFunc=()=>{
    const completedAll=data.filter(item=> item.completed)
    setTodos(completedAll)
  }
  
  return (
    <div className='footer'>
      <p>{`${todos.length} tasks left`}</p>
      <div>
        
        <span onClick={()=>setTodos(data)}>All </span>        
        <span onClick={completedFunc}>Completed</span>
        <span onClick={()=>ClearAll()}>Clear All</span>
      </div>
      <p onClick={()=>clearCompleted()}>Clear Completed</p>
    </div>
  )
}
