import React from 'react';
import Image1 from '../../assets/d1.png'; 
import Image2 from '../../assets/d2.png';
import Image3 from '../../assets/d3.png';
import Image4 from '../../assets/d4.png';
import Image5 from '../../assets/d5.png';
import Image6 from '../../assets/d6.png';
import Image7 from '../../assets/d7.png';
import Image8 from '../../assets/d8.png';

const Careers = () => {
  const roles = [
    {
      title: "Data Analyst",
      description: "If you like analyzing data to find insights, creating reports, and working with spreadsheets and databases.",
      credentials: "Data Analyst",
      certification: "Google Data Analytics",
      imageUrl: Image1, 
    },
    {
      title: "Data Scientist",
      description: "If you like analyzing complex large datasets to uncover insights, drive action, and inform business strategies.",
      credentials: "Data Science",
      certification: "IBM Data Science",
      imageUrl: Image2, 
    },
    {
      title: "Cyber Security Analyst",
      description: "If you like protecting networks and data from cyber threats, analyzing vulnerabilities, and developing security protocols.",
      credentials: "Cyber Security",
      certification: "Google Cybersecurity",
      imageUrl: Image3, 
    },
    {
      title: "Digital Marketing Specialist",
      description: "If you enjoy creating marketing campaigns, analyzing data, and using tools like Google Analytics.",
      credentials: "Digital Marketing",
      certification: "Google Digital Marketing & E-Commerce",
      imageUrl: Image4, 
    },
    {
      title: "Machine Learning Specialist",
      description: "A Machine Learning Engineer builds and optimizes algorithms that enable computers to learn from data, using large datasets and neural networks.",
      credentials: "Machine Learning",
      certification: "Machine Learning",
      imageUrl: Image5, 
    },
    {
      title: "Project Manager",
      description: "A Project Manager plans and coordinates projects, ensuring on-time, within-budget delivery while managing resources, risks, and communication.",
      credentials: "Project Management",
      certification: "Google Project Management",
      imageUrl: Image6, 
    },
    {
      title: "Social Media Strategist / Specialist",
      description: "A Social Media Strategist develops and executes campaigns to boost brand awareness and engagement while analyzing metrics and optimizing content.",
      credentials: "Social Media Marketing",
      certification: "Meta Social Media Marketing",
      imageUrl: Image7, 
    },
    {
      title: "User Interface / User Experience (UI/UX) Designer",
      description: "A UI/UX Designer creates and refines digital interfaces to be user-friendly and visually appealing, with skills in UI design and UX research.",
      credentials: "UI/UX Design",
      certification: "Google UX Design",
      imageUrl: Image8, 
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2">Explore roles</h2>
      <p className="text-lg mb-4">Advance in your career with recognized credentials across levels. Choose from 60 roles.</p>
      
      <div className="flex flex-col md:flex-row items-center mb-4 space-x-0 md:space-x-4">
        <select className="border rounded-3xl p-2 mb-4 md:mb-0 md:w-1/3">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <div className="flex flex-wrap md:w-2/3 space-x-0 md:space-x-4">
          <button className="bg-gray-500 rounded-3xl px-4 py-2 hover:bg-gray-600 text-white font-bold">All</button>
          <button className="bg-gray-300 rounded-3xl px-4 py-2 hover:bg-gray-400 font-bold">Software Engineering & IT</button>
          <button className="bg-gray-300 rounded-3xl px-4 py-2 hover:bg-gray-400 font-bold">Business</button>
          <button className="bg-gray-300 rounded-3xl px-4 py-2 hover:bg-gray-400 font-bold">Sales & Marketing</button>
          <button className="bg-gray-300 rounded-3xl px-4 py-2 hover:bg-gray-400 font-bold">Data Science & Analytics</button>
          <button className="bg-gray-300 rounded-3xl px-4 py-2 hover:bg-gray-400 font-bold">Healthcare</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {roles.map((role, index) => (
          <div key={index} className="border-gray-200 rounded-lg overflow-hidden bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src={role.imageUrl} alt={role.title} className="w-full h-40 object-cover transition-transform duration-300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{role.title}</h3>
              <p className="text-gray-600 mt-2">{role.description}</p>
              <p className="font-bold mt-4">Credentials:</p>
              <p>{role.credentials}</p>
              <p className="text-blue-500">{role.certification}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;