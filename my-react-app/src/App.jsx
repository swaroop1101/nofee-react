import './App.css'
import Layout from '/src/Layout.jsx'
import Home from '/src/components/Home/Home.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Login from '/src/components/Authentication/Login.jsx'
import Signup from '/src/components/Authentication/Signup.jsx'
import Courses from '/src/components/Courses/Courses.jsx'
import Cpp from '/src/components/Courses/Channels/Cpp/Cpp.jsx'
import C from '/src/components/Courses/Channels/C/C.jsx'
import Python from '/src/components/Courses/Channels/Python/Python.jsx'
import Java from '/src/components/Courses/Channels/Java/Java.jsx'
import Html from '/src/components/Courses/Channels/Html/Html.jsx'
import CSS from '/src/components/Courses/Channels/CSS/CSS.jsx'
import JavaScript from '/src/components/Courses/Channels/JavaScript/JS.jsx'
import Mern from '/src/components/Courses/Channels/Mern/Mern.jsx'

import ApnaCollegeCHome from './components/VideoPlayer/C/Apna College/ApnaCollegeCHome.jsx'
import JennyCHome from './components/VideoPlayer/C/Jennys Lecture/JennyCHome.jsx'

// C++
import ApnaCollegeCppHome from './components/VideoPlayer/Cpp/Apna College/ApnaCollegeCppHome.jsx'


// Check your ability
import MainPageCYA from '/src/components/Check-Your-Ability/MainPageCYA'
import InterviewRounds from '/src/components/Check-Your-Ability/InterviewRounds.jsx'
// import InterviewRounds from '/src/components/Check-Your-Ability/InterviewRules'


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      
        {/* Issue to be resolved: 
            The cpp, python and other components should be nested in the courses component */}

        <Route path='courses' element={<Courses/>}/>  
        <Route path='courses/cpp' element={<Cpp/>}/> 
        <Route path='courses/c' element={<C/>}/> 
        <Route path='courses/python' element={<Python/>}/> 
        <Route path='courses/java' element={<Java/>}/> 
        <Route path='courses/html' element={<Html/>}/> 
        <Route path='courses/css' element={<CSS/>}/> 
        <Route path='courses/javascript' element={<JavaScript/>}/> 
        <Route path='courses/javascript' element={<JavaScript/>}/> 
        <Route path='courses/mern' element={<Mern/>}/> 

        <Route path='/c/apna-college' element={<ApnaCollegeCHome/>}/> 
        <Route path='/c/jenny-lecture' element={<JennyCHome/>}/> 

        <Route path='/cpp/apna-college' element={<ApnaCollegeCppHome/>}/> 
          {/* Check your ability */}

        
        <Route path='check-your-ability' element={<MainPageCYA/>} />
        <Route path='check-your-ability/interview-rounds/:company/:role' element={<InterviewRounds/>} />

      </Route>
    )
  )

  return (
    <>  

      <RouterProvider router = {router}/>
      
    </>
  )
}

export default App
