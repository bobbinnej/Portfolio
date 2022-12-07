import React from 'react'
import { motion } from "framer-motion"
import ExperienceCards from './ExperienceCards'
type Props = {}

export default function Experience({}: Props) {
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
     className='h-screen relative flex flex-col items-center
    overflow-hidden text-left md:flex-row max-w-full px-10 mx-auto 
    justify-evenly  '>
       
        <h3 className='text-gray-500 tracking-[18px] absolute top-24 uppercase
          text-sm  xl:text-2xl  md:text-2xl xl:tracking-[20px] md:tracking-[20px]'>Experience</h3>

       {/*Experience cards*/}
        <div className='w-full flex space-x-5 overflow-x-scroll p-10
        snap-x snap-mandatory '>
            <ExperienceCards/>
            <ExperienceCards/>
            <ExperienceCards/>
            <ExperienceCards/>
        </div>
    </motion.div>
  )
}