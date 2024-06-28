
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

// import Acertinity from './Components/Acertinity'

function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2200)
  },[])
  return (
    <div className='wrapper'>
      {
        loading ?
        (<Preloader/>) :
        (<>
        <NavBar />
        <HeroSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <Footer />
      </>)
      }
      {/* <Acertinity/> */}
     </div>
     
  )
}

export default App
