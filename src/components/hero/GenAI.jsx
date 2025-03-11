    import React, { useState } from "react";
    import Image1 from "../../assets/image-IBM.png";
    import Image2 from "../../assets/organic.png";
    import Image3 from "../../assets/frontenddeveloper.jpg";
    import Image4 from "../../assets/image-IBM.png";
    import Image5 from "../../assets/AI.png";
    import Image6 from "../../assets/Ux designernnn.jpg";
    import Image7 from "../../assets/prompt.png";
    import Image8 from "../../assets/imbai.png";
    import Image9 from "../../assets/healthcare.png";
    import Image10 from "../../assets/chat.png";
    import Image11 from "../../assets/intero.png";
    import Image12 from "../../assets/content.jpg";
    import { FaArrowRight } from "react-icons/fa";

    const GenAI = () => {
        const [activeSection, setActiveSection] = useState("new");

        const handleSectionChange = (section) => {
            setActiveSection(section);
        };

        return (
            <div className="max-w-7xl mx-auto p-6 font-sans mt-20">
                <section className="mt-6 flex flex-col md:flex-row border border-gray-100 rounded-2xl bg-gray-100">
                    {/* Left Column: Introduction to GenAI */}
                    <div className="flex flex-col rounded-lg p-6 bg-transparent md:w-1/5 mt-3 relative">
                        <div className="relative z-10 p-6">
                            <h2 className="text-3xl font-bold">Get started with GenAI</h2>
                            <p className="text-gray-500 mt-4">
                                Identify, develop, and execute impactful GenAI business strategies.
                            </p>
                            <div className="mt-10">
                                <a
                                    href="/join"
                                    className="bg-purple-600 text-white px-7 py-4 rounded-md hover:bg-purple-500 transition"
                                    aria-label="Join for free"
                                >
                                    Join For Free
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Recommended Certificates */}
                    <div className="flex flex-col rounded-lg p-6 bg-transparent w-full md:w-3/5">
                        <div className="flex space-x-4">
                            <button
                                onClick={() => handleSectionChange("new")}
                                className={`px-2 py-2 h-10 rounded-md transition ${activeSection === "new" ? "bg-purple-600 text-white" : "border border-purple-600 text-black"}`}
                                aria-label="New Certificates"
                            >
                                New
                            </button>
                            <button
                                onClick={() => handleSectionChange("beginner")}
                                className={`px-2 py-2 h-10 rounded-md transition ${activeSection === "beginner" ? "bg-purple-600 text-white" : "border border-purple-600 text-black"}`}
                                aria-label="Beginner Certificates"
                            >
                                Beginner
                            </button>
                            <button
                                onClick={() => handleSectionChange("popular")}
                                className={`px-2 py-2 h-10 rounded-md transition ${activeSection === "popular" ? "bg-purple-600 text-white" : "border border-purple-600 text-black"}`}
                                aria-label="Popular Certificates"
                            >
                                Popular
                            </button>
                            <button
                                onClick={() => handleSectionChange("tools")}
                                className={`px-2 py-2 h-10 rounded-md transition ${activeSection === "tools" ? "bg-purple-600 text-white" : "border border-purple-600 text-black"}`}
                                aria-label="Tools Certificates"
                            >
                                Tools
                            </button>
                        </div>

                        {/* Displaying Certificates Based on Active Section */}
                        <div className="flex space-x-4 mt-4 w-4/3">
                            {/* New  */}
                            {activeSection === "new" && (
                                <>
                                    {/* New Certificate 1 */}
                                    <article className="rounded-lg p-4 bg-white w-full transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image1}
                                            alt="IBM Generative AI Engineering"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">IBM Generative AI Engineering</h3>
                                        <p className="text-gray-500 mt-1">Professional Certificate</p>
                                    </article>
                                    {/* New Certificate 2 */}
                                    <article className="rounded-lg p-4 bg-white w-full transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image2}
                                            alt="Agentic: AI and ML Agents for Leaders"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Agentic AI and AI Agents</h3>
                                        <p className="text-gray-500 mt-1">Specialization</p>
                                    </article>
                                    {/* New Certificate 3 */}
                                    <article className="rounded-lg p-4 bg-white w-full transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image3}
                                            alt="Microsoft AI & ML Engineering"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Microsoft AI & ML Engineering</h3>
                                        <p className="text-gray-500 mt-1">Professional Certificate</p>
                                    </article>
                                </>
                            )}

                            {/* Beginner Certificates */}
                            {activeSection === "beginner" && (
                                <>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image4}
                                            alt="Google AI Essentials"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Google AI Essentials</h3>
                                        <p className="text-gray-500 mt-1">Course</p>
                                    </article>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image5}
                                            alt="Introduction to Generative AI Learning Path"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Introduction to Generative AI Learning Path</h3>
                                        <p className="text-gray-500 mt-1">Specialization</p>
                                    </article>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image6}
                                            alt="Google Prompting Essentials"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Google Prompting Essentials</h3>
                                        <p className="text-gray-500 mt-1">Course</p>
                                    </article>
                                </>
                            )}

                            {/* Popular Certificates */}
                            {activeSection === "popular" && (
                                <>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image7}
                                            alt="Prompt Engineering"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Prompt Engineering</h3>
                                        <p className="text-gray-500 mt-1">Specialization</p>
                                    </article>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image8}
                                            alt="IBM AI Developer"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">IBM AI Developer</h3>
                                        <p className="text-gray-500 mt-1">Professional Certificate</p>
                                    </article>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image9}
                                            alt="AI in Healthcare"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">AI in Healthcare</h3>
                                        <p className="text-gray-500 mt-1">Specialization</p>
                                    </article>
                                </>
                            )}

                            {/* Tools Certificates */}
                            {activeSection === "tools" && (
                                <>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image10}
                                            alt="ChatGPT: Master Free AI tools"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">ChatGPT: Master Free AI tools</h3>
                                        <p className="text-gray-500 mt-1">Specialization</p>
                                    </article>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image11}
                                            alt="Introduction to GitHub Copilot"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Introduction to GitHub Copilot</h3>
                                        <p className="text-gray-500 mt-1">Course</p>
                                    </article>
                                    <article className="rounded-lg p-4 bg-white w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <img
                                            src={Image12}
                                            alt="Generative AI Content Creation"
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="font-semibold mt-2">Generative AI Content Creation</h3>
                                        <p className="text-gray-500 mt-1">Course</p>
                                    </article>
                                </>
                            )}
                        </div>

                        <p className="mt-6 flex justify-end">
                            <a
                                href="/certificates"
                                className="text-black hover:underline flex items-center"
                                aria-label="Explore all certificates"
                            >
                                Explore all certificates <FaArrowRight className="ml-1" />
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        );
    };

    export default GenAI;