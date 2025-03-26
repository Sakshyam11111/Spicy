import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const GoogleProject = () => {
    return (
        <div className=" mx-auto p-6 bg-blue-50"> 
            <div className="flex items-center mb-4 ml-16 mt-16">
                <FcGoogle className="h-16 w-16" />
            </div>
            <div className='ml-16'>
            <h1 className="text-5xl mb-2">Google Project Management:</h1>
            <h1 className="text-5xl mb-2">Professional Certificate</h1>
            <p className="text-gray-700 mb-4 mt-6">
                Get on the fast track to a career in project management. In this certificate program, you'll learn in-demand skills and get training from Google experts. <br></br> Learn at your own pace, or upgrade your experience required.
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
        </div>
    );
};

export default GoogleProject;