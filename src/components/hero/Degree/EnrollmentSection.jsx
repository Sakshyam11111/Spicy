import React from 'react';
import Image1 from '../../../assets/imagessss.png'; 

const EnrollmentSection = () => {
    const features = [
        {
            title: 'Fully accredited online program',
            description: 'Earn these credentials and advance your career from anywhere.',
        },
        {
            title: '$20,001 USD total tuition',
            description: 'Flexible pay-as-you-go payment options with no hidden costs.',
        },
        {
            title: 'Performance-based admissions',
            description: 'Just start learning and show us you’re prepared for your academic background.',
        },
        {
            title: 'Finish in as little as 12 months',
            description: 'Complete 30 courses (30 credit hours) full or part-time at your own speed within 6 years.',
        },
        {
            title: '100% online learning',
            description: 'Lectures, videos, hands-on projects, and connection with your course facilitators and peers.',
        },
    ];

    const programDetails = [
        "More than 54 courses to choose from—all accredited by the Higher Learning Commission (HLC), which is part of the North Central Association of Colleges and Schools (NCA)",
        "A full-spectrum, comprehensive curriculum built and taught by world-class faculty and industry professionals, incorporating a holistic approach and delivering meaningful assignments for active learning",
        "A focus on theoretical foundations and practical experiences you’ll need for a top industry job",
        "Official University of Colorado Boulder transcript for all completed coursework",
        "Weekly office hours with course facilitators",
        "Virtual spaces for dialogue and connection through discussion boards and group sessions with peers"
    ];

    return (
        <div>
            <div className="max-w-full mx-auto flex items-center justify-between p-8 bg-gray-500">
                <div className="md:w-1/2">
                    <p className='text-white mt-20 text-lg'>University of Colorado Boulder logo</p>
                    <h1 className="text-5xl font-bold mb-4 text-white">Master of Engineering in Engineering Management</h1>
                    <p className="text-sm mb-6 text-white font-bold">
                        University of Colorado Boulder
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105">
                            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* New Content Section */}
                <div className="mt-8 text-gray-800">
                    <h2 className="text-2xl font-bold mb-4">Elevate your career in engineering and tech</h2>
                    <p>You’ll build essential leadership skills and practical knowledge from a top institution. No application is required!</p>
                    <p className="mt-4">With the Master of Engineering in Engineering Management (ME-EM) program, you’ll enjoy a comprehensive curriculum developed by industry-representative faculty who prioritize job-relevant applicability. You’ll emphasize developing real-world competencies in areas such as leadership, finance, project management, communication, strategic planning, marketing, innovation management, and engineering leadership; it’s about translating engineering into business!</p>
                    <p className="mt-4">This program is designed for engineers and aspiring managers preparing for high-impact roles. The program is flexible, offering pathways to entry regardless of your academic background. If you have a background in Engineering or are looking to enter the field, the ME-EM faculty members have extensive industry experience in aerospace, telecommunications, renewable energy, and Fortune 100 companies.</p>
                </div>

                {/* What's in this degree program Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">What’s in this degree program?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {programDetails.map((detail, index) => (
                            <li key={index} className="text-gray-800">
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="max-w-7xl mx-auto flex items-center justify-between p-8 bg-white mt-10">
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold mb-4">Demonstrate you can master the work to gain admission</h1>
                    <p className="text-sm mb-6">
                    Simply prove that you can do the work by completing a series of three for-credit courses called a “pathway Specialization” with an overall GPA of 3.0 or higher to gain admission.
                    </p>
                    <p className='text-sm mb-6'>No need to worry about transcripts, letters of recommendation, GRE, TOEFL or other standardized test scores..</p>
                    <p className="text-sm mb-6">You can choose one of the two pathway Specializations to get started: Project Management, or Finance for Technical Managers.</p>
                    <div className="flex space-x-4">
                        <a
                            href="/login"
                            className="bg-purple-500 text-white px-7 py-4 rounded-md hover:bg-purple-600 transition">
                            Learn more
                        </a>
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
        </div>
    );
};

export default EnrollmentSection;