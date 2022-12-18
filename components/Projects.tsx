import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects:Project[];
};

export default function ({projects}: Props) {
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
      className=" h-[1000px]  xl:h-[1000px] md:h-[1500px] relative 
    flex flex-col justify-evenly mx-auto max-w-full md:flex-row items-center z-0
    "
    >
      <h3
        className="uppercase text-gray-500 tracking-[18px]
        md:tracking-[20px] xl:tracking-[20px] text-sm
        md:text-2xl xl:text-2xl absolute top-[25%] xl:top-[26%] md:top-[22%] "
      >
        Projects
      </h3>

      {/*All projects*/}
      <div
        className="relative w-full flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatory z-20 xl:top-[8%] md:top-[2%] top-[4%] 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB]/80 scrollbar-thin"
      >
        {projects?.map((project, i) => (
          <div
            className="flex-shrink-0 snap-center w-screen space-y-5
            md:space-y-10
          flex flex-col items-center justify-center p-20 h-screen"
          >
            <motion.img
            
            initial={{
              y:-300,
              opacity:0
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:1.2
            }}
            viewport={{
              once:true
            }}
              src={urlFor(project?.image).url()}
              className="xl:w-[500px] md:w-[1000px] object-cover "
            />

            <div className="space-y-3 max-w-6xl px-0">
              <h4 className="text-[15px] xl:text-[2xl] md:text-[28px] font-semibold text-center">
                <span className="underline decoration-[#F7AB]/50">
                  Case study of {i + 1} of {projects.length}:
                </span> &nbsp;
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology)=>(
                  <img
                  key={technology._id}
                  src={urlFor(technology.image).url()}
                  alt="technologies used"
                  className="h-5 w-5 xl:h-[30px] xl:w-[30px]"/>
                ))}
              </div>

              <div className="text-gray-400 cursor-pointer md:text-[20px] xl:text-[20px] text-[12px]">
               <span className="text-[#F7AB]">Link:</span> &nbsp; 
            
               {project?.linkToBuild}
               
              </div>

               <div>
                <p className="text-center md:text-left md:text-[25px] xl:text-[20px] text-sm">
                
                  {project?.summary} </p>
               </div>
            </div>
          </div>
        ))}
        ;
      </div>

      <div
        className="w-full absolute top-[38%] left-0 h-[400px] bg-[#F7AB]/5
      skew-y-12"
      ></div>

      <div
        className="w-full absolute top-[38%] left-0 h-[400px] bg-[#F7AB]/5
      -skew-y-12"
      ></div>
    </motion.div>
  );
}
