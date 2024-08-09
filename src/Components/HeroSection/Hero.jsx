import React from "react";
import HeroImg from "../Assets/Aditya.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../BIO/Bio";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="relative w-full h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto px-4">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-white space-y-4">
          <h1 className="text-4xl font-bold">
            Hi, I am <br /> {Bio.name}
          </h1>
          <div className="flex items-center text-xl">
            I am a
            <span className="ml-2 text-blue-400">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="text-lg">{Bio.description}</p>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400 transition animate-background-pan "
          >
            Check Resume
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            className="md:w-2/3 lg:w-1/2 xl:w-2/3 rounded-full shadow-lg bg-card border border-purple-500 "
            src={HeroImg}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
