import React from 'react';

const BuyBooks = () => {
    const images = [
        { id: 1, name: 'Art Kombat', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_01-755x516.jpg' },
        { id: 2, name: 'Boxing Classes', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_02-755x489.jpg' },
        { id: 3, name: 'Karate School', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_03-755x502.jpg' },
        { id: 4, name: 'Kickboxing', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_04-755x539.jpg' },
        { id: 5, name: 'Martial arts', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_06-755x514.jpg' },
        { id: 6, name: 'Aikido', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_08-755x504.jpg' },
        { id: 7, name: 'Kung Fu', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_09-755x503.jpg' },
        { id: 8, name: 'Jujutsu', url: 'http://artkombat.like-themes.com/wp-content/uploads/2018/09/blog_10-755x503.jpg' },
    ];
    
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
                            <img src={image.url} alt={image.name} className="w-56 sm:w-64 h-56 sm:h-64 rounded mb-2" />
                            <p className="text-gray-700 font-bold text-center uppercase">{image.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyBooks;