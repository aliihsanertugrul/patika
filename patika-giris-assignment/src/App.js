import React, { useEffect } from 'react'
import getData from "./components/index.jsx" 

const App = () => {
  
  useEffect(() => {
    
  getData(1)
    
  }, [])
  
  
  return (
    <div>
     sdasfadf
    </div>
  )
}

export default App