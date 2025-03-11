import React from 'react';
import Image1 from '../../assets//bachloresciecnce.jpg';
import Image2 from '../../assets/bachlormaster.jpg';
import Image3 from '../../assets/bachlordata.jpg';
import Image4 from '../../assets/bachlordataaana.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";

const Programs = () => {
    const certificates = [
        {
            imgSrc: Image1,
            provider: 'University of London',
            title: 'Master of Engineering',
            description: 'Earn a degree',
            link: '/data-analytics',
        },
        {
            imgSrc: Image2,
            provider: 'University of Michigan',
            title: 'Master of Science in Computer',
            description: 'Earn a degree',
            link: '/project-management',
        },
        {
            imgSrc: Image3,
            provider: 'University of Pittsburgh',
            title: 'Master of Business Administration',
            description: 'Earn a degree',
            link: '/ux-design',
        },
        {
            imgSrc: Image4,
            provider: 'Northeastern University',
            title: 'Master of Science in Data Science',
            description: 'Earn a degree',
            link: '/front-end-development',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <p className='font-bold mb-3 text-lg'>Degree Programs</p>
            <h2 className="text-4xl font-bold mb-4">Find a top degree that fits your life</h2>
            <p className="text-gray-800 mb-2">
                Breakthrough pricing on 100% online degrees from top universities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((cert, index) => (
                    <div key={index} className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                        <img src={cert.imgSrc} alt={cert.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <p className="text-gray-500">{cert.provider}</p>
                        <h3 className="font-semibold">{cert.title}</h3>
                        <p className="text-blue-600 mt-8 flex items-center">
                            <FaGraduationCap className="mr-2" />
                            {cert.description}
                        </p>
                        <p className='text-gray-500'>Degree</p>
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
            <p className='mt-32'>Each university determines admission and the number of pre-approved prior learning credits that may count toward the degree requirements according to institutional policies, which may consider any existing credits you may have.</p>
        </div>
    );
};

export default Programs;