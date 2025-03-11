import React, { useState } from 'react'; // Import useState for FAQs
import { FaArrowRight } from "react-icons/fa6";
import Image1 from "../../assets/smile.jpg";
import Image2 from "../../assets/getresources.jpg"
import Image3 from "../../assets/masterbusiness.jpg"
import Image4 from "../../assets/Karrim.png"
import Image5 from "../../assets/1060x596.png"
import Image6 from "../../assets/UX designer.jpg"
import { HiMenu } from "react-icons/hi";
import { FaMedal } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const CareerLaunchSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            question: "How much does a Professional Certificate cost?",
            answer: "The cost of a Professional Certificate varies, but they typically start at $49 per month."
        },
        {
            question: "How long does it take to complete a Professional Certificate?",
            answer: "On average, it takes about 3 to 6 months to complete a Professional Certificate, depending on your pace."
        },
        {
            question: "What resources will be available for the job search process?",
            answer: "Resources may include job boards, resume workshops, and interview preparation materials."
        },
        {
            question: "What background knowledge is necessary?",
            answer: "Most certificates do not require prior knowledge, but a basic understanding of the subject is helpful."
        },
        {
            question: "Who designed the Professional Certificates on Coursera?",
            answer: "The Professional Certificates are designed by leading universities and companies."
        },
        {
            question: "Are Professional Certificates 100% online?",
            answer: "Yes, all Professional Certificates are offered entirely online."
        },
    ];

    return (
        <div>
            {/* Main Launch Section */}
            <div className="max-w-7xl mx-auto flex items-center justify-between p-8 bg-white">
                {/* Text Section */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-2">Launch your new career with a Professional Certificate on Spicy</h2>
                    <p className="text-gray-700 mb-4 mt-8">
                        Professional Certificates offer flexible, online training designed to get you job-ready for high-growth fields.
                    </p>
                    <p className="text-black mb-4 mt-8 font-bold">
                        <span className="mr-2">7-day free trial</span>
                        <span className="mx-2">|</span>
                        <span className="mr-2">Starting at $49 per month</span>
                        <span className="mx-2">|</span>
                        <span className="mr-2">Less than 6 months at your own pace</span>
                    </p>
                    <button
                        onClick={() => window.location.href = "/explore"}
                        className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none mt-8"
                    >
                        Explore Careers <FaArrowRight className="ml-1" />
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-4 md:mt-0 ml-4">
                    <img
                        src={Image1}
                        alt="Microsoft Project Management"
                        className="mx-auto h-auto rounded-lg"
                        onError={(e) => { e.target.src = 'path/to/placeholder-image.jpg'; }}
                    />
                </div>
            </div>

            {/* Step Section */}
            <div className="bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-4 mt-10">Take the first step toward your new career</h2>
                    <p className="text-black text-lg mb-16">Get professional-level training and earn a credential recognized by leading companies.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <HiMenu className='mb-4' />
                            <h3 className="text-xl font-semibold mb-2">Prior experience optional</h3>
                            <p className="text-gray-500 mb-2">Build job-ready skills, even if you’re new to the field.</p>
                            <hr className="border-t border-gray-500 mb-8 mt-8 w-full" />
                            <p className="text-lg font-bold">2,294,150</p>
                            <p className="text-gray-500 mb-4">job openings across entry-level Professional Certificate roles</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaMedal className='mb-4' />
                            <h3 className="text-xl font-semibold mb-2">Earn a valuable credential</h3>
                            <p className="text-gray-500 mb-4">Apply your skills in real-world projects using the latest industry tools and techniques.</p>
                            <hr className="border-t border-gray-500 mb-8 mt-8 w-full" />
                            <p className="text-lg font-bold">4.7 / 5</p>
                            <p className="text-gray-500 mb-4">average rating given by 20,000+ global learners enrolled in an entry-level Professional Certificate*</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaRegClock className='mb-4' />
                            <h3 className="text-xl font-semibold mb-2">Learn at your own pace</h3>
                            <p className="text-gray-500 mb-4">Complete the training in less than 6 months while working full-time job.</p>
                            <hr className="border-t border-gray-500 mb-8 mt-8 w-full" />
                            <p className="text-lg font-bold">Under 10 hours</p>
                            <p className="text-gray-500 mb-4">Flexible study per week is a powerful approach that empowers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Finish a Professional */}
            <div className="max-w-7xl mx-auto flex items-center justify-between p-8 bg-white">
                {/* Image Section */}
                <div className="md:w-1/2 mt-4 md:mt-0 mr-8">
                    <img
                        src={Image2}
                        alt="Microsoft Project Management"
                        className="mx-auto h-auto rounded-lg"
                        onError={(e) => { e.target.src = 'path/to/placeholder-image.jpg'; }}
                    />
                </div>
                <div className="md:w-1/2 ml-6">
                    <p className='text-black text-lg'>Finished a Professional Certificate?</p>
                    <h2 className="text-4xl mb-2">Get resources and support to guide you through the job search process.</h2>
                    <p className='text-black font-bold text-2xl mt-20'>Showcase your skills</p>
                    <p className='text-black text-lg'>Present real-world projects to potential employers.</p>
                    <p className='text-black font-bold text-2xl mt-10'>Enhance your resume</p>
                    <p className='text-black text-lg'>Get support to build a standout resume and LinkedIn profile.</p>
                    <p className='text-black font-bold text-2xl mt-10'>Ace your interview</p>
                    <p className='text-black text-lg'>Practice and improve your interview skills with virtual feedback.</p>
                </div>
            </div>

            {/* Explore Professional Certificates */}
            <div className="max-w-7xl mx-auto p-8">
                <h2 className="text-2xl font-bold mb-6">Explore our career-changing Professional Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Certificate Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center h-32">
                            <img src={Image3} alt="Google IT Support" className="w-full" />
                        </div>
                        <div className="p-4 bg-blue-950 text-white">
                            <h3 className="text-xl font-semibold mt-10">Google IT Support</h3>
                            <p className="mt-4">Google</p>
                            <p className="text-sm mt-20">PROFESSIONAL CERTIFICATE</p>
                        </div>
                    </div>

                    {/* Certificate Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center h-32">
                            <img src={Image4} alt="Google Data Analytics" className="w-full" />
                        </div>
                        <div className="p-4 bg-blue-950 text-white">
                            <h3 className="text-xl font-semibold mt-10">Google Data Analytics</h3>
                            <p className="mt-4">Google</p>
                            <p className="text-sm mt-20">PROFESSIONAL CERTIFICATE</p>
                        </div>
                    </div>

                    {/* Certificate Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center h-32">
                            <img src={Image5} alt="Google Project Management" className="w-full" />
                        </div>
                        <div className="p-4 bg-blue-950 text-white">
                            <h3 className="text-xl font-semibold mt-10">Project Management</h3>
                            <p className="mt-4">Google</p>
                            <p className="text-sm mt-20">PROFESSIONAL CERTIFICATE</p>
                        </div>
                    </div>

                    {/* Certificate Card 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center h-32">
                            <img src={Image6} alt="Google UX Design" className="w-full" />
                        </div>
                        <div className="p-4 bg-blue-950 text-white">
                            <h3 className="text-xl font-semibold mt-10">Google UX Design</h3>
                            <p className="mt-4">Google</p>
                            <p className="text-sm mt-20">PROFESSIONAL CERTIFICATE</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-8">
                    <button
                        onClick={() => window.location.href = "/certificates"}
                        className="text-lg text-blue-950 px-4 py-2 rounded-lg hover:underline"
                    >
                        Explore Certificates
                    </button>
                </div>
            </div>


            {/* Frequently Asked Questions */}
            <div className="max-w-4xl mx-auto p-8 flex flex-col items-center mb-20">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4 w-full">
                    {questions.map((item, index) => (
                        <div key={index} className="border rounded-lg w-full">
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full text-left p-4 bg-white rounded-lg hover:bg-gray-200 focus:outline-none"
                            >
                                <h3 className="font-semibold text-center">{item.question}</h3>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-white border-t">
                                    <p className='text-center'>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerLaunchSection;