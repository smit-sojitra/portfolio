import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const Preloader = () => {
    // const ref = useRef(null)
    // const [scope,animate]=useAnimate()
    // animate("#target",{
    //     opacity:0
    // });
  return (
    <div className='flex pre justify-center items-center overflow-hidden h-full '>
      <motion.div className=''
      initial={{scale:0.8,opacity:1}}
      animate={{scale:1.5, opacity:0.2,transition:{duration:2.2}}}
    >
        {/* <div id='target'  className="load"></div> */}
        {/* <div className="container">
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
        </div> */}
        <div className="box-of-star1 w-full h-full">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star2">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star3">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star4">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div data-js="astro" className="astronaut">
    <div className="head"></div>
    <div className="arm arm-left"></div>
    <div className="arm arm-right"></div>
    <div className="body">
      <div className="panel"></div>
    </div>
    <div className="leg leg-left"></div>
    <div className="leg leg-right"></div>
    <div className="schoolbag"></div>
  </div>
    </motion.div>
     </div>
    
  )
}

export default Preloader