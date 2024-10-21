import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education Background
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Development"
            subTitle="Uncommon.org (2024)"
            result="Ongoing"
            des="Currently enrolled in a year-long software development program at Uncommon.org, building practical skills in full-stack development."
          />
          <ResumeCard
            title="11 O' Levels"
            subTitle="Mufakose 1 High School (Completed)"
            result="Achieved"
            des="Completed 11 O'Levels, including Mathematics, English, and Sciences, at Mufakose 1 High School."
          />
        </div>
      </div>
      {/* Job Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Youth Coding Instructor"
            subTitle="Uncommon.org (2024)"
            result="Harare, Zimbabwe"
            des="Teaching Scratch and Woof.js to primary and secondary students as part of Uncommon.org's youth coding initiative."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
