import  { useRef } from 'react'
import { BackgroundBeams } from "../Components/ui/BackgroundBeams";
import Animation from './Animation';
import Card from './Card';
import {data} from '../Data/data'

const ProjectSection = () => {
   const containerRef = useRef(null)
  return (
    <div ref={containerRef} className="project-section pt-28 bg-neutral-950 relative pb-44" id="Projects">
      <BackgroundBeams/>
      <Animation>

      <p className='text-5xl pt-8 sm:pt-16 pb-2 text-center text-wrap text-white'>My Recent <span className='text-[#c770f0]'>Works</span> </p>
      <div className='text-white text-xl text-center text-wrap font-medium'>Here are few projects I&apos;ve worked on recently</div>
      </Animation>

        <div className='w-11/12 max-w-[1260px] mt-5 p-6 py-8 flex gap-9 flex-wrap justify-center mx-auto'>
          {
            data.map((item,index)=>(
              <Card containerRef={containerRef} key={index} item={item} />
            ))
          }
        </div>
        </div> 
  )
}

export default ProjectSection