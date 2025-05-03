import { useState } from 'react'
import './App.css'
import Header from '/src/components/Header/header.jsx';
import Aboutus from '/src/components/About/Aboutus.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import Layout from '/src/Layout.jsx'
import Home from '/src/components/Home/Home.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Login from '/src/components/Authentication/Login.jsx'
import Signup from '/src/components/Authentication/Signup.jsx'
import Courses from '/src/components/Courses/Courses.jsx'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path:"login",
  //         element:<Login/>
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='courses' element={<Courses/>}/>
      </Route>
    )
  )

  return (
    <>
      {/* <Layout/> */}
      <RouterProvider router = {router}/>
      {/* <Header/>
      <Aboutus/>
      <Footer/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
