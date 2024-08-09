import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="w-[650px] border border-[#306EE8] shadow-lg p-3 justify-between relative overflow-hidden flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 md:w-[300px] md:p-2 md:gap-2">
      <div className="flex gap-3 w-full">
        <img
          src={experience.img}
          alt=""
          className="h-12 bg-black rounded-md mt-1 md:h-10"
        />
        <div className="flex flex-col w-full">
          <div className="text-lg font-semibold text-primary md:text-sm">
            {experience.role}
          </div>
          <div className="text-base font-medium text-secondary md:text-xs">
            {experience.company}
          </div>
          <div className="text-sm font-light text-secondary md:text-xs">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="w-full text-sm font-normal text-primary mb-2 md:text-xs">
        {experience?.desc && (
          <div className="overflow-hidden max-w-full text-ellipsis line-clamp-4 hover:overflow-visible hover:line-clamp-none">
            {experience?.desc}
          </div>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className="w-full flex gap-3 mt-[-10px]">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2">
                {experience?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="text-sm font-normal text-primary md:text-xs"
                  >
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a
          href={experience.doc}
          target="new"
          className="hidden h-16 w-fit bg-black rounded-md hover:cursor-pointer hover:opacity-80"
        >
          <img src={experience.doc} alt="" />
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
