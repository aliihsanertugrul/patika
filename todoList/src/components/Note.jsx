import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
let API_BASE_URL = "https://6592d20bbb12970719901592.mockapi.io";

const Note = ({ id, title,setData,data }) => {
  const [isCompletedCard, setIsCompletedCard] = useState(false);
  const [removeTodo, setRemoveTodo] = useState("");


  const handleUpdate = async () => {
    try {
      const updateBodyObject = {
        title: title,
        isCompleted: !isCompletedCard,
      };
      const fethUpdate = await fetch(`${API_BASE_URL}/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Include any additional headers if needed
        },
        body: JSON.stringify(updateBodyObject),
      });
      const fethUpdateJson = await fethUpdate.json();
      console.log(fethUpdateJson);
      setIsCompletedCard(!isCompletedCard);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (id) => {
    console.log(id)
    try {
      let API_BASE_URL = "https://6592d20bbb12970719901592.mockapi.io";
     
      axios.delete(`${API_BASE_URL}/todo/${id}`)
      .then(response=>{setData((prev)=>prev.filter((data)=>
        data.id !== id
      ))})
      
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <Card.Title style={{ padding: "1rem" }}>{title}</Card.Title>
      <Card.Footer>
        <Card.Title>
          <div className="d-flex justify-content-around align-items-center ">
            <Form>
              <Form.Check
                checked={isCompletedCard}
                type="switch"
                id="custom-switch"
                onChange={handleUpdate}
              />
            </Form>
            <span onClick={() => handleRemove(id)}>
              <MdDeleteForever style={{ color: "red", cursor: "pointer" }} />
            </span>
          </div>
        </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default Note;
