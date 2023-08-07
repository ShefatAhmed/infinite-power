import React from 'react';

const TnVideo = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 p-8 bg-gray-100">
            <div className="md:w-1/2 p-8">
                <h1 className="text-6xl font-bold md:text-left">
                    Discover the <span className='text-red-500'>World</span> of Karate
                </h1>
                <p className="text-gray-700 md:text-left">
                    Karate have a rich history in cultures around the globe. Learn about their significance and impact on society.
                </p>
                <button className='text-red-500 font-bold mt-1 uppercase mt-5'>Read More <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="relative w-full h-0 pb-96 md:w-1/2">
                <h1 className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-2xl font-semibold text-center text-white">
                    Watch How Karate Train
                </h1>
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/AjHqNxPXvAE"
                    title="Karate kids basic training! (Aomori, Japan)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default TnVideo;