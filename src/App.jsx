
import './App.css'
import './index.css'
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
    },800)
  },[])
  return (
    <div>
      {
        loading ? (<Preloader/>) :(<Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
       </Routes>)
      }
    </div>
     
      
  )
}

export default App
