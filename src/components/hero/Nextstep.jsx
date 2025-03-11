import React from 'react';
import Image1 from '../../assets//frontview.jpg';


const Nextstep = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-blue-50 flex items-center mt-28 mb-28">
            <div className="flex-1 flex space-x-4">
                <img src={Image1} alt="Learners engaging" className="w-2/3 ml-24 rounded-md object-cover" />
            </div>
            <div className="flex-1 ml-10">
                <h2 className="text-5xl mb-2">Take the next step toward your personal and professional goals with Spicy.</h2>
                <p className="text-gray-700 text-lg mb-4 mt-4">
                    Join now to receive personalized recommendations from the full Coursera catalog.
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

export default Nextstep;