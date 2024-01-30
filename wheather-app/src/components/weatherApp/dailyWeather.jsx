import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import cloud from "../assets/cloud.png";
import clear from "../assets/clear.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import search from "../assets/search.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";



const DailyWeather = ({data,setData}) => {
 const [image, setImage] = useState()
console.log(data)
 const celcius=Math.floor(data.main?.temp-273,15)

 




  
  return (
    <div className='text-center'>
      <img src={snow} alt="" />
      <h1>{data.name}</h1>
      <p>{celcius}&deg;C</p>
      <p>
        {
          data.weather ? <p>{data.weather[0].description}</p> : null
        }

      </p>
       

    </div>
  )
}

export default DailyWeather