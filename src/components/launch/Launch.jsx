import React, { useState } from 'react';
import Image1 from '../../assets/Project-management.png';
import Image2 from '../../assets/1060x596.png';
import Image3 from '../../assets/Karrim.png';
import Image4 from '../../assets/image-IBM.png';
import Image5 from '../../assets/digital marketer.jpg';
import Image6 from '../../assets/digitalmmmm.jpg';
import Image7 from '../../assets/UX designer.jpg';
import Image8 from '../../assets/Ux designernnn.jpg';
import Image9 from '../../assets/frontenddeveloper.jpg';
import Image10 from '../../assets/front-end-developer.jpg';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Launch = () => {
    const [selectedSection, setSelectedSection] = useState('Project Manager');

    const handleSectionChange = (event, section) => {
        event.preventDefault(); // Prevent default anchor behavior
        setSelectedSection(section); // Set the selected section
    };

    return (
        <div className="max-w-7xl mx-auto p-6 font-sans mt-20">
            <header className="flex flex-col items-start mb-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Launch a new career in as little as 6 months</h1>
                    <Link to='/careerlaunchsection' className="flex items-center ml-10 hover:underline">
                        View all roles <FaArrowRight className="ml-1" />
                    </Link>
                </div>
                <div className="mt-2 w-full">
                    <div className="flex space-x-4 border-b border-gray-300 pb-2">
                        <div>
                            <Link
                                to="#"
                                onClick={(event) => handleSectionChange(event, 'Project Manager')}
                                className={`text-lg font-semibold cursor-pointer ${selectedSection === 'Project Manager' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                            >
                                Project Manager
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="#"
                                onClick={(event) => handleSectionChange(event, 'Data Analyst')}
                                className={`text-lg cursor-pointer ${selectedSection === 'Data Analyst' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                            >
                                Data Analyst
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="#"
                                onClick={(event) => handleSectionChange(event, 'Digital Marketer')}
                                className={`text-lg cursor-pointer ${selectedSection === 'Digital Marketer' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                            >
                                Digital Marketer
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="#"
                                onClick={(event) => handleSectionChange(event, 'UX Designer')}
                                className={`text-lg cursor-pointer ${selectedSection === 'UX Designer' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                            >
                                UX Designer
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="#"
                                onClick={(event) => handleSectionChange(event, 'Front-End Developer')}
                                className={`text-lg cursor-pointer ${selectedSection === 'Front-End Developer' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                            >
                                Front-End Developer
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Project Manager Section */}
            {selectedSection === 'Project Manager' && (
                <section className="mt-6 flex border border-gray-200">
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-3xl font-bold">Project Manager</h2>
                        <p className="text-gray-500 mt-4">Oversee the planning and execution of projects to ensure they’re successful</p>
                        <h2 className="text-xl font-bold mt-10">Median Salary</h2>
                        <div className="flex flex-col space-y-4 mt-6">
                            <button className="bg-gray-300 w-52 text-gray-500 px-7 py-1 rounded-md transition">All occupations</button>
                            <button className="bg-purple-600 w-80 text-white px-7 py-1 rounded-md transition">Project Manager</button>
                        </div>
                        <hr className="my-6 border-t w-96 border-gray-300" />
                        <p className="text-gray-500">Job openings: ***</p>
                        <p className="text-gray-500 mt-4">Projected 10 year growth: ***</p>
                    </div>
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-2xl font-bold mt-10">Recommended Professional Certificates</h2>
                        <div className="flex space-x-4 mt-4">
                            <Link to="/projectmanager" className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image1} alt="Microsoft Project Management" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">Microsoft Project Management</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: Risk Management, Budgeting, Stakeholder Management, Planning...</p>
                                <p className="mt-2">4.7 ⭐ <span className="text-gray-500">(315 reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 4 months</p>
                            </Link>
                            <Link to="googleproject" className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image2} alt="Google Project Management" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">Google Project Management</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: Project Management, Change Management, Strategic Thinking, Career...</p>
                                <p className="mt-2">4.8 ⭐ <span className="text-gray-500">(114K reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 6 months</p>
                            </Link>
                        </div>
                        <p className="mt-6 flex justify-end">
                            <Link to="/certificates" className="text-black hover:underline flex items-center">
                                Explore all certificates <FaArrowRight className="ml-1" />
                            </Link>
                        </p>
                    </div>
                </section>
            )}

            {/* Data Analyst Section */}
            {selectedSection === 'Data Analyst' && (
                <section className="mt-6 flex border border-gray-200">
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-3xl font-bold">Data Analyst</h2>
                        <p className="text-gray-500 mt-4">Collect, organize, and transform data to make informed decisions</p>
                        <h2 className="text-xl font-bold mt-10">Median Salary</h2>
                        <div className="flex flex-col space-y-4 mt-6">
                            <button className="bg-gray-300 w-52 text-gray-500 px-7 py-1 rounded-md transition">All occupations</button>
                            <button className="bg-purple-600 w-80 text-white px-7 py-1 rounded-md transition">Data Analyst</button>
                        </div>
                        <hr className="my-6 border-t w-96 border-gray-300" />
                        <p className="text-gray-500">Job openings: ***</p>
                        <p className="text-gray-500 mt-4">Projected 10 year growth: ***</p>
                    </div>
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-2xl font-bold mt-10">Recommended Professional Certificates</h2>
                        <div className="flex space-x-4 mt-4">
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image3} alt="Google Data Analytics" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">Google Data Analytics</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: Data Analysis, SQL, Data Visualization, Data Cleansing</p>
                                <p className="mt-2">4.7 ⭐ <span className="text-gray-500">(152k reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 6 months</p>
                            </div>
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image4} alt="IBM Data Analyst" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">IBM Data Analyst</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: Generative AI, Data Science, Spreadsheet, Data Analysis, Microsoft Excel</p>
                                <p className="mt-2">4.8 ⭐ <span className="text-gray-500">(22K reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 4 months</p>
                            </div>
                        </div>
                        <p className="mt-6 flex justify-end">
                            <Link to="/certificates" className="text-black hover:underline flex items-center">
                                Explore all certificates <FaArrowRight className="ml-1" />
                            </Link>
                        </p>
                    </div>
                </section>
            )}

            {/* Digital Marketer Section */}
            {selectedSection === 'Digital Marketer' && (
                <section className="mt-6 flex border border-gray-200">
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-3xl font-bold">Digital Marketer</h2>
                        <p className="text-gray-500 mt-4">Define and develop digital strategies to deliver business growth through online channels</p>
                        <h2 className="text-xl font-bold mt-10">Median Salary</h2>
                        <div className="flex flex-col space-y-4 mt-6">
                            <button className="bg-gray-300 w-52 text-gray-500 px-7 py-1 rounded-md transition">All occupations</button>
                            <button className="bg-purple-600 w-80 text-white px-7 py-1 rounded-md transition">Digital Marketer</button>
                        </div>
                        <hr className="my-6 border-t w-96 border-gray-300" />
                        <p className="text-gray-500">Job openings: ***</p>
                        <p className="text-gray-500 mt-4">Projected 10 year growth: ***</p>
                    </div>
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-2xl font-bold mt-10">Recommended Professional Certificates</h2>
                        <div className="flex space-x-4 mt-4">
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image5} alt="Google Digital Marketing" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">Google Digital Marketing & E-commerce</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: Search Engine Optimization (SEO), E-commerce, Email Marketing</p>
                                <p className="mt-2">4.7 ⭐ <span className="text-gray-500">(32k reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 6 months</p>
                            </div>
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image6} alt="IBM Digital Marketing" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">IBM Digital Marketing</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: Social Media Marketing, Generative AI in Social Media Marketing</p>
                                <p className="mt-2">4.8 ⭐ <span className="text-gray-500">(19K reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 5 months</p>
                            </div>
                        </div>
                        <p className="mt-6 flex justify-end">
                            <Link to="/certificates" className="text-black hover:underline flex items-center">
                                Explore all certificates <FaArrowRight className="ml-1" />
                            </Link>
                        </p>
                    </div>
                </section>
            )}

            {/* UX Designer Section */}
            {selectedSection === 'UX Designer' && (
                <section className="mt-6 flex border border-gray-200">
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-3xl font-bold">UX Designer</h2>
                        <p className="text-gray-500 mt-4">Make digital and physical products easier and more enjoyable to use</p>
                        <h2 className="text-xl font-bold mt-10">Median Salary</h2>
                        <div className="flex flex-col space-y-4 mt-6">
                            <button className="bg-gray-300 w-52 text-gray-500 px-7 py-1 rounded-md transition">All occupations</button>
                            <button className="bg-purple-600 w-80 text-white px-7 py-1 rounded-md transition">UX Designer</button>
                        </div>
                        <hr className="my-6 border-t w-96 border-gray-300" />
                        <p className="text-gray-500">Job openings: ***</p>
                        <p className="text-gray-500 mt-4">Projected 10 year growth: ***</p>
                    </div>
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-2xl font-bold mt-10">Recommended Professional Certificates</h2>
                        <div className="flex space-x-4 mt-4">
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image7} alt="Google UX Designer" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">Google UX Designer</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: User Experience (UX), Prototyping, Wireframing, User Experience Design</p>
                                <p className="mt-2">4.7 ⭐ <span className="text-gray-500">(81k reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 6 months</p>
                            </div>
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image8} alt="Microsoft UX Designer" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">Microsoft UX Designer</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: User Experience (UX), Prototyping, Wireframing, Artificial Intelligence</p>
                                <p className="mt-2">4.8 ⭐ <span className="text-gray-500">(281K reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 2 months</p>
                            </div>
                        </div>
                        <p className="mt-6 flex justify-end">
                            <Link to="/certificates" className="text-black hover:underline flex items-center">
                                Explore all certificates <FaArrowRight className="ml-1" />
                            </Link>
                        </p>
                    </div>
                </section>
            )}

            {/* Front-End Developer Section */}
            {selectedSection === 'Front-End Developer' && (
                <section className="mt-6 flex border border-gray-200">
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-3xl font-bold">Front-End Developer</h2>
                        <p className="text-gray-500 mt-4">Design and develop the look, feel, function, and user experience of a website</p>
                        <h2 className="text-xl font-bold mt-10">Median Salary</h2>
                        <div className="flex flex-col space-y-4 mt-6">
                            <button className="bg-gray-300 w-52 text-gray-500 px-7 py-1 rounded-md transition">All occupations</button>
                            <button className="bg-purple-600 w-80 text-white px-7 py-1 rounded-md transition">Front-End Developer</button>
                        </div>
                        <hr className="my-6 border-t w-96 border-gray-300" />
                        <p className="text-gray-500">Job openings: ***</p>
                        <p className="text-gray-500 mt-4">Projected 10 year growth: ***</p>
                    </div>
                    <div className="flex flex-col rounded-lg p-6 bg-white">
                        <h2 className="text-2xl font-bold mt-10">Recommended Professional Certificates</h2>
                        <div className="flex space-x-4 mt-4">
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image9} alt="Google UX Designer" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">Meta Front-End Developerr</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: HTML, UI/UX design, JavaScript, Cascading Style Sheets(CSS)</p>
                                <p className="mt-2">4.7 ⭐ <span className="text-gray-500">(72k reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 7 months</p>
                            </div>
                            <div className="rounded-lg p-4 bg-white w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img src={Image10} alt="Microsoft UX Designer" className="w-full h-40 object-cover rounded-md" />
                                <h3 className="font-semibold mt-2">IMB Front-End Developer</h3>
                                <p className="text-gray-500 mt-2">Skills you'll gain: Front-End Development, Web Development, Wordpress, Front-End Website</p>
                                <p className="mt-2">4.8 ⭐ <span className="text-gray-500">(828K reviews)</span></p>
                                <p className="text-gray-500 mt-1">Beginner: Professional Certificate - 4 months</p>
                            </div>
                        </div>
                        <p className="mt-6 flex justify-end">

                            <Link to="/certificates" className="text-black hover:underline flex items-center">
                                Explore all certificates <FaArrowRight className="ml-1" />
                            </Link>
                        </p>

                    </div>
                </section>
            )}
        </div>
    );
};

export default Launch;