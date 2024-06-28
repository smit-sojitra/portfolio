import React from 'react'
import { FaLink } from "react-icons/fa6";
import { motion, useAnimate } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { BackgroundBeams } from "../Components/ui/BackgroundBeams";
import { Meteors } from "../Components/ui/meteors";
import { FollowerPointerCard } from "../Components/ui/following-pointer"
import { AuroraBackground  } from "../Components/ui/aurora-background"
import Animation from './Animation';
import Card from './Card';
import {data} from '../Data/data'


 

const ProjectSection = () => {
   
  return (
    <div className="project-section bg-neutral-950 relative" id="Projects">
        <BackgroundBeams/>
        <div className='w-11/12 max-w-[1260px] p-6 py-8 flex gap-9 flex-wrap justify-center mx-auto'>
          {
            data.map((item,index)=>(
              <Card key={index} item={item} />
            ))
          }
        </div>
        </div> 
  )
}

export default ProjectSection