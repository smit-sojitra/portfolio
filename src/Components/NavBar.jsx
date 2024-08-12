import { useEffect, useState } from 'react'
import Animation from './Animation'
import DropDownMenu from './DropDownMenu';
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { TiMessage } from "react-icons/ti";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import img from "../assets/image.png"
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () =>
      window.removeEventListener("scroll", onScroll);
  }, [])


  return (

    <div className={scrolled ? 'scrolled duration-[500ms] transition-all  px-4 md:px-0' : 'nav duration-[500ms] transition-all px-4 md:px-0'}>
      <div className="navbar py-1 sm:py-2 px-0 md:px-4">
        <div className="logo-container">
          <Animation >
            <Link to={'/'}>
              <img className="logo w-[clamp(35px,10vw,70px)]" src={img} alt="J" />
            </Link>
          </Animation>
          <Animation>
            <Link to={'/'}>
              <div className="logo-text text-[clamp(15px,5vw,28px)]">mit sojitra</div>
            </Link>
          </Animation>
        </div>
        <Animation>
          <div className='relative sm:hidden'>
            {/* <HiMenu onClick={clickHandler} className='w-12 h-12 relative sm:hidden text-[#e2ddd6]'/> */}
            <DropDownMenu />
            <div >


            </div>
          </div>
          <div className="nav-items hidden sm:flex">
            <Link to={'/'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><IoHomeOutline />Home</div></Link>
            <Link to={'/skills'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><GoPerson />About</div></Link>
            <Link to={'/projects'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><AiOutlineFundProjectionScreen />Projects</div></Link>
            <Link to={'/contact'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><TiMessage />Contact</div></Link>
          </div>
        </Animation>
        {/* <DropDownMenu/> */}
      </div>
    </div>



  )
}

export default NavBar;
