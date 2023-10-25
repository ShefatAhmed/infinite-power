import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BuyBooks = () => {
    const images = [
        { id: 1, name: 'Art Kombat', url: 'https://i.ibb.co/gMz5JkL/blog-01-755x516.jpg' },
        { id: 2, name: 'Boxing Classes', url: 'https://i.ibb.co/48tLhqv/blog-02-755x489.jpg' },
        { id: 3, name: 'Karate School', url: 'https://i.ibb.co/Rzhh8Zn/blog-04-755x539.jpg' },
        { id: 4, name: 'Kickboxing', url: 'https://i.ibb.co/9qXgF8w/blog-06-755x514.jpg' },
        { id: 5, name: 'Martial arts', url: 'https://i.ibb.co/CPSKGYH/blog-08-755x504.jpg' },
        { id: 6, name: 'Aikido', url: 'https://i.ibb.co/4N617Vh/blog-09-755x503.jpg' },
        { id: 7, name: 'Kung Fu', url: 'https://i.ibb.co/pd8kLSn/blog-10-755x503.jpg' },
        { id: 8, name: 'Jujutsu', url: 'https://i.ibb.co/0qP7gDD/blog-03-755x502.jpg' },
    ];
    useEffect(() => {
        Aos.init({duration: 1000});
    })
    return (
        <div className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-800 text-center">
                    Training Gallery
                </h2>
                <div className="flex justify-center items-center mt-1 mb-5">
                    <hr
                        className="w-2/12 border-t-2 border-gray-900"
                        style={{ borderTopWidth: '5px' }}
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                    {images.map((image) => (
                        <div key={image.id} className="flex flex-col items-center p-2 sm:p-4">
                            <img src={image.url} alt={image.name} className="w-56 sm:w-64 h-56 sm:h-64 rounded mb-2" data-aos="zoom-out"/>
                            <p className="text-gray-700 font-bold text-center uppercase">{image.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyBooks;