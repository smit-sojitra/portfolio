import React from 'react';
import Button from './Button';
import Animation from './Animation'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <div className="hero-container min-h-screen">
      <div className="hero-section ">
            {/* <div className="fadded-text">John Doe</div> */}
            <div className="hero-section-left flex items-center mx-auto flex-col justify-center">
            <Animation><div className="hero-section-heading">Hello,</div></Animation>
            <Animation><div className="hero-section-heading hero-section-sub-heading w-[630px] mx-auto ml-[6rem]">
                    I am a 
                    <TypeAnimation className='mr-[2px]'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Full Stack Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1000,
        "UI-UX Designer",
        1000,
        "Backend Developer",
        1000, 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', color:'#3c5bb8', margin:'0 1rem'}}
      repeat={Infinity}
    />
      </div></Animation>
                <Animation >
                  <div className="flex items-center justify-center text-center">
                  <div className="hero-section-desc">
                    I'm a software developer and here is my portfolio website.Here you'll learn about my journy as a software developer.
                  </div>

                  </div>
                </Animation>
                
                {/* <div className="btn" id="">Hire me</div> */}
                <Animation><Button/></Animation>
                
            </div>
            {/* <div className="hero-section-right">
                <div className="absolute icons icons-dots">
                    <Animation><img src="../src/assets/dots.png" alt=""/></Animation>
                </div>
                <div className="absolute icons icons-cube">
                    <Animation><img src="../src/assets/cube.png" alt=""/></Animation>
                    
                </div>
                <div className="absolute icons icons-circle">
                    <Animation><img src="../src/assets/circle.png" alt=""/></Animation>
                    
                </div>
                <div className="absolute icons icons-zigzag">
                    <Animation><img src="../src/assets/zigzags.png" alt=""/></Animation>
                    
                </div>
                <div className="absolute icons icons-plus">
                    <Animation><img src="../src/assets/plus.png" alt=""/></Animation>
                    
                </div>
                <Animation>

                <div className="user-img">
                    <Animation><img src="../src/assets/WhatsApp Image 2024-05-27 at 14.04.49_0472a548.jpg" width="345" height="390" alt=""/></Animation>
                </div>
                </Animation>
            </div> */}
      </div>  
    </div>
    
  )
}

export default HeroSection