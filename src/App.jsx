import React from "react"
import NavBar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Services from "./Services"
import Footer from "./Footer"

function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/services" element={<Services/>}/>  
      </Routes>
      <Footer/>
    </>
    )
}

export default App
