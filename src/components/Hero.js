import React from 'react';
import {ReactTyped} from 'react-typed';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/profileImage.JPG';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly	 relative z-10">
        <img
          src={profileImage}
          alt="Dhruvi Kunvarani"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-white mb-6 md:mb-0 md:mr-8"
        />
        <div className="md:w-1/2 text-center md:text-left relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dhruvi Kunvarani</h1>
          <ReactTyped
            className="text-xl md:text-2xl font-light mb-4"
            strings={[
              "Full Stack Developer",
              "Machine Learning Engineer",
              "DevOps Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p className="mb-6">
            Transforming ideas into reality through technology. With a focus on innovation, I build and deploy scalable web applications and machine learning models that solve real-world problems.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/dhruvikunvarani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/dhruvikunvarani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 text-3xl"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-8 mt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">3+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">15+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">5</h2>
              <p>Certifications</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-50 z-0"></div> {/* Optional overlay */}
    </section>
  );
};

export default Hero;
