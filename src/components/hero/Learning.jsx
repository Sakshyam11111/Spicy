import React from 'react';
import Image1 from '../../assets/hugging.png';
import Image2 from '../../assets/llama.png';
import Image3 from '../../assets/Excel.png';
import Image4 from '../../assets/yale.png';
import { IoIosArrowForward } from "react-icons/io";

const Learning = () => {
    const certificates = [
        {
            imgSrc: Image1,
            provider: 'DeepLearning.AI',
            title: 'Open Source Models with Hugging Face',
            description: 'Project',
            link: '/data-analytics',
        },
        {
            imgSrc: Image2,
            provider: 'DeepLearning.AI',
            title: 'Intoducing Multimodal Llama 3.2 Learn ',
            description: 'Project',
            link: '/project-management',
        },
        {
            imgSrc: Image3,
            provider: 'Johns Hopkins University',
            title: 'Business Analytcs with Excel: Elementary to Advanced',
            description: 'Course',
            link: '/ux-design',
        },
        {
            imgSrc: Image4,
            provider: 'Yale University',
            title: 'The Science of Well-Being for Beginners',
            description: 'Course',
            link: '/front-end-development',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <p className='font-bold mb-3 text-lg'>100% Free</p>
            <h2 className="text-4xl font-bold mb-4">Start learning with free courses</h2>
            <p className="text-gray-800 mb-2">
                Explore free online courses from the world's top universities and companies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((cert, index) => (
                    <div key={index} className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                        <img src={cert.imgSrc} alt={cert.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <p className="text-gray-500">{cert.provider}</p>
                        <h3 className=" font-semibold">{cert.title}</h3>
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

export default Learning;