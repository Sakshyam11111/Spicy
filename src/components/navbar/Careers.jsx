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

  const resources = [
    {
      title: "What Does a Data Analyst Do? Your 2024 Career Guide",
      description: "A data analyst collects, cleans, and interprets data sets in order to answer a question or solve a problem. They work in many industries, including business, finance, criminal justice, science, medicine, and government.",
      date: "May 26, 2024",
    },
    {
      title: "What is a Project Manager? A Career Guide",
      description: "A project manager is a professional who organizes, plans, and executes projects while working within restraints like budgets and schedules.",
      date: "May 24, 2024",
    },
    {
      title: "What Does a Web Developer Do? And How Do I Become One?",
      description: "A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.",
      date: "May 18, 2024",
    },
    {
      title: "What Does a UI Designer Do?",
      description: "Anytime you interact with a product or service, you have a user experience. This might entail navigating a mobile app, browsing a website, interacting with a physical product (like trying out a new running shoe), or taking advantage of a service (checking into a hotel or using public transportation, for example).",
      date: "September 14, 2014",
    },
    {
      title: "What Is Digital Marketing? Types, Skills, and Careers",
      description: "Digital marketing, or online marketing, is a form of advertising that uses the internet and digital technologies to connect with customers.",
      date: "September 16, 2024",
    },
    {
      title: "What Is a Data Scientist? Salary, Skills, and How to Become One",
      description: "Working as a data scientist can be intellectually challenging, analytically satisfying, and put you at the forefront of new technological advances. Data scientists have become more common and in demand, as big data continues to be increasingly important to the way organizations make decisions.",
      date: "March 15, 2024",
    },
    {
      title: "What Is Cybersecurity? Definition + Industry Guide",
      description: "Cybersecurity is the branch of technology that aims to protect computers, mobile devices, and information from malicious actors who want to gain unauthorized access to them or cause harm.",
      date: "July 9, 2024",
    },
    {
      title: "What Does a Software Developer Do? Career Overview + Outlook",
      description: "Software systems are an integral part of nearly every modern industry. As a result, you can pursue a software development career in almost any field that aligns with your interests or passions.",
      date: "March 22, 2024",
    },
  ];

  return (
    <div className="max-w-7xl container mx-auto p-6">
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
          <button className="border rounded-3xl px-2 hover:bg-gray-300 font-bold">Software Engineering & IT</button>
          <button className="border rounded-3xl px-2 hover:bg-gray-300 font-bold">Business</button>
          <button className="border rounded-3xl px-2 hover:bg-gray-300 font-bold">Sales & Marketing</button>
          <button className="border rounded-3xl px-2 hover:bg-gray-300 font-bold">Healthcare</button>
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

      {/* Career Resources Section */}
      <div className="mt-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Career Resources</h2>
        <div className="flex flex-wrap md:w-2/3 space-x-0 md:space-x-4 mb-6">
          <button className="bg-gray-500 rounded-3xl px-4 py-2 hover:bg-gray-600 text-white font-bold transition duration-200">General</button>
          <button className="border rounded-3xl px-2 hover:bg-gray-300 font-bold transition duration-200">Skills</button>
          <button className="border rounded-3xl px-2 hover:bg-gray-300 font-bold transition duration-200">Career advice</button>
          <button className="border rounded-3xl px-2 hover:bg-gray-300 font-bold transition duration-200">Career path planning</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-200">
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <p className="text-sm text-gray-500 mt-4">{resource.description}</p>
              <p className="text-sm text-gray-500 mt-10">{resource.date}</p>
            </div>
          ))}
        </div>
        <button className="border border-purple-500 text-purple-500 rounded-2xl px-3 py-3 hover:bg-purple-600 hover:text-white font-bold mt-6 transition duration-200">Show more</button>
      </div>
    </div>
  );
};

export default Careers;