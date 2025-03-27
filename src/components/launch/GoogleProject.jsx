import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import Image1 from "../../assets/googleppp-a.png";
import { FaArrowRightLong } from "react-icons/fa6";

const GoogleProject = () => {
    return (
        <div className="mx-auto p-6 bg-blue-50">
            <div className="flex items-center mb-4 ml-16 mt-16">
                <FcGoogle className="h-16 w-16" />
            </div>
            <div className='ml-16'>
                <h1 className="text-5xl mb-2">Google Project Management:</h1>
                <h1 className="text-5xl mb-2">Professional Certificate</h1>
                <p className="text-gray-700 mb-4 mt-6">
                    Get on the fast track to a career in project management. In this certificate program, you'll learn in-demand skills and get training from Google experts. <br /> Learn at your own pace, or upgrade your experience required.
                </p>
                <h2 className="text-xl font-semibold">Instructor: <span className='underline ml-1'>Google Career Certificates</span></h2>
                <p className="text-gray-500 flex items-center">
                    <FcGoogle className="mr-1 h-10 w-10 mt-4" /> Top Instructor | Learn more skills
                </p>
            </div>
            <div className="mt-14 ml-16">
                <Link to="/enroll" className="bg-purple-600 text-white px-12 py-5 rounded-md transition hover:bg-purple-700">
                    Enroll For Free
                </Link>
                <p className="mt-10 text-lg"><span className='font-bold'>1,947,594 </span>already enrolled</p>
            </div>
            {/* New Course Details Box */}
            <div className="max-w-7xl ml-16 mt-28 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
                <h3 className="text-2xl font-semibold mb-4">Course Details</h3>
                <div className="flex items-center space-x-10">
                    <div className="flex flex-col items-center">
                        <p className="font-bold hover:underline">6 course series</p>
                        <p className="text-gray-600">Earn a career credential that <br /> demonstrates your expertise</p>
                    </div>
                    <div className="flex flex-col items-center ml-12">
                        <p className="font-bold">4.8 <span className='text-blue-700'>★</span></p>
                        <p className="text-gray-600">(just 358 reviews)</p>
                    </div>
                    <div className="flex flex-col items-center ml-12">
                        <p className="font-bold">Beginner level</p>
                        <p className="text-gray-600">Recommended experience</p>
                    </div>
                    <div className="flex flex-col items-center ml-12">
                        <p className="font-bold">Flexible schedule</p>
                        <p className="text-gray-600">6 months, 10 hours a week</p>
                    </div>
                    <div className="flex flex-col items-center ml-12">
                        <p className="font-bold">Build toward a degree</p>
                        <Link to="/learn-more" className="hover:underline">Learn more</Link>
                    </div>
                </div>
            </div>

            {/* New Career Preparation Box */}
            <div className="max-w-7xl mx-16 mt-28 p-6 border border-gray-200 bg-white rounded-lg shadow-md flex">
                <div className="flex-1 ml-20">
                    <h3 className="text-2xl font-semibold mb-4 mt-20">Prepare for a career as a Project Manager</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Receive professional-level training from Google</li>
                        <li>Demonstrate your proficiency in portfolio-ready projects</li>
                        <li>Earn an employer-recognized certificate from Google</li>
                        <li>Qualify for in-demand job titles: Project Manager, Project <span className='ml-6'>Coordinator, Project Assistant</span></li>
                    </ul>
                    <div className="mt-10">
                        <Link to="/explore" className="bg-purple-600 text-white w-44 px-3 py-4 rounded-md transition hover:bg-purple-700 flex items-center">
                            Explore this role <FaArrowRightLong className='ml-2' />
                        </Link>
                    </div>
                </div>
                <div className="flex-initial ml-6">
                    <img
                        src={Image1}
                        alt="Project Manager"
                        className="w-2xl h-2xl object-cover rounded-md"
                    />
                </div>
            </div>

            {/* New Professional Certificate Box */}
            <div className="max-w-7xl ml-16 mt-28 mb-28 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
                <h3 className="text-xl font-semibold mb-2">Professional Certificate - 6 course series <Link to="/skills" className="text-purple-600 hover:underline">+ New AI Skills</Link></h3>
                <p className="text-gray-700">
                    Prepare for a new career in the high-growth field of project management, no experience or degree required. Get professional training designed by Google and get on the fast track to a competitively paid job.
                    <span className="font-bold"> There are over 464,000 open jobs in project management with a median entry-level salary of $87,000 in the U.S.</span>
                </p>
                <button className="text-purple-600 hover:underline mt-6">Read more</button>
            </div>
        </div>
    );
};

export default GoogleProject;