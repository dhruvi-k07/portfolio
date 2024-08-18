import React, { useState } from 'react';

const education = [
  {
    degree: "Master of Applied Computing (CO-OP)",
    institution: "University of Windsor, Windsor, ON",
    dates: "Sep 2023 - Dec 2024",
    details: "Relevant coursework: Machine Learning, Cloud Computing, Advanced Algorithms."
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Birla Vishvakarma Mahavidyalaya, Anand, Gujarat, India",
    dates: "Jun 2018 - Jun 2022",
    details: "Relevant coursework: Data Structures, Operating Systems, Database Management."
  }
];

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="education" className="scroll-margin-top-20 pt-20 py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Education</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            <ul className="space-y-4">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className={`p-4 cursor-pointer ${index === activeTab ? 'bg-custom-blue text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}
                  onClick={() => setActiveTab(index)}
                >
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-sm">{edu.dates}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-3/4 md:pl-8 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{education[activeTab].degree}</h3>
              <p className="text-lg text-gray-600 mb-2">{education[activeTab].institution}</p>
              <p className="text-sm text-gray-500 mb-4">{education[activeTab].dates}</p>
              <p className="text-md text-gray-700">{education[activeTab].details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
