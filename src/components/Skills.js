import React from 'react';
import { FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaAws, FaDatabase, FaCubes, FaProjectDiagram } from 'react-icons/fa'; // Import icons from react-icons

const skills = [
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    description: "Expert in ES6+ syntax and asynchronous programming."
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-500" />,
    description: "Advanced in Python, used for web development and data analysis."
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-500" />,
    description: "Advanced in Java, with experience in building scalable applications."
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-blue-500" />,
    description: "Expert in ReactJS for building modern, responsive UIs."
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs className="text-green-500" />,
    description: "Advanced in NodeJS, experienced in server-side scripting."
  },
  {
    name: "AWS",
    icon: <FaAws className="text-orange-500" />,
    description: "Advanced in AWS cloud services, including EC2, S3, and Lambda."
  },
  {
    name: "Databases",
    icon: <FaDatabase className="text-blue-600" />,
    description: "Experienced in MongoDB, MySQL, and PostgreSQL."
  },
  {
    name: "Microservices",
    icon: <FaCubes className="text-purple-500" />,
    description: "Experienced in designing and deploying microservices architectures."
  },
  {
    name: "Design Architecture",
    icon: <FaProjectDiagram className="text-teal-500" />,
    description: "Skilled in designing software architecture for scalable and maintainable applications."
  }
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="scroll-margin-top-20 pt-20 py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-6xl mb-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
