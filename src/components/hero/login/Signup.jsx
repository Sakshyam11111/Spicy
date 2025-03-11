import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"; 

const Signup = () => {
    const handleClose = () => {
        // Handle closing the login form, e.g., navigate to another page
        window.location.href = "/"; // Change this to your desired route
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-10 mb-10 relative">
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                >
                    <IoMdClose size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                            Email *
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="name@email.com"
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                            Password *
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-4 py-2 rounded w-full hover:bg-purple-500 transition"
                    >
                        Login
                    </button>
                    <div className="flex items-center justify-between mt-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <div className="mt-4 flex flex-col space-y-2">
                        <button className="border border-black px-4 py-2 rounded w-full hover:bg-gray-100 flex items-center justify-center">
                            <FcGoogle className="mr-2" />
                            Continue with Google
                        </button>
                        <button className="border border-black px-4 py-2 rounded w-full hover:bg-gray-100 flex items-center justify-center">
                            <FaFacebook className='text-blue-700 mr-2' />
                            Continue with Facebook
                        </button>
                        <button className="border border-black px-4 py-2 rounded w-full hover:bg-gray-100 flex items-center justify-center">
                            <FaApple className="mr-2" />
                            Continue with Apple
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    New to Spicy?{' '}
                    <a href="/login" className="text-purple-600 hover:underline">
                        Sign up
                    </a>
                </p>
                <hr className="my-4 border-gray-300" />
                <p className="text-gray-500 text-sm mt-10 text-center">
                    Having trouble logging in? <span className='underline'>Learner help center</span>
                </p>
                <p className="text-gray-500 text-sm mt-6 text-center">
                    This site is protected by reCAPTCHA Enterprise and the Google <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.
                </p>
            </div>
        </div>
    );
};

export default Signup;