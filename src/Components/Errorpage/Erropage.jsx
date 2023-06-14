import React from 'react';
import { Link } from 'react-router-dom';

const Erropage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-semibold text-gray-800  mb-8">Oops! Page Not Found</h1>
            <img
                src="https://i.ibb.co/fqRkN5J/404-pages.webp"
                alt="404 - Page Not Found"
                className="w-[800px] mb-8"
            />
            <p className="text-xl text-gray-600">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white px-16 py-3 rounded-lg mt-5">
                Back to Home
            </Link>
        </div>
    );
};

export default Erropage;