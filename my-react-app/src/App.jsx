import { useState } from 'react'
import './App.css'
import Navbar from '/src/Navbar.jsx';
import Aboutus from '/src/Aboutus.jsx'
import Footer from '/src/Footer.jsx'
import Login from '/src/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Aboutus/>
      <Footer/>
      <Login/>
    </>
  )
}

export default App
