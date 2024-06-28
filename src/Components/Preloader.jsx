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
        {/* <div id='target'  class="load"></div> */}
        {/* <div class="container">
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
        </div> */}
        <div class="box-of-star1 w-full h-full">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div class="box-of-star2">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div class="box-of-star3">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div class="box-of-star4">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div data-js="astro" class="astronaut">
    <div class="head"></div>
    <div class="arm arm-left"></div>
    <div class="arm arm-right"></div>
    <div class="body">
      <div class="panel"></div>
    </div>
    <div class="leg leg-left"></div>
    <div class="leg leg-right"></div>
    <div class="schoolbag"></div>
  </div>
    </motion.div>
     </div>
    
  )
}

export default Preloader