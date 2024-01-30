import React from 'react'
import TodoApp from './components/TodoApp'
import { TodoWrapper } from './to-do-list/todoWrapper'



const App = () => {
  const newArr=[1,2,4, [5,4,1], [1,8,9]]
  let abc=[...newArr.flat()]
  console.log(abc)
  console.log(new Set(abc))
      console.log(newArr)
  return (
    <div>
      <TodoWrapper/>
      

      
      {/* <TodoApp/> */}
    </div>
  )
}

export default App