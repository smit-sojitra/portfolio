import { useInView ,motion, useAnimation} from 'framer-motion';
import React, { useEffect, useRef } from 'react'
interface Props {
    children:JSX.Element;
    // width?:"fit-content" | "100%";
}
const Animation = ({children}:Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true})
  const mainControls = useAnimation()
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView])
  return (
    <div ref={ref} style={{zIndex:''}}>
        <motion.div
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1, y:0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,delay:0.25}}
        >{children}</motion.div>
    </div>
  )
}

export default Animation