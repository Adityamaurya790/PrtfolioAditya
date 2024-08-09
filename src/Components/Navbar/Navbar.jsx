import React, { useState } from "react";
import { CgFontHeight } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
// import { Close } from '@mui/icons-material';
import { Bio } from "../BIO/Bio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white flex items-center">
            <CgFontHeight size="2.5rem" />
            <span className="ml-2 text-xl">Portfolio</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#skills" className="text-white hover:text-gray-300">
            Skills
          </a>
          <a href="#experience" className="text-white hover:text-gray-300">
            Experience
          </a>
          <a href="#projects" className="text-white hover:text-gray-300">
            Projects
          </a>
          <a href="#education" className="text-white hover:text-gray-300">
            Education
          </a>
        </div>
        <div className="hidden md:flex">
          <a
            href={"https://github.com/Adityamaurya790"}
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg animate-background-pan "
          >
            Github Profile
          </a>
        </div>
        <div className="md:hidden">
          <FaBars
            size="1.5rem"
            className="text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="flex flex-col items-center py-2 ">
            <a
              href="#about"
              className="text-white py-1"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white py-1"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-white py-1"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-white py-1"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-white py-1"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a
              href={Bio.github}
              target="_blank"
              className="bg-blue-500 text-white px-4 py-2 rounded my-2"
            >
              Github Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
