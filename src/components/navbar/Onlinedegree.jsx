import React, { useState } from 'react';
import Image1 from "../../assets/masterbusiness.jpg";

const Onlinedegree = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Are the degrees hosted on Spicy from accredited universities?",
            answer: "Yes, all online degree programs available on Coursera are directly conferred by accredited institutions. Accreditation is important because it shows that an institution meets rigorous academic standards, eases your ability to transfer credits, and helps employers validate the quality of education on your resume or application."
        },
        {
            question: "Can I transfer previously earned college credits?",
            answer: "That depends on the degree you’re interested in earning. Many of the bachelor’s degrees on Coursera from US-based institutions allow students to transfer some previously earned college credits."
        },
        {
            question: "Can I take online degree courses from anywhere in the world?",
            answer: "Yes, all you need is a reliable internet connection. No matter where you are in the world, you can enroll in the degree programs offered."
        },
        {
            question: "How long do degrees take to finish?",
            answer: "Many degree programs are designed to be pursued part-time or full-time, depending on your availability. Graduate degrees can take between one and three years."
        },
        {
            question: "What are the application deadlines?",
            answer: "Deadlines tend to occur around three times a year—once in the fall, once in the spring, and once in the summer."
        },
        {
            question: "What is the online degree experience like on Spicy?",
            answer: "Earning your degree from a leading university means experiencing greater flexibility than in-person degree programs."
        },
    ];

    const degrees = [
        {
            university: { name: "Goldsmiths", fullName: "UNIVERSITY OF LONDON" },
            degree: "Bachelor of Science in Computer Science",
            specialization: "Specialization in ML and AI, data science, web and mobile development, physical computing and IoT, game development, VR, or UX",
            applicationDue: "March 10, 2025"
        },
        {
            university: { name: "Gies College of Business", fullName: "UNIVERSITY OF ILLINOIS URBANA-CHAMPAIGN" },
            degree: "Master of Business Administration (MBA)",
            specialization: "#21 in Top Public Universities in the U.S. (U.S., News & World Report, 2023)",
            applicationDue: "April 3, 2025"
        },
        {
            university: { name: "Gies College of Business", fullName: "UNIVERSITY OF ILLINOIS URBANA-CHAMPAIGN" },
            degree: "Master of Science in Management (MSM)",
            specialization: "#21 in Top Public Universities in the U.S. (U.S. News & World Report, 2023)",
            applicationDue: "April 1, 2025"
        },
        {
            university: { name: "Huddersfield", fullName: "UNIVERSITY OF HUDDERSFIELD" },
            degree: "MSc Management",
            specialization: "AHCS accredited, Business School of the Year 2023 (THE Awards)",
            applicationDue: "May 19, 2025"
        },
        {
            university: { name: "Michigan", fullName: "UNIVERSITY OF MICHIGAN" },
            degree: "Master of Applied Data Science",
            specialization: "#1 Public Research University in the U.S. (QS World Rankings, 2022)",
            applicationDue: "May 15, 2025"
        },
        {
            university: { name: "Northeastern University", fullName: "NORTHEASTERN UNIVERSITY" },
            degree: "Master of Science in Data Analytics Engineering",
            specialization: "Ranked in the top 40 of the U.S. News Best Graduate Schools in Engineering",
            applicationDue: "May 28, 2025"
        },
        {
            university: { name: "Pittsburgh", fullName: "UNIVERSITY OF PITTSBURGH" },
            degree: "Master of Data Science",
            specialization: "A highly-ranked, Carnegie R1 public research institution",
            applicationDue: "May 7, 2025"
        },
        {
            university: { name: "London", fullName: "UNIVERSITY OF LONDON" },
            degree: "Bachelor of Science in Business Administration",
            specialization: "Ranked #34 in the UK (The Times and Sunday Times Good University Guide 2025)",
            applicationDue: "May 10, 2025"
        },
    ];

    return (
        <div>
            <section className="bg-blue-950 text-white p-5 text-center">
                <h1 className="text-5xl mt-20 mb-20">
                    Take your career to the next level with an online degree
                </h1>
            </section>
            <div className="max-w-7xl mx-auto p-8 bg-white">
                <h2 className="text-3xl mb-4">Find the right degree for you</h2>
                <div className="flex space-x-4 mb-4">
                    <p>Filter by</p>
                    <div>
                        <select id="program-level" className="border rounded p-2">
                            <option value="">Program Level</option>
                            <option value="bachelor">Bachelor's</option>
                            <option value="master">Master's</option>
                        </select>
                    </div>
                    <div>
                        <select id="subject" className="border rounded p-2">
                            <option value="">Subject</option>
                            <option value="arts">Arts and Humanities</option>
                            <option value="business">Business</option>
                            <option value="computer-science">Computer Science</option>
                            <option value="data-science">Data Science</option>
                            <option value="it">Information Technology</option>
                            <option value="health">Health</option>
                            <option value="math">Math and Logic</option>
                            <option value="personal-development">Personal Development</option>
                        </select>
                    </div>
                </div>

                {/* Degree Cards */}
                <h2 className="text-3xl mb-4">Available Degrees</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {degrees.map((degree, index) => (
                        <div key={index} className="bg-white text-black p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:shadow-lg hover:scale-105">
                            <h3 className="font-bold text-blue-950 text-4xl text-center">{degree.university.name}</h3>
                            <p className="text-blue-950 font-bold text-sm text-center">{degree.university.fullName}</p>
                            <p className="text-gray-500 mt-20">{degree.university.fullName}</p>
                            <p className='font-bold text-blue-950'>{degree.degree}</p>
                            {degree.specialization && <p className='text-gray-500'>{degree.specialization}</p>}
                            <p className='text-gray-500'>Application due: {degree.applicationDue}</p>
                        </div>
                    ))}
                </div>

                {/* Browse by Program Level */}
                <h2 className="text-3xl mb-4 mt-20">Browse by Program Level</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 font-bold">
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Bachelor's Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Master's Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Postgraduate Programs</div>
                </div>

                {/* Browse by Category */}
                <h2 className="text-3xl mb-4">Browse by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-bold">
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Business and MBA Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Computer Science Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Data Science Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Public Health Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Data Analytics Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Top European Degrees</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Maestrías en línea de Latinoamérica</div>
                    <div className="bg-blue-100 p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-blue-200 hover:shadow-lg hover:scale-105">Top Indian Degrees</div>
                </div>
            </div>

            {/* Live sessions */}
            <div className="bg-blue-50 flex items-center mt-28 mb-28">
                <div className="flex-1 flex space-x-4">
                    <img src={Image1} alt="Learners engaging" className="w-2/2 ml-24 rounded-md object-cover" />
                </div>
                <div className="flex-1 ml-10 mr-10">
                    <h2 className="text-2xl mb-2">Live sessions, office hours, discussion boards - you can participate from wherever you are... Getting my MBA makes me feel empowered. I don't need to stop working, I don't need to stop being a mother, I don't need to stop having my life.</h2>
                    <p className="text-black text-lg mt-12">Patricia Ribiero Pena</p>
                    <p className="text-gray-500 text-sm">Master of Business Administration(iMBA)</p>
                    <p className="text-gray-500 text-sm">University of Illinois</p>
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

export default Onlinedegree;