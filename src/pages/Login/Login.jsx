import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-12 md:w-4/12 shadow-2xl rounded-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                            />
                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={handlePasswordVisibility}
                            >
                                {showPassword ? (
                                    <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white font-semibold py-1 rounded-full">
                            Login
                        </button>
                    </div>
                    <p className='text-center'><small>Or</small> </p>
                    <button className="w-full text-black rounded-full btn btn-sm border border-xl rounded-full">
                        <span className="mr-2">
                            <FcGoogle />
                        </span>
                        Sign In with Google
                    </button>
                    <div class="mx-16 my-5 h-px bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300"></div>
                    <p><small>Don't have an account yet ? <Link to="/singup" className='link'>Register Now</Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default Login;