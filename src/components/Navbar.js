import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          Dhruvi Kunvarani
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400 font-bold"
            className="hover:text-blue-400 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400 font-bold"
            className="hover:text-blue-400 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400 font-bold"
            className="hover:text-blue-400 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400 font-bold"
            className="hover:text-blue-400 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400 font-bold"
            className="hover:text-blue-400 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400 font-bold"
            className="hover:text-blue-400 cursor-pointer"
          >
            Certificates
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400 font-bold"
            className="hover:text-blue-400 cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="outline-none focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-gray-700 text-blue-400 font-bold"
            onClick={toggleMenu}
            className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-gray-700 text-blue-400 font-bold"
            onClick={toggleMenu}
            className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-gray-700 text-blue-400 font-bold"
            onClick={toggleMenu}
            className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-gray-700 text-blue-400 font-bold"
            onClick={toggleMenu}
            className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-gray-700 text-blue-400 font-bold"
            onClick={toggleMenu}
            className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-gray-700 text-blue-400 font-bold"
            onClick={toggleMenu}
            className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
          >
            Certificates
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="bg-gray-700 text-blue-400 font-bold"
            onClick={toggleMenu}
            className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
