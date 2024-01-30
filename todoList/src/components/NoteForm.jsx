import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "./NoteForm.css"
import axios from 'axios';
let API_BASE_URL = "https://6592d20bbb12970719901592.mockapi.io/todo";

const NoteForm = ({data,setData}) => {
  const [formData, setFormData] = useState("");
  // console.log(formData)
  

const handleSubmit = async() => {
  // e.preventDefault();

 try {
  axios.post(API_BASE_URL,{
    title:formData,
    isCompleted:false
  })
  .then((response)=>{
    setData((prev)=>[...prev,response.data])
    console.log(response.data)
  })

 
 } catch (error) {
  console.log(error)
 }
 setFormData("")
};
 

return (
  <Container className='note-form'>
      <Form className='w-100' >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control  className='border-2' type="text" placeholder="Please write your note.." value={formData} onChange={(e)=>setFormData(e.target.value)} />
      </Form.Group>
      <Button className='w-100 bg-warning text-light border-0 fw-bold' type="button" onClick={()=>handleSubmit()}>Create Note</Button>
      </Form>
    </Container>
      
    
  )
}

export default NoteForm