import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
     animate={{
         scale:[1,2,2,3,1],
         opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
         borderRadius:["20%","20%","50%","80%","20%"],
     }}
     transition={{
        duration:2.5,
     }}
    
    className='relative flex justify-center items-center'>
        <div className=' absolute border border-[#333333] rounded-full h-[200px] w-[200px]
         mt-52 animate-pulse opacity-20 '/>
        <div className='rounded-full border border-[#333333] h-[300px] w-[300px]
        absolute mt-52 opacity-10  animate-pulse'/>
        <div className=' rounded-full border border-[#F7AB] h-[500px] w-[500px]
        absolute mt-52 animate-pulse opacity-20'/>
      
       
    </motion.div>
  )
}


{/* <motion.div
initial={{
    opacity:0,
}}
animate={{
    scale:[1,2,2,3,1],
    opacity:[0.1,0.2,0.4,0.2,0.1,0.6],
    borderRadius:["20%","20%","50%","70%","20"],
}}
transition={{
    duration:2.5,
}} */}
