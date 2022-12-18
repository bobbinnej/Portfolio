import React from 'react'
import { motion } from "framer-motion"
import ExperienceCards from './ExperienceCards'
import { Experience } from '../typings'
type Props = {
  experiences:Experience[];
}

export default function WorkExperience({experiences}: Props) {
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
     className=' h-[1000px]  xl:h-[1000px] md:h-[1000px] relative flex flex-col items-center
    overflow-hidden text-left md:flex-row max-w-full px-8 mx-auto 
    justify-evenly  '>
       
        <h3 className='text-gray-500 tracking-[18px] absolute top-24 xl:top-20 
          uppercase
          text-sm  xl:text-2xl  md:text-2xl xl:tracking-[20px] md:tracking-[20px]'>Experience</h3>

       {/*Experience cards*/}
        <div className='w-full flex space-x-5 overflow-x-scroll p-10
        snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 
        scrollbar-thumb-[#F7AB]/80 scrollbar-thin '>
           {experiences?.map(experience =>(
            <ExperienceCards key={experience._id} experience={experience}/>
           ))}
        </div>
    </motion.div>
  )
}