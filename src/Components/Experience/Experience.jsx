import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "./Ecards";
import { experiences } from "../BIO/Bio";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center relative z-10 p-10 md:p-0"
    >
      <div className="relative flex flex-col items-center w-full max-w-5xl p-20 gap-3">
        <h1 className="text-4xl font-semibold text-center mt-5 text-primary md:mt-3 md:text-3xl">
          Experience
        </h1>
        <p className="text-lg text-center max-w-3xl text-secondary md:text-base">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
        <div className="w-full max-w-4xl mt-2 flex flex-col items-center justify-center gap-3">
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.title}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: "#FFA500" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent className="py-3 px-2">
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
