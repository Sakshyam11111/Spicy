import React from 'react';
import Image1 from '../../assets/Karrim.png';
import Image2 from '../../assets/Project-management.png';
import Image3 from '../../assets/Ux designernnn.jpg';
import Image4 from '../../assets/front-end-developer.jpg';
import { IoIosArrowForward } from "react-icons/io";

const Most = () => {
    const certificates = [
        {
            imgSrc: Image1,
            title: 'Google Data Analytics',
            provider: 'Google',
            description: 'Build your skills with Google’s Professional Certificate.',
            link: '/data-analytics',
        },
        {
            imgSrc: Image2,
            title: 'Google Project Management',
            provider: 'Google',
            description: 'Build your skills with Google’s Professional Certificate.',
            link: '/project-management',
        },
        {
            imgSrc: Image3,
            title: 'Google UX Design',
            provider: 'Google',
            description: 'Build your skills with Google’s Professional Certificate.',
            link: '/ux-design',
        },
        {
            imgSrc: Image4,
            title: 'Google Front-End Development',
            provider: 'Google',
            description: 'Build your skills with Google’s Professional Certificate.',
            link: '/front-end-development',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Most Popular Certificates</h2>
            <p className="text-gray-500 mb-6">
                Explore our most popular programs, get job-ready for an in-demand career.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((cert, index) => (
                    <div key={index} className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                        <img src={cert.imgSrc} alt={cert.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                        <p className="text-gray-500">{cert.provider}</p>
                        <p className="text-gray-600 mt-2">{cert.description}</p>
                        <a href={cert.link} className="mt-4 inline-block text-blue-600 hover:underline">
                            Build toward a degree
                        </a>
                        <p className="text-gray-500 mt-1 text-sm">Professional Certificate</p>
                    </div>
                ))}
            </div>
            <div className="flex space-x-4 mt-4">
                <a 
                    href="/join" 
                    className="bg-purple-600 text-white px-7 py-2 rounded-md hover:bg-purple-500 transition">
                    Show More
                </a>
                <a 
                    href="/business" 
                    className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md hover:bg-purple-500 hover:text-white transition flex items-center">
                    View all
                    <IoIosArrowForward className="ml-1" />
                </a>
            </div>
        </div>
    );
};

export default Most;