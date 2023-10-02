import React from 'react';
import { Link } from 'react-router-dom';

const JoinClass = () => {
    return (
            <div className='mt-16'>
                <div>
                    <h1 className='text-4xl font-bold text-center'><span className='text-gray-400 '>Learn to defend</span> <br />
                        using only your hands</h1>
                    <div className="flex justify-center items-center my-5">
                        <hr
                            className="w-2/12 border-t-2 border-gray-400"
                            style={{ borderTopWidth: '5px' }}
                        />
                    </div>
                    <p className='px-24 text-center'>Pellentesque congue quis massa sagittis posuere. Praesent placerat cursus lacus, <br /> sed suscipit dapibus vel. Aliquam erat volutpat. Integer malesuada turpis.</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="card card-side bg-white shadow-xl m-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold mb-2">Karate <br /> for Kids</h2>
                            <p>Pellentesque congue quis massa sagittis posuere.</p>
                            <div className="card-actions justify-end mt-4">
                                <Link to="/classes" className="common-button w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white text-white font-medium py-2 px-4 uppercase text-bold rounded-lg">Join Class</Link>
                            </div>
                        </div>
                        <figure>
                            <img src="https://i.ibb.co/kDxnHFh/karate-class-1.png" alt="" />
                        </figure>
                    </div>
                    <div className="card card-side bg-white shadow-xl m-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold mb-2">Martial Arts <br /> for Adults</h2>
                            <p className="text-gray-600">Curabitur consectetur egestas arcu non bibendum.</p>
                            <div className="card-actions justify-end mt-4">
                                <Link to="/classes" className="common-button w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white text-white font-medium py-2 px-4 uppercase text-bold rounded-lg" >Join Class</Link>
                            </div>
                        </div>
                        <figure>
                            <img src="http://artkombat.like-themes.com/wp-content/uploads/2018/10/karate-class-2.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
    );
};

export default JoinClass;