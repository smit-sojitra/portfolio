import {useEffect, useState } from 'react'
import Animation from './Animation'
import { HiMenu } from "react-icons/hi";
import DropDownMenu from './DropDownMenu';




const NavBar = () => {
  const [menu,setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);    
    return () => 
      window.removeEventListener("scroll", onScroll);
  }, [])
  const clickHandler = ()=>{
    setMenu((prev)=>!prev);
  }
  
  return (

    <div className={scrolled? 'scrolled px-3 md:px-0' : 'nav px-3 md:px-0'}>
      <div className="navbar">
        <div className="logo-container">
            <Animation >
              <img className="logo" src="../src/assets/image.png" alt="J"/>
            </Animation>
            <Animation>
              <div className="logo-text">mit sojitra</div>                    
            </Animation>
        </div>
        <Animation>
          <div className='relative'>
            <HiMenu onClick={clickHandler} className='w-12 h-12 relative sm:hidden text-[#e2ddd6]'/>
            <div>
              {
                menu &&
                <DropDownMenu/>
              }
            </div>
          </div>     
          <div className ="nav-items hidden sm:flex">
            <div><a href="#Projects" >Projects</a></div>
            <div><a href="#Skills">Skils</a></div>
            <div><a href="#Contact Me">Contact</a></div>
        </div>
        </Animation>
    {/* <DropDownMenu/> */}
    </div>
    </div>
    
    
    
  )
}

export default NavBar;
