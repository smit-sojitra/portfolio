import React from 'react'
import Animation from './Animation'
import { useInView ,motion, useAnimation} from 'framer-motion';
import { useEffect, useRef } from 'react'


// import { BackgroundBeams } from "../Components/ui/BackgroundBeams";

const SkillSection = () => {
    
    const ref1 = useRef(null);
    const isInView2 = useInView(ref1,{once:true})
    
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true})
    const mainControls = useAnimation()
    const mainControls2 = useAnimation()
    useEffect(()=>{
        if(isInView){
        mainControls.start("visible")
        }
    },[isInView])
    useEffect(()=>{
        if(isInView2){
        mainControls2.start("visible")
        }
    },[isInView2])  

  return (
    <div id="Skills" className="container skills-container">
        <motion.div className='absolute bottom-[-10.8%] right-[0.4%]' ref={ref}
            variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.9,delay:0.5}}
            >
            <div className="skill-fade-text">Skills</div>
        </motion.div>
                <div className="skill-container-left">
                    <h2 className="skill-heading">
                    <Animation><span className="caps">M</span>e and <br/> My Tech Stack</Animation>
                    </h2>
                    <div className="skill-subHeading">
                    <Animation><p>Hi Everyone My name is Pankaj Yadav I am a Mern Stack Developer I have been working for last 3 Years and Currently I am working with a Budding Startup in USA and a full Time Freelancer. Currently I am working on NextJs and Making Beautiful UI-UX are my fey features
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque aspernatur, maiores voluptatum minus laudantium? Perspiciatis accusamus minima porro dolores necessitatibus, magni dolorem et qui veniam nulla sequi molestiae maxime.
                        </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque aspernatur, maiores voluptatum minus laudantium? Perspiciatis accusamus minima porro dolores necessitatibus, magni dolorem et qui veniam nulla sequi molestiae maxime.
                    </p></Animation>
                        
                </div>
            </div>
            <div className="skill-container-right relative">
            <motion.div className='absolute top-[50%] left-[50%]' ref1={ref1}
            variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.9,delay:0.5}}
            >
            <img  src="../src/assets/blob vector.png" alt="" className="blob-style"/>
        </motion.div>
                
                
                <Animation><img src="../src/assets/HTML.png" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/CSS.png" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Javascript.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/React.png" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/NodeJs.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Next.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Redux.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Tailwind.png" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Bootstrap.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/MaterialUI.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Express.png" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Git.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Github.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Graphql.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/MongoDB.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Vercel.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/ChartJs.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Bash.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/Docker.svg" alt="" className="skills-logo"/></Animation>
                
                <Animation><img src="../src/assets/K8s.svg" alt="" className="skills-logo"/></Animation>
                
            </div>
        </div>
  )
}

export default SkillSection