
import './App.css'
import './index.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import ProjectSection from './Components/ProjectSection'
import SkillSection from './Components/SkillSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'
import Preloader from './Components/Preloader'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'


// import Acertinity from './Components/Acertinity'

function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2200)
  },[])
  return (
    
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
     </Routes>
      
  )
}

export default App
