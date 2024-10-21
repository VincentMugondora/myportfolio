import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Youth Coding Instructor"
            subTitle="Uncommon.org (2023 - Present)"
            result="Zimbabwe"
            des="Teaching primary and secondary school students how to code using Scratch and Woof.js."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Freelance (2023)"
            result="Zimbabwe"
            des="Developed a full-stack social media app, focusing on user engagement and real-time interactions."
          />
          <ResumeCard
            title="E-commerce App Developer"
            subTitle="Freelance (2023)"
            result="Zimbabwe"
            des="Built an e-commerce platform with seamless user experience, integrating payment systems and inventory management."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
