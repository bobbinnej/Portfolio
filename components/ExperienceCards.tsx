import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCards({ experience }: Props) {
  return (
    <article
      className="flex flex-col  rounded-lg space-y-7 flex-shrink-0
  snap-center p-10 bg-[#292929]  cursor-pointer transition:opacity duration-200
  overflow-hidden w-[140%] h-[720px]   xl:w-[380px] 
   xl:h-[700px] md:w-[760px]  md:h-[600px]  xl:px-[0]"
    >
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(experience?.companyImage).url()}
        className="h-28 w-28 rounded-full object-cover xl:w-[140px] xl:h-[140px] object-center 
        md:mx-[300px] xl:mx-[40px]"
        alt="company logo"
      />

      <div className=" md:mx-[50px] md:flex-wrap xl:flex-wrap flex-wrap ">
        {/*Company name i worked for*/}
        <h4 className=" md:text-3xl xl:text-2xl text-sm  ">{experience?.company}</h4>
        <p className="text-[#F7AB] md:text-[20px]">{experience?.jobTitle}</p>
        {/**Start and end dates of working for that company */}
        <p className="uppercase py-3 text-sm text-gray-300 md:text-[20px]">
         {new Date(experience.dateStarted).toDateString()} -{""}
         {experience.isCurrentlyWorkingHere ? "Present" : 
         new Date(experience.dateEnded).toDateString()}
        </p>
        {/**Tech used in that company i worked for */}
        <div className="flex space-x-2 my-2">
         
           {experience.technologies.map((technology) =>(
           <img
           key={technology._id}
           src={urlFor(technology.image).url()}
            className="h-8 w-8 xl:h-[12%] xl:w-[12%] md:h-[8%] md:w-[8%]  rounded-full object-cover"
          />
            ))} 
        </div>

         <ul className="list-disc space-y-2 ml-5 xl:text-lg md:text-[20px] text-sm flex-wrap
       ">
        {experience.points.map((point, i)=>(
          <li key={i}>{point}</li>
        ))}
        </ul> 
      </div>
    </article>
  );
}
