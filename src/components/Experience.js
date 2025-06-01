import React, { useState } from 'react';

const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Freelance Software Development Engineer (SDE)",
      company: "Agentiiv",
      dates: "Jan 2025 - March 2025",
      technologies: "ReactJS, NodeJS, ExpressJS, MongoDB, AWS, GIT, JIRA, CI/CD Pipelines",
      responsibilities: [
        "Collaborated directly with CEOs and CTOs to design, develop, and maintain a cutting-edge platform using ReactJS for the frontend and Node.js for the backend.",
        "Engineered robust RESTful APIs to ensure seamless integration and optimal performance.",
        "Established and managed efficient CI/CD pipelines, streamlining deployment processes and continuous improvement of the platform.",
      ]
    },
    {
      role: "Software Development Engineer (SDE)",
      company: "SocialPilot Solutions LLP, Lewes, Delaware, United States",
      dates: "Dec 2021 - Dec 2024",
      technologies: "ReactJS, NodeJS, ExpressJS, MongoDB, AWS, GIT, JIRA, CI/CD Pipelines",
      responsibilities: [
        "Spearheaded the development of innovative web and mobile solutions, implementing targeted UI/UX enhancements with ReactJS and React Native.",
        "Developed and maintained RESTful APIs with Node.js and MongoDB, ensuring robust backend services and seamless data exchange.",
        "Managed Git version control and led code reviews to maintain high-quality standards.",
        "Key player in the migration to React 18, driving the adoption of new features and optimizations that enhanced application performance and scalability.",
        "Led initiatives for bug resolution and code refactoring, improving application stability and facilitating the timely delivery of high-impact projects.",
        "Collaborated with the backend team to design and implement efficient database schemas in MongoDB and integrate third-party APIs.",
        "Played a crucial role in setting up and managing CI/CD pipelines on AWS, ensuring smooth and automated deployments."
      ]
    },
    {
      role: "Software Developer",
      company: "Semper8 International Ltd, Toronto, ON, Canada",
      dates: "Sept 2024 - Dec 2024",
      technologies: "NestJS, React Native, Redis, AWS, GIT, CI/CD Pipelines, PayPal API",
      responsibilities: [
        "Developed and maintained scalable backend services using NestJS, Redis, and AWS to optimize performance and improve system reliability.",
        "Integrated PayPal for seamless payment processing, enhancing user experience and streamlining transaction workflows.",
        "Set up and managed CI/CD pipelines for automated deployment, ensuring smooth and efficient release cycles.",
        "Collaborated with cross-functional teams to build and maintain APIs, improving backend functionality and supporting mobile applications built on React Native.",
      ]
    },
    {
      role: "Website Developer",
      company: "University of Windsor, Windsor, ON, Canada",
      dates: "Sept 2024 - Dec 2024",
      technologies: "Wordpress, PHP, MySQL",
      responsibilities: [
        "Collaborated with Professor Catherine’s research lab to develop a custom website, focusing on specific requirements and ensuring alignment with academic objectives.",
        "Gained valuable experience in requirement gathering, translating research needs into a functional and user-friendly web platform.",
        "Utilized WordPress, PHP, and MySQL for custom development, enabling dynamic content management and seamless database integration.",
        "Worked closely with the research team to ensure the website accurately represents the lab's mission and research outputs.",
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="scroll-margin-top-20 pt-20 py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Professional Experience</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            <ul className="space-y-4">
              {experiences.map((experience, index) => (
                <li
                  key={index}
                  className={`p-4 cursor-pointer ${index === activeTab ? 'bg-custom-blue text-white' : 'bg-gray-100 text-gray-700'} rounded-lg`}
                  onClick={() => setActiveTab(index)}
                >
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-sm">{experience.dates}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-3/4 md:pl-8 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{experiences[activeTab].role}</h3>
              <p className="text-lg text-gray-600 mb-2">{experiences[activeTab].company}</p>
              <p className="text-sm text-gray-500 mb-4">{experiences[activeTab].dates}</p>
              <p className="text-md text-gray-700 mb-4"><strong>Technologies:</strong> {experiences[activeTab].technologies}</p>
              <ul className="list-disc list-inside text-gray-700">
                {experiences[activeTab].responsibilities.map((responsibility, i) => (
                  <li key={i} className="mb-2">{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
