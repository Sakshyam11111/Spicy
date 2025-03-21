import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Links Section */}
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li><Link to="/courses" className="hover:underline">Courses</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold mb-4">Contact Us</h3>
                        <p>Email: support@spicy.com</p>
                        <p>Phone: +1 800 123 4567</p>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-xl hover:text-blue-500" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-xl hover:text-blue-400" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-xl hover:text-blue-600" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl hover:text-pink-500" />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="font-bold mb-4">Log In to Spicy</h3>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 rounded-md text-gray-800"
                        />
                        <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded-md mt-2 block text-center hover:bg-purple-500">
                            Log In
                        </Link>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-8">
                    <p>&copy; {new Date().getFullYear()} Spicy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;