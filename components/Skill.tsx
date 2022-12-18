import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  skill:Skill;
  directionLeft?:boolean;
}

 function Skill({ skill, directionLeft}: Props) {
  return (
    <div className='cursor pointer flex group relative 
    xl:top-[100px]  top-10 '>
      <motion.img
      initial={{
        x: directionLeft ? -200:200,
        opacity:0
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      transition={{
        duration:1
      }}

      src={urlFor(skill?.image).url()}
      className='rounded-full w-20 h-20 object-cover border border-gray-500
      xl:h-[100px] xl:w-[100px]  md:h-[180px] md:w-[180px] filter group-hover:grayscale transition duration-100 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80
      transition duration-100 ease-in-out group-hover:bg-white 
       h-20 w-20 xl:h-[100px] xl:w-[100px] md:h-[180px] md:w-[180px] rounded-full
       z-0 '>
      <div className='flex items-center justify-center h-full'>
        <p className='font-bold text-black opacity-20 text-2xl'>{skill.progress}%</p>
      </div>
      </div>
      
    </div>
  );
}

export default Skill;