import React from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'


function App() {
  
// const title="Welcome to the Dojo Blog"
// const likes=50

  return (
    <>
      
        <div className="App">
        <Navbar />
        <div className="content">
        <Home />
      
         </div>
         </div>
    </> 
  )
}

export default App
