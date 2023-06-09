import React, { useEffect, useState } from 'react';

const PopularInstractor = () => {
    const [popularInstractor, setPopularInstractor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popularInstractor')
            .then((res) => res.json())
            .then((data) => {
                setPopularInstractor(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className='bg-gray-200 py-8'>
            <div className="text-center py-1">
                <h2 className="text-3xl font-bold mb-1 uppercase">Popular Instractor</h2>
                <p className="text-lg font-bold text-gray-500 mb-8 md:px-0 px-5">Infinite Power Martial Arts School houses certified instructors with vast expertise and exceptional qualifications</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6">
                {popularInstractor.map((instructor) => (
                    <div key={instructor.id} className="flex flex-col items-center">
                        <div className="w-48 h-48 bg-gray-300 overflow-hidden">
                            <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="mt-2">{instructor.name}</h2>
                        <p className="text-gray-600">{instructor.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstractor;