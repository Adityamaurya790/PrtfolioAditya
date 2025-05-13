import React, { useState } from "react";
import { CgFontHeight } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll
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
        <div className="hidden md:flex space-x-16">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={1000}
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={2000}
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex">
          <a
            href={"https://github.com/Adityamaurya790"}
            target="_blank"
            className=" inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400 transition animate-background-pan "
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
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white py-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              className="text-white py-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={1000}
              className="text-white py-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="text-white py-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={2000}
              className="text-white py-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
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
