import React from 'react';
import { FaLaptopCode, FaCloud, FaLightbulb } from 'react-icons/fa';

import Resume from '../assets/Resume.pdf'

const About = () => {
  return (
    <section id="about" className="scroll-margin-top-20 pt-20 py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">About Me</h2>
        <p className="text-xl text-center mb-12 text-gray-700">Full Stack Developer | Cloud Enthusiast | Lifelong Learner</p>
        <div className="flex flex-col md:flex-row items-start">
          {/* Key Highlights Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-custom-blue text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Over 3 years of experience in developing scalable, high-performance web applications using ReactJS, NodeJS, and cloud technologies.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Proficient in JavaScript, TypeScript, Python, and Java.</li>
                <li>Experienced in full-stack development with ReactJS, NodeJS, ExpressJS, and MongoDB.</li>
                <li>Strong background in cloud computing, CI/CD pipelines, and containerization (Docker, Kubernetes).</li>
              </ul>
            </div>
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaCloud className="text-custom-blue text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Cloud Expertise</h3>
              </div>
              <p className="text-gray-700">
                Extensive experience with AWS, GCP, and Azure, leveraging cloud infrastructure to build scalable and reliable applications.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-custom-blue text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-gray-700">
                Passionate about learning and adapting to new technologies, with a focus on machine learning, AI, and contributing to open-source projects.
              </p>
            </div>
          </div>
          
          {/* Detailed Biography Section */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-lg text-gray-700 mb-6">
                I am Dhruvi Kunvarani, a dedicated Full Stack Developer with a passion for creating high-performance, user-centric web applications. With over 3 years of experience in the tech industry, I specialize in both front-end and back-end development, focusing on delivering scalable solutions that meet business objectives.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey in technology has been driven by a strong commitment to continuous learning and adaptation. I thrive in Agile environments, where I collaborate with cross-functional teams to design, build, and deploy innovative products. My ability to translate complex business requirements into efficient, maintainable code has consistently resulted in successful project outcomes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Outside of work, I am deeply interested in the fields of machine learning and artificial intelligence. I often experiment with new technologies and contribute to open-source projects. My goal is to leverage my technical expertise and creative problem-solving skills to build products that make a meaningful impact on society.
              </p>
              <div className="text-center">
                <a
                  href={Resume}
                  alt="Resume"
                  className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                  download="Dhruvi Kunvarani Resume"
                >
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
