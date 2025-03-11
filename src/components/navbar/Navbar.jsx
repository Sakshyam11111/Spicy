import React, { useState } from "react";
import { IoIosArrowForward, IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close the dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownOpen && !event.target.closest('.dropdown')) {
            setDropdownOpen(false);
        }
    };

    // Add event listener for clicks outside the dropdown
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <nav className="bg-black text-white shadow-md relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between h-16">
                    <div className="flex items-center ml-10 mb-4 md:mb-0">
                        <h1 className="font-extrabold text-2xl">Spicy</h1>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-7 mr-10 text-xl">
                        <div className="relative flex-grow md:max-w-xs">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-800 text-white border border-gray-600 rounded-full py-2 pr-10 pl-10 w-full focus:outline-none focus:border-purple-500"
                            />
                            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <a href="/" className="hover:text-purple-500 hover:underline">Home</a>
                        <div className="relative dropdown">
                            <button
                                onClick={toggleDropdown}
                                className="hover:text-purple-500 cursor-pointer hover:underline"
                            >
                                Explore
                            </button>
                            {dropdownOpen && (
                                <div className="absolute bg-black text-white rounded-lg shadow-lg p-4 mt-2 w-71">
                                    <div className="flex flex-col space-y-1">
                                        <h2 className="text-2xl font-medium mb-2">Goal</h2>
                                        <a href="/take" className="text-lg hover:text-purple-500 hover:underline">
                                            Take a free course <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/degree" className="text-lg hover:text-purple-500 hover:underline">
                                            Earn a Degree <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/certificate" className="text-lg hover:text-purple-500 hover:underline">
                                            Earn a Certificate <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Find your new career <IoIosArrowForward className="inline" />
                                        </a>

                                        <h2 className="text-2xl font-medium mb-2 mt-4">Subjects</h2>
                                        <a href="/take" className="text-lg hover:text-purple-500 hover:underline">
                                            Data Science <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/degree" className="text-lg hover:text-purple-500 hover:underline">
                                            Business <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/certificate" className="text-lg hover:text-purple-500 hover:underline">
                                            Computer Science <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Information Technology <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Language Learning <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Health <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Personal Development <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Physical Science and Engineering <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Social Science <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Arts and Humanities <IoIosArrowForward className="inline" />
                                        </a>
                                        <a href="/career" className="text-lg hover:text-purple-500 hover:underline">
                                            Math and Logic <IoIosArrowForward className="inline" />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a href="/onlineDegree" className="hover:text-purple-500 hover:underline">Online Degree</a>
                        <a href="/careers" className="hover:text-purple-500 hover:underline">Careers</a>
                        <a href="/login" className="hover:text-purple-500 hover:underline">Log In</a>
                        <a href="/login" className="border border-purple-500 text-purple-500 py-2 px-4 rounded-md hover:border-gray-300 hover:text-gray-300 transition-colors">Join for Free</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;