import React, { useEffect } from 'react'
import getData from "./components/index.jsx" 
import FetchingApi from './fetching-api/index.jsx'

const App = () => {
  
  // useEffect(() => {
    
  // getData(1)
    
  // }, [])
  
  
  return (
    <div>
     <FetchingApi/>
    </div>
  )
}

export default App