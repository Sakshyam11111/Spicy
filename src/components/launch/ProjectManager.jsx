import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/microsoft.png';
import Image2 from '../../assets/projectmanagerpp.png';
import Image3 from '../../assets/certificate.png';
import { FaMicrosoft, FaCertificate } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuMonitorDot } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";

export const ProjectManager = () => {
    const [activeTab, setActiveTab] = useState('about'); // Default tab

    const renderAboutContent = () => (
        <>
            <div className="bg-white mt-10">
                <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                <ul className="list-disc ml-6">
                    <li>Acquire knowledge of project management terminology, methodologies, and best practices.</li>
                    <li>Use Microsoft Excel for data preparation, analysis, and visualization.</li>
                    <li>Master the Principle Domains and Process Groups relevant to the PMP Exam.</li>
                    <li>Demonstrate your new skills with a capstone project.</li>
                </ul>
            </div>

            <div className="bg-white mt-10">
                <h2 className="text-2xl font-bold mb-4">Skills you'll gain</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 list-disc ml-6 gap-2">
                    {['Risk Management', 'Budgeting', 'Stakeholder Management', 'Planning', 'Organizational Structure', 'Communication', 'Project Organization'].map(skill => (
                        <li key={skill} className='hover:underline'>{skill}</li>
                    ))}
                </ul>
                <Link to="/skills" className="text-blue-900 inline-block hover:underline mt-2">View all skills</Link>
            </div>

            <div className="bg-white mt-10 mb-20">
                <h1 className='text-2xl font-bold mb-4'>Details to know</h1>
                <div className="flex space-x-8">
                    <div className="flex items-center">
                        <BsLinkedin className='text-blue-700' />
                        <div>
                            <p className='text-lg'>Shareable certificate</p>
                            <p className='text-gray-500'>Add to your LinkedIn profile</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <CgPassword className='mr-2' />
                        <div>
                            <p className='text-lg'>Taught in English</p>
                            <p className='text-blue-500 hover:underline'>11 languages available</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const renderOutcomesContent = () => (
        <>
            <div className="bg-white mt-28 mb-20">
                <h2 className='text-2xl font-bold '>Prepare for a career in Business</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <ul className="list-disc ml-6">
                            <li>Receive professional-level training from Microsoft</li>
                            <li>Demonstrate your proficiency in portfolio-ready projects</li>
                            <li>Earn an employer-recognized certificate from Microsoft</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <img src={Image2} alt="Learn" className="mx-auto h-auto rounded-lg" />
                    </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mt-28">
                    <h2 className='text-4xl mb-8'>Get exclusive access to career resources upon completion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <IoNewspaperOutline className='w-20' />, title: "Resume review", desc: "Improve your resume with personalized feedback" },
                            { icon: <LuMonitorDot />, title: "Interview prep", desc: "Practice your skills with interactive tools" },
                            { icon: <IoChatbubblesOutline />, title: "Career support", desc: "Plan your career move with our job search guide" }
                        ].map(({ icon, title, desc }) => (
                            <div className="flex items-center" key={title}>
                                {icon}
                                <div>
                                    <h3 className="font-semibold">{title}</h3>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-50 shadow-md rounded-lg p-6 flex items-center mt-20">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-800">Earn a career certificate</h2>
                        <p className="mt-2 text-gray-600">
                            Add this credential to your LinkedIn profile, resume, or CV.
                            Share it on social media and in your performance review.
                        </p>
                    </div>
                    <div className="ml-4">
                        <img src={Image3} alt="Certificate" className="w-80 h-60" /> 
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="max-w-7xl mx-auto p-6 font-sans mt-20">
            <div className="flex items-center mb-4">
                <img src={Image1} alt="Microsoft Logo" className="h-20" />
                <h1 className="text-gray-500 font-bold text-4xl">Microsoft</h1>
            </div>
            <h2 className="text-5xl">Microsoft Project Management</h2>
            <h2 className="text-5xl mt-2">Professional Certificate</h2>
            <p className="text-lg text-gray-700 mb-6 mt-2">
                Launch your career as a project manager. Build job-ready skills in as little as 4 months.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6">
                <div className="flex flex-col">
                    <div className="text-lg font-semibold">
                        <FaMicrosoft className="inline-block mr-1" />
                        Instructor: <span className="text-gray-700 underline hover:text-purple-500">Microsoft</span>
                    </div>
                    <Link to="/enroll" className="mt-4 bg-purple-500 text-white px-6 py-5 rounded-md text-center hover:bg-purple-600 transition font-bold">
                        Enroll for Free
                    </Link>
                    <p className="mt-2 text-gray-500">31,247 already enrolled</p>
                    <p className="mt-2 text-gray-500">
                        Included with <span className='text-purple-500 font-bold'>Spicy PLUS</span>
                        <span className='text-black underline ml-2 hover:text-purple-500 transition'>Learn more</span>
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mb-6 mt-28 text-2xl">
                <nav className="flex space-x-8">
                    <button onClick={() => setActiveTab('about')} className={`text-purple-500 font-semibold ${activeTab === 'about' ? 'underline' : ''}`}>About</button>
                    <button onClick={() => setActiveTab('outcomes')} className={`font-normal ${activeTab === 'outcomes' ? 'underline' : ''} hover:text-purple-500 transition`}>Outcomes</button>
                    <Link to="/courses" className="font-normal hover:text-purple-500 transition">Courses</Link>
                    <Link to="/testimonials" className="font-normal hover:text-purple-500 transition">Testimonials</Link>
                </nav>
                <hr className="border-t border-gray-300 mt-1" />
            </div>

            {activeTab === 'about' ? renderAboutContent() : renderOutcomesContent()}
        </div>
    );
};