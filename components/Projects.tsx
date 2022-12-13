import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"

type Props = {};

export default function ({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
    flex flex-col justify-evenly mx-auto max-w-full md:flex-row items-center z-0"
    >
      <h3
        className="uppercase text-gray-500 tracking-[18px]
        md:tracking-[20px] xl:tracking-[20px] text-sm
        md:text-2xl xl:text-2xl absolute top-[25%] xl:top-[27%] md:top-[22%] "
      >
        Projects
      </h3>

      {/*All projects*/}
      <div
        className="relative w-full flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatory z-20 xl:top-[8%] md:top-[2%] top-[4%] 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB]/80 scrollbar-thin"
      >
        {projects.map((project, i) => (
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQ_bRzbHJvfkiPMJ_2JVgjoDsAyDwFBYKgg&usqp=CAU"
              className="xl:w-[500px] md:w-[1000px] object-cover "
            />

            <div className="space-y-3 max-w-6xl px-0">
              <h4 className="text-[15px] xl:text-[2xl] md:text-[28px] font-semibold text-center">
                <span className="underline decoration-[#F7AB]/50">
                  Case study of {i + 1} of {projects.length}:
                </span> &nbsp;
                Uber Clone
              </h4>

               <div>
                <p className="text-center md:text-left md:text-[25px] xl:text-[20px] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                  but also the leap into electronic typesetting, remaining essentially unchanged. </p>
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
