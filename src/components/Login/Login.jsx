import React from 'react';
import Logo from '../../assets/logo.png';

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen dark:text-white bg-gradient-to-br from-blue-400 to-blue-900">
            <form className="max-w-lg w-full mx-4 md:mx-auto md:p-8 rounded-lg bg-white dark:bg-gray-900 shadow-lg md:rounded-xl">
                <div className="flex justify-center items-center mb-8">
                    <a href="#" className="flex items-center gap-2">
                        <img src={Logo} alt="Logo" className="w-10" />
                        <span className="text-3xl font-bold text-blue-900 dark:text-white">Belanya</span>
                    </a>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="username" className="text-gray-800 dark:text-gray-200">Username</label>
                    <input
                        id="username"
                        className="rounded-lg bg-gray-200 dark:bg-gray-700 mt-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="password" className="text-gray-800 dark:text-gray-200">Password</label>
                    <input
                        id="password"
                        className="rounded-lg bg-gray-200 dark:bg-gray-700 mt-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label className="flex items-center text-gray-800 dark:text-gray-200">
                        <input className="mr-2" type="checkbox" /> Remember Me
                    </label>
                    <a href="#" className="text-blue-600 dark:text-blue-300">Forgot Password</a>
                </div>
                <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    SIGN IN
                </button>
            </form>
        </div>
    );
};

export default Login;
