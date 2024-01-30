import React, { useEffect, useState } from 'react'
import Notes from './Notes.jsx'
import NoteForm from './NoteForm.jsx'
import "./style.css";
import axios from 'axios';
let API_BASE_URL = "https://6592d20bbb12970719901592.mockapi.io/todo";

const TodoApp = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    
   axios.get(API_BASE_URL)
   .then(response=>setData(response.data))
      
    }, [])
    console.log(data)

  return (
    <div className='d-flex general'>
         <NoteForm data={data} setData={setData}/>
        <Notes data={data} setData={setData} />
       
    </div>
  )
}

export default TodoApp