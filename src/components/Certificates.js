import React from 'react';
import './FlipCard.css'; // Include the enhanced CSS for the flip effect

const certificates = [
  {
    title: "Certified Cloud Practitioner, AWS",
    organization: "AWS",
    date: "April 2024",
    details: "This certification validates cloud fluency and foundational AWS knowledge.",
    link: "#"
  },
  {
    title: "Introduction to Spark SQL and DataFrames",
    organization: "LinkedIn Learning",
    date: "February 2024",
    details: "An introductory course on Spark SQL and DataFrames for big data processing.",
    link: "#"
  },
  {
    title: "Learning Hadoop",
    organization: "LinkedIn Learning",
    date: "February 2024",
    details: "A foundational course on Hadoop architecture and its applications in big data.",
    link: "#"
  },
  {
    title: "Microservices: Design Patterns",
    organization: "LinkedIn Learning",
    date: "December 2023",
    details: "This course covers common design patterns for building microservices.",
    link: "#"
  },
  {
    title: "Web Security: OAuth and OpenID Connect",
    organization: "LinkedIn Learning",
    date: "December 2023",
    details: "This course covers security protocols and practices for web authentication.",
    link: "#"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    organization: "Udemy",
    date: "August 2021",
    details: "A course focused on understanding and implementing key algorithms and data structures in JavaScript.",
    link: "#"
  },
  {
    title: "Neural Networks and Deep Learning",
    organization: "Coursera",
    date: "June 2020",
    details: "This course introduces the concepts and techniques used in deep learning and neural networks.",
    link: "#"
  },
  {
    title: "Architecting with Google Compute Engine",
    organization: "Coursera",
    date: "April 2020",
    details: "A course on designing and implementing architectures using Google Cloud's Compute Engine.",
    link: "#"
  },
  {
    title: "Object-Oriented Programming in C++",
    organization: "NPTEL",
    date: "October 2019",
    details: "This course provides a deep dive into object-oriented programming concepts using C++.",
    link: "#"
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="scroll-margin-top-20 pt-20 py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Certificates & Technical Training</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="enhanced-flip-card">
              <div className="enhanced-flip-card-inner">
                <div className="enhanced-flip-card-front p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{certificate.title}</h3>
                  <p className="text-gray-600">{certificate.organization}</p>
                  <p className="text-sm text-gray-500">{certificate.date}</p>
                </div>
                <div className="enhanced-flip-card-back p-6 rounded-lg shadow-lg">
                  <p className="mb-4">{certificate.details}</p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-500 px-4 py-2 rounded-full shadow hover:bg-gray-200 transition-colors duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
