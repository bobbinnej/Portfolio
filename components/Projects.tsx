import React from 'react'

type Props = {}

export default function 
({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <div className=' h-[1000px]  xl:h-[1000px] md:h-screen relative flex flex-col justify-evenly mx-auto
    overflow-hidden max-w-full text-left md:flex-row items-center z-0'>

        <h3 className='uppercase text-gray-500 tracking-[18px]
        md:tracking-[20px] xl:tracking-[20px] text-sm
        md:text-2xl xl:text-2xl absolute'>Projects</h3>

        {/*all projects */}
        <div className='relative  w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20 top-[24%] space-x-6  justify-center'>
        {projects.map((project)=>(
          <div className=' flex-shrink-0 snap-center flex flex-col items-center '>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw4r9cbw1D4ms8WqwYKs5mLUgF-j0C7SVbw&usqp=CAU'
             alt=''/>
            <div>
              <h4>Netflix Clone 1</h4>
            </div>
          </div>
        
        ))}
          
        </div>

    </div>
  )
}