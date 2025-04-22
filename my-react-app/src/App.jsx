import { useState } from 'react'
import './App.css'
import Header from '/src/components/Header/header.jsx';
import Aboutus from '/src/components/About/Aboutus.jsx';
import Footer from '/src/components/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Aboutus/>
      <Footer/>
      {/* <Login/> */}
    </>
  )
}

export default App
