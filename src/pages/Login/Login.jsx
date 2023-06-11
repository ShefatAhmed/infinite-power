import React, { useContext, useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const userSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                switch (error.code) {
                    case 'auth/invalid-email':
                        setErrorMessage('Please provide a valid email address.');
                        break;
                    default:
                        setErrorMessage('Please provide valid email and password.');
                        break;
                }
            })
    }
    const GoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-12 md:w-4/12 shadow-2xl rounded-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={userSignIn}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700"
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
                                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700"
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
                    <button onClick={GoogleLogin} className="w-full text-black rounded-full btn btn-sm border border-xl rounded-full">
                        <span className="mr-2">
                            <FcGoogle />
                        </span>
                        Sign In with Google
                    </button>
                    <div className="mx-16 my-5 h-px bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300"></div>
                    <p><small>Don't have an account yet ? <Link to="/singup" className='link'>Register Now</Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default Login;