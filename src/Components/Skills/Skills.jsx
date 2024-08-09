import React from "react";
import { skills } from "../BIO/Bio";
const Skills = () => {
  return (
    <div
      id="skills"
      className="flex justify-center items-baseline relative   w-full h-screen bg-gray-900"
    >
      <div className="relative flex flex-col items-center w-full max-w-5xl gap-3 text-white">
        <div className="text-4xl font-semibold text-center mt-5  dark:text-primary md:mt-3 md:text-3xl">
          Skills
        </div>
        <div className="text-lg text-center max-w-3xl text-secondary dark:text-secondary md:text-base">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </div>
        <div className="w-full flex  mt-7 gap-7 justify-center sm-wrap">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-xl bg-card border border-purple-500 shadow-lg rounded-lg p-5 md:max-w-lg md:p-3 sm:max-w-xs sm:p-2"
            >
              <h2 className="text-2xl font-semibold text-center text-secondary mb-5 dark:text-secondary">
                {skill.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-3 mb-5">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center gap-2 border border-purple-500 rounded-md p-3 text-primary text-base dark:text-primary md:text-sm md:p-2 sm:text-sm sm:p-1"
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
