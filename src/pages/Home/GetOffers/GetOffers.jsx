import React from 'react';

const GetOffers = () => {
    return (
        <div className="flex flex-col md:flex-row p-8">
            <div className="md:w-1/2">
                <div className="h-40 md:h-full text-center bg-gray-200 text-gray-500 p-4 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-8xl font-bold">-25%</h1>
                    <p className="font-bold">From 1 November</p>
                </div>
            </div>
            <div className="md:w-1/2">
                <div className="h-60 md:h-full bg-red-50 p-6 md:p-16 flex flex-col justify-center">
                    <h1 className="text-xl md:text-2xl font-bold">
                        Register now and <br />
                        <span className="text-red-500">Get your rainings discount</span>
                    </h1>
                    <button className="bg-black hover:bg-white hover:text-black text-white font-medium py-3 md:py-4 px-4 uppercase font-bold mt-4 md:mt-5">
                        Join Network <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetOffers;