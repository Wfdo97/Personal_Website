import React from 'react'
import Nav from './components/nav/Nav'
import Main from './Main'
import Project1 from '../src/components/portfolio/projects/project1/Project1'
import Project2 from '../src/components/portfolio/projects/project2/Project2'
import Project3 from '../src/components/portfolio/projects/project3/Project3'
import Project4 from '../src/components/portfolio/projects/project4/Project4'
import Project5 from '../src/components/portfolio/projects/project5/Project5'
import Project6 from '../src/components/portfolio/projects/project6/Project6'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/project1' element={<Project1/>} />
      <Route path='/project2' element={<Project2/>} />
      <Route path='/project3' element={<Project3/>} />
      <Route path='/project4' element={<Project4/>} />
      <Route path='/project5' element={<Project5/>} />
      <Route path='/project6' element={<Project6/>} />
    </Routes>
    </>
  )
}

export default App