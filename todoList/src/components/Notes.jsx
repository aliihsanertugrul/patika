import React, { useEffect, useState } from "react";
import Note from "./Note.jsx";
import "./notes.css";
import { Col, Row } from "react-bootstrap";
let API_BASE_URL = "https://6592d20bbb12970719901592.mockapi.io";

const Notes = ({data,setData}) => {
  // console.log("notes",data)


  

  return (
    <div className="notes">
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {data.map((item) => (
          <Col key={item.id}>
            <Note {...item} setData={setData} data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Notes;
