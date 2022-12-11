import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
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
      className=" xl:h-[400px] md:h-[1000px] h-[600px] relative flex flex-col xl:flex-row
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
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
       
      </div>
    </motion.div>
  );
}
