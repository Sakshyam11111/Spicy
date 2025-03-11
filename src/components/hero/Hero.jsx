import React from 'react';
import { Link } from 'react-router-dom'; 
import Image1 from '../../assets/profile.jpg';

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between p-8 bg-white">
            <div className="md:w-1/2">
                <h1 className="text-7xl font-bold mb-4">Learn without limits</h1>
                <p className="text-2xl mb-6">
                    Start, switch, or advance your career with more than 10,000 courses,
                    Professional Certificates, and degrees from world-class universities and companies.
                </p>
                <div className="flex space-x-4">
                    <Link
                        to="/login"
                        className="bg-purple-600 text-white px-7 py-4 rounded-md hover:bg-purple-500 transition">
                        Join For Free
                    </Link>
                    <Link
                        to="/login"
                        className="border border-purple-600 text-purple-600 px-6 py-4 rounded-md hover:bg-purple-500 hover:text-white transition">
                        Try Courses for Business
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
                <img
                    src={Image1}
                    alt="Learn"
                    className="mx-auto h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default Hero;