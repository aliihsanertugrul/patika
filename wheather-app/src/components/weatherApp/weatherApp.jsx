import React, { useState } from "react";
import "./weatherApp.css";
import { Button, Form } from "react-bootstrap";
import DailyWeather from "./dailyWeather";
let api_key = "a0cccd433253ed855af86a917a6f049e";

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({})
  console.log(search)
  console.log(data)
 
 

  
const searchPressed = async (e) => {
  if(e.key==="Enter"){
    const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`
      );
      const dataWeather = await resp.json();
      setData(dataWeather)
  }
    
}
  return (
    <>
     <div className="searchBox">
      <Form.Control
        placeholder="Enter your city name.."
        type="text"
        onKeyDown={searchPressed}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{border:"1px solid black"}}
      />
      {/* <Button variant="primary" onClick={searchPressed}>
        Search
      </Button> */}
      
      
    </div>
    <DailyWeather setData={setData} data={data}/>
    </>
   
  );
};

export default WeatherApp;
