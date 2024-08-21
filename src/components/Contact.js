import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="scroll-margin-top-20 pt-20 py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Let's Stay in Touch</h2>
        <p className="text-lg mb-12 text-gray-700">If you want to know more about me, feel free to email me or connect with me on LinkedIn.</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Email Me Section */}
          <div className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-lg shadow-md w-full max-w-xs">
            <FaEnvelope className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Me</h3>
            <p className="text-gray-600 mb-4">I'm available for any queries or collaboration ideas. Let's connect!</p>
            <a
              href="mailto:dhruvikunvarani1404@gmail.com"
              className="bg-custom-blue text-white py-2 px-4 rounded-full shadow hover:bg-blue-700 transition-colors duration-300"
            >
              Send an Email
            </a>
          </div>
          
          {/* Connect on LinkedIn Section */}
          <div className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-lg shadow-md w-full max-w-xs">
            <FaLinkedin className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect on LinkedIn</h3>
            <p className="text-gray-600 mb-4">Let's network professionally and stay connected for future opportunities.</p>
            <a
              href="https://www.linkedin.com/in/dhruvi-kunvarani-31b550197/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-custom-blue text-white py-2 px-4 rounded-full shadow hover:bg-blue-800 transition-colors duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
