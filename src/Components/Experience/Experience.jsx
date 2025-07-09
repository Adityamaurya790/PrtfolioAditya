import React from "react";

const experiences = [
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    role: "Full Stack Developer Intern",
    company: "Codec Technologies India",
    date: "June 2025 – Present",
    desc: (
      <>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            Gaining hands-on experience in full-stack web development, covering
            the complete software development lifecycle.
          </li>
          <li>
            Contributing to the development of industry-standard projects using
            the MERN stack with real-time deployment.
          </li>
          <li>
            Collaborating with senior developers in an Agile setup to build,
            integrate, and optimize scalable web applications.
          </li>
        </ul>
      </>
    ),
    skills: [
      "JavaScript",
      "React",
      "NodeJs",
      "MongoDB",
      "RESTful APIs",
      "DevOps",
      "CI/CD",
    ],
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    role: "Full Stack Developer",
    company: "Programming Pathshala",
    date: "June 2023 - July 2023",
    desc: "Worked on the frontend of the web application using ReactJS, NodeJS and MongoDB for Database.",
    skills: ["ReactJS", "NodeJs", "HTML", "CSS", "JavaScript", "MongoDB"],
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    role: "Video Editor",
    company: "Self Placed",
    date: "June 2020 - Present",
    desc: "I worked on various video editing projects for cultural events, youtube and also created reels for creators.",
    skills: ["Wondershare Filmora", "Open Shot", "Clip Champ", "Canva"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 py-12 px-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Experience
        </h2>
        <p className="text-center text-lg text-gray-300 mb-10">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-orange-400 transform -translate-x-1/2 z-0 rounded"></div>
          <div className="flex flex-col gap-12 relative z-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Dot */}
                <div className="w-6 h-6 bg-gray-900 border-4 border-purple-500 rounded-full z-10 mb-2"></div>
                {/* Card */}
                <div className="w-full sm:w-4/5 md:w-3/4 bg-gray-800 border border-purple-500 rounded-xl shadow-lg p-6 mx-auto text-white relative">
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-12 h-12 rounded-xl bg-black object-contain"
                    />
                    <div>
                      <div className="text-xl font-bold">{exp.role}</div>
                      <div className="text-base text-gray-300">
                        {exp.company}
                      </div>
                      <div className="text-sm text-gray-400">{exp.date}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-base text-gray-200">
                    {typeof exp.desc === "string" ? exp.desc : exp.desc}
                  </div>
                  <div className="mt-3">
                    <span className="font-semibold text-purple-400">
                      Skills:
                    </span>
                    <ul className="flex flex-wrap gap-2 mt-1">
                      {exp.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-purple-700/30 px-3 py-1 rounded text-sm text-purple-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
