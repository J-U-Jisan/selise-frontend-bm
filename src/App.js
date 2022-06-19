import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateUser from './components/CreateUser'
import Users from './components/Users'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<CreateUser/>}/>
        <Route path='/users' element={<Users/>}/>

      </Routes>
    </Router>
    </>
    
  )
}

export default App
