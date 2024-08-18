import Animation from './Animation'
import { useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react'
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import img from "../assets/about.png"
import Skills from './Skills';

const SkillSection = () => {

    const ref1 = useRef(null);
    
    
  

    return (
        <div id="" className="min-h-screen relative pb-44 bg-neutral-900 px-10  md:px-20 pt-28 sm:pt-40">
            <div className="flex flex-col gap-10 md:gap-5 items-center md:pt-16 max-w-[1200px] w-full justify-center md:flex md:flex-row mx-auto">
                <div className="skill-container-left md:w-[50%] w-full ">
                    <h2 className="skill-heading text-3xl md:text-[52px] z-10 md">
                        <Animation>Know Who<span className="text-[#c770f0]"> I'M</span></Animation>
                    </h2>
                    <div className="skill-subHeading z-10 md:[80%] w-full text-xl">
                        <Animation><div className=' font-medium text-gray-300 leading-relaxed
                        '>I am a seasoned full stack developer specializing in the MERN stack, with extensive experience in building robust web applications. I have expanded my skill set by mastering Next.js, a versatile full stack framework known for its efficiency and scalability. I am passionate about creating innovative solutions and delivering seamless user experiences, leveraging my expertise to tackle complex challenges in web development.
                        </div>
                        </Animation>

                    </div>
                </div>
                <div className="skill-container-right w-full md:w-[50%]  relative">
                    <Animation>
                        <img src={img} className='' alt="" />
                    </Animation>
                </div>
            </div>
            <Skills/>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}

export default SkillSection