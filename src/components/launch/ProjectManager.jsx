import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/microsoft.png';
import Image2 from '../../assets/projectmanagerpp.png';
import { FaMicrosoft } from "react-icons/fa";
import { RiQuestionLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuMonitorDot } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";

export const ProjectManager = () => {
    const [activeTab, setActiveTab] = useState('about'); // Default tab

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <>
                        {/* New Section: What You'll Learn */}
                        <div className="bg-white mt-10">
                            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                            <ul className="list-disc ml-6">
                                <li>Acquire knowledge of project management terminology, methodologies, and best practices in order to apply them effectively in real-world scenarios.</li>
                                <li>Use Microsoft Excel for data preparation, analysis, and visualization to gain expertise in developing and managing project schedules.</li>
                                <li>Master the Principle Domains and Process Groups relevant to the PMP Exam.</li>
                                <li>Demonstrate your new skills with a capstone project using real-world scenarios and prepare for the industry-recognized PMP certification exam.</li>
                            </ul>
                        </div>

                        {/* New Section: Skills You'll Gain */}
                        <div className="bg-white mt-10">
                            <h2 className="text-2xl font-bold mb-4">Skills you'll gain</h2>
                            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 list-disc ml-6 gap-2">
                                <li className='hover:underline'>Risk Management</li>
                                <li className='hover:underline'>Budgeting</li>
                                <li className='hover:underline'>Stakeholder Management</li>
                                <li className='hover:underline'>Planning</li>
                                <li className='hover:underline'>Organizational Structure of a Project</li>
                                <li className='hover:underline'>Communication</li>
                                <li className='hover:underline'>Project Organization</li>
                            </ul>
                            <Link to="/skills" className="text-blue-900 inline-block hover:underline mt-2">View all skills</Link>
                        </div>

                        {/* Details to know */}
                        <div className="bg-white mt-10">
                            <h1 className='text-2xl font-bold mb-4'>Details to know</h1>
                            <div className="flex space-x-8">
                                <div className="flex items-center">
                                    <div>
                                        <BsLinkedin className='text-blue-700' />
                                        <p className='text-lg'>Shareable certificate</p>
                                        <p className='text-gray-500'>Add to your LinkedIn profile</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div>
                                        <CgPassword className='mr-2' />
                                        <p className='text-lg'>Taught in English</p>
                                        <p className='text-blue-500 hover:underline'>11 languages available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'outcomes':
                return (
                    <>
                        {/* New Section: Career Preparation and Support */}
                        <div className="bg-white mt-28">
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
                                    <img
                                        src={Image2}
                                        alt="Learn"
                                        className="mx-auto h-auto rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg mt-28">
                                <h2 className='text-4xl mb-8'>Get exclusive access to career resources upon completion</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="flex items-center">
                                        <div>
                                            <IoNewspaperOutline className='w-20' />
                                            <h3 className="font-semibold">Resume review</h3>
                                            <p>Improve your resume and LinkedIn with personalized feedback</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div>
                                            <LuMonitorDot />
                                            <h3 className="font-semibold">Interview prep</h3>
                                            <p>Practice your skills with interactive tools and mock interviews</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div>
                                            <IoChatbubblesOutline />
                                            <h3 className="font-semibold">Career support</h3>
                                            <p>Plan your career move with Course’s job search guide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 font-sans mt-20">
            <div className="flex items-center mb-4">
                <img src={Image1} alt="Microsoft Logo" className="h-20" />
                <h1 className="text-gray-500 font-bold text-4xl">Microsoft</h1>
            </div>
            <h2 className="text-5xl">Microsoft Project Management</h2>
            <h2 className="text-5xl mt-2">Professional Certificate</h2>
            <p className="text-lg text-gray-700 mb-6 mt-2">
                Launch your career as a project manager. Build job-ready skills for an in-demand career in project<br /> management in as little as 4 months. No prior experience required to get started.
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

            {renderContent()}
        </div>
    );
};