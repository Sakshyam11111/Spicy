import React from 'react';
import Image1 from '../../assets/outcomes.png';


const LearnerOutcomes = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-blue-50 flex items-center mt-28">
            <div className="flex-1 flex space-x-4">
                <img src={Image1} alt="Learners engaging" className="w-2xl rounded-md object-cover" />
            </div>
            <div className="flex-1 ml-10">
                <h2 className="text-6xl mb-10">Learner outcomes on Spicy</h2>
                <p className="text-gray-700 text-lg mb-10">
                   <span className='font-bold'>77% of learners report career benefits,</span> such as new skills, increased pay, and new job opportunities. 
                   <span className='text-blue-700 underline'>2023 Coursera Learner Outcomes Report</span>
                   
                </p>
                <a
                    href="/join"
                    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-500 transition"
                >
                    Join for Free
                </a>
            </div>
        </div>
    );
};

export default LearnerOutcomes;