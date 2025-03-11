import React from 'react';
import Image1 from '../../assets/Karrim.png';
import Image2 from '../../assets/digitalmmmm.jpg';
import Image3 from '../../assets/Ux designernnn.jpg';
import Image4 from '../../assets/AIpython.png';
import { IoIosArrowForward } from "react-icons/io";

const Professional = () => {
    const certificates = [
        {
            imgSrc: Image1,
            provider: 'Google',
            title: 'Google Agile Essentials',
            description: 'Course',
            link: '/data-analytics',
        },
        {
            imgSrc: Image2,
            provider: 'Adobe',
            title: 'Adobe Graphic Designer',
            description: 'Professional Certificate',
            link: '/project-management',
        },
        {
            imgSrc: Image3,
            provider: 'Microsoft',
            title: 'Microsoft Python Developmet',
            description: 'Professional Certificate',
            link: '/ux-design',
        },
        {
            imgSrc: Image4,
            provider: 'DeepLearning.AI',
            title: 'AI Python for Beginners',
            description: 'Course',
            link: '/front-end-development',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <p className='font-bold mb-3 text-lg'>Courses and Professional Certificates</p>
            <h2 className="text-4xl font-bold mb-4">New on Spicy</h2>
            <p className="text-gray-500 mb-2">
                Explore our newest programs, focused on delivering in-demand skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((cert, index) => (
                    <div key={index} className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                        <img src={cert.imgSrc} alt={cert.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <p className="text-gray-500">{cert.provider}</p>
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                        <p className="text-gray-500 mt-8">{cert.description}</p>
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

export default Professional;