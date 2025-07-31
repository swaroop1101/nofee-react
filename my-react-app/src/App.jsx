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

//Html
import ApnaCollegeHtmlHome from './components/VideoPlayer/Html/Apna College/ApnaCollegeHtmlHome.jsx'
import ChaiaurcodeHtmlHome from './components/VideoPlayer/Html/Chai aur Code/ChaiaurcodeHtmlHome.jsx'
import ProgrammingwithMoshHtmlHome from './components/VideoPlayer/Html/Programming with Mosh/ProgrammingwithMoshHtmlHome.jsx'

//Mern
import IntelliPaatMernHome from './components/VideoPlayer/Mern/IntelliPaat/IntelliPaatMernHome.jsx'
import SheryiansCodingSchoolMernHome from './components/VideoPlayer/Mern/Sheryians Coding School/SheryiansCodingSchoolMernHome.jsx'
import ThapaTechnicalMernHome from './components/VideoPlayer/Mern/Thapa Technical/ThapaTechnicalMernHome.jsx'

//Python
import ApnaCollegePythonHome from './components/VideoPlayer/Python/Apna College/ApnaCollegePythonHome.jsx'
import ChaiaurcodePythonHome from './components/VideoPlayer/Python/Chai aur Code/ChaiaurcodePythonHome.jsx'
import ProgrammingwithMoshPythonHome from './components/VideoPlayer/Python/Programming with Mosh/ProgrammingwithMoshPythonHome.jsx'


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

        <Route path='/Python/apna-college' element={<ApnaCollegePythonHome/>}/> 
        <Route path='/Python/chai-aur-code' element={<ChaiaurcodePythonHome/>}/>  
        <Route path='/Python/programming-with-mosh' element={<ProgrammingwithMoshPythonHome/>}/>
          
        <Route path='/Html/chai-aur-code' element={<ChaiaurcodeHtmlHome/>}/> 
        <Route path='/Html/apna-college' element={<ApnaCollegeHtmlHome/>}/> 
        <Route path='/Html/programming-with-mosh' element={<ProgrammingwithMoshHtmlHome/>}/> 
         
        <Route path='/Mern/intellipaat' element={<IntelliPaatMernHome/>}/>
        <Route path='/Mern/sheryians' element={<SheryiansCodingSchoolMernHome/>}/>
        <Route path='/Mern/thapatechnical' element={<ThapaTechnicalMernHome/>}/>
          
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
