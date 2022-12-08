import React from 'react'

type Props = {}

export default function 
({}: Props) {
  return (
    <div className=' h-[1000px]  xl:h-[1000px] md:h-screen relative flex flex-col justify-evenly mx-auto
    overflow-hidden max-w-full text-left md:flex-row items-center z-0'>
        <h3 className='uppercase text-gray-500 tracking-[18px]
        md:tracking-[20px] xl:tracking-[20px] text-sm
        md:text-2xl xl:text-2xl'>Projects</h3>

        <div className='w-full absolute  top-[70%] bg-[#F7AB]/10
        left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}