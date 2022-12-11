import React from 'react'
import { motion } from "framer-motion"
type Props = {
  directionLeft?:boolean;
}

export default function 
({directionLeft}: Props) {
  return (
    <div className='cursor pointer flex group relative 
    xl:top-[220px]  top-40 '>
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

      src='https://cdn-icons-png.flaticon.com/128/246/246185.png'
      className='rounded-full w-20 h-20 object-cover border border-gray-500
      xl:h-[100px] xl:w-[100px]  md:h-[180px] md:w-[180px] filter group-hover:grayscale transition duration-100 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80
      transition duration-100 ease-in-out group-hover:bg-white 
       h-20 w-20 xl:h-30 xl:w-30 md:h-30 md:w-30 rounded-full
       z-0 '>
      <div className='flex items-center justify-center h-full'>
        <p className='font-bold text-black opacity-20 text-2xl'>100%</p>
      </div>
      </div>
      
    </div>
  )
}