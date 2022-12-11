import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1.5
    }}

    
    
    className=' h-[800px]  xl:h-[800px] md:h-screen flex flex-col relative
    text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
    mx-auto items-center'>
        <h3 className='uppercase tracking-[18px] absolute top-24 text-gray-500 
       text-sm  xl:text-2xl  md:text-2xl xl:tracking-[20px] md:tracking-[20px] '>about</h3>

        <motion.img
        initial={{
          x:-200, 
          opacity:0
        }}
        whileInView={{
          x:0,
          opacity:1
        }}
        viewport={{
          once:true
        }}
        transition={{
          duration:1.2
        }}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd0VutixWxEt4pCmcV71JtmJt01tbaiPBBQ&usqp=CAU'
        className='mt-40   flex-shrink-0 w-56 h-56 rounded-full object-cover
      md:rounded-lg md:w-[250px] md:h-[300px] xl:w-[450px] xl:h-[400px] xl:mt-[40px] md:mb-20'
        />

        <div className='space-y-8 px-0 md:px-10 '>
          <h4 className='text-sm font-semibold xl:text-4xl md:text-2xl mt-[-60px]'>A little <span className='underline decoration-[#F7A]/40'>background</span> about me</h4>
          <p className='text-base xl:text-2xl md:text-2xl font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat quod corrupti, illo magni amet dolor omnis, sunt eum optio earum adipisci. Expedita rerum corrupti odio a culpa? Veniam, ipsum!</p>
        </div>
        
    </motion.div>
  )
}