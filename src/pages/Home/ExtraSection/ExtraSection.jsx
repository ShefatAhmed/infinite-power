import React from 'react';
import './ExtraSection.css';
const ExtraSection = () => {
    return (
        <div className='flex flex-col sm:flex-row text-center px-5'>
            <div className='flex-1 container'>
                <div className='box'>
                    <div className='content'>
                        <h1 className='text-gray-400 uppercase font-bold text-center'>--About Us--</h1>
                        <p className='text-4xl uppercase font-bold text-gray-400 underline'>We are the best summer camp!</p>
                        <p className='text-xs italic'>
                            <span className='font-bold'>Infinite Power is a premier martial arts school</span> that embodies strength, resilience, and limitless growth. Our training programs encompass a comprehensive range of disciplines, allowing students to explore various martial arts styles and techniques. With experienced instructors and state-of-the-art facilities, we offer unparalleled instruction tailored to individual goals. Whether you seek to enhance self-defense skills, improve physical fitness, or foster personal development, Infinite Power provides a transformative experience that will empower you to conquer any challenge that comes your way.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1 container'>
                <div className='box'>
                    <div className='content'>
                        <h1 className='text-4xl uppercase font-bold text-gray-400 underline mb-5'>Facilities</h1>
                        <ul className="list-none uppercase font-bold flex flex-col items-center gap-3">
                            <li className="flex items-center">
                                <i className="fas fa-check text-gray-400 mr-2 text-xl"></i>
                                Boys & Girls
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-gray-400 mr-2 text-xl"></i>
                                Ages 7-21
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-gray-400 mr-2 text-xl"></i>
                                Personal Guideline
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-gray-400 mr-2 text-xl"></i>
                                Special Events & Trips
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-gray-400 mr-2 text-xl"></i>
                                Professional Staff
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;