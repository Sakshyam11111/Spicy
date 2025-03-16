import React, { useState, useRef } from "react";
import { IoIosArrowForward, IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close the dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
                    <div className="relative dropdown text-xl border  py-2 px-4 rounded-2xl" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center hover:text-purple-500 cursor-pointer hover:underline"
                        >
                            <span>Explore</span>
                            <IoIosArrowDown className="ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute bg-black text-white rounded-lg shadow-lg p-4 mt-2 w-71">
                                <div className="flex flex-col space-y-1">
                                    <h2 className="text-2xl font-medium mb-2">Goal</h2>
                                    <Link to="/take" className="text-lg hover:text-purple-500 hover:underline">
                                        Take a free course <IoIosArrowForward className="inline" />
                                    </Link>
                                    <Link to="/degree" className="text-lg hover:text-purple-500 hover:underline">
                                        Earn a Degree <IoIosArrowForward className="inline" />
                                    </Link>
                                    <Link to="/certificate" className="text-lg hover:text-purple-500 hover:underline">
                                        Earn a Certificate <IoIosArrowForward className="inline" />
                                    </Link>
                                    <Link to="/career" className="text-lg hover:text-purple-500 hover:underline">
                                        Find your new career <IoIosArrowForward className="inline" />
                                    </Link>

                                    <h2 className="text-2xl font-medium mb-2 mt-4">Subjects</h2>
                                    <Link to="/data-science" className="text-lg hover:text-purple-500 hover:underline">
                                        Data Science <IoIosArrowForward className="inline" />
                                    </Link>
                                    <Link to="/business" className="text-lg hover:text-purple-500 hover:underline">
                                        Business <IoIosArrowForward className="inline" />
                                    </Link>
                                    <Link to="/computer-science" className="text-lg hover:text-purple-500 hover:underline">
                                        Computer Science <IoIosArrowForward className="inline" />
                                    </Link>
                                    <Link to="/information-technology" className="text-lg hover:text-purple-500 hover:underline">
                                        Information Technology <IoIosArrowForward className="inline" />
                                    </Link>
                                    {/* Add more subjects as needed */}
                                </div>
                            </div>
                        )}
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
                        <Link to="/" className="hover:text-purple-500 hover:underline">Home</Link>
                        <Link to="/onlineDegree" className="hover:text-purple-500 hover:underline">Online Degree</Link>
                        <Link to="/careers" className="hover:text-purple-500 hover:underline">Careers</Link>
                        <Link to="/login" className="hover:text-purple-500 hover:underline">Log In</Link>
                        <Link to="/join" className="border border-purple-500 text-purple-500 py-2 px-4 rounded-md hover:border-gray-300 hover:text-gray-300 transition-colors">
                            Join for Free
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;