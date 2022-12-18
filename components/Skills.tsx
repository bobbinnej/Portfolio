import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import {Skill as SkillType}  from '../typings';
type Props = {
  skills:SkillType[];
};

export default function Skills({skills}: Props) {
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
      className=" xl:h-[600px] md:h-[1200px] h-[700px] relative flex flex-col xl:flex-row
    md:text-left text-center  justify-evenly xl:space-y-0
    mx-auto items-center"
    >
      <h3
        className="uppercase absolute tracking-[18px] text-gray-500 top-24
        text-sm  xl:text-2xl  md:text-2xl xl:tracking-[20px] md:tracking-[20px]"
      >
        skills
      </h3>

      <h3 className="top-36 absolute uppercase tracking-[3px]
      text-gray-500 text-sm ">Hover over a skill for current proficiency </h3>

      <div className="grid grid-cols-3 gap-3 md:gap-5 xl:gap-5
       md:grid-cols-3 xl:grid-cols-4">
        {skills?.slice(0,skills.length/2).map((skill)=>(
          <Skill key={skill._id} skill={skill}/>
        ))}

        {skills?.slice(skills.length/2).map((skill)=>(
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
        
       
      </div>
    </motion.div>
  );
}
