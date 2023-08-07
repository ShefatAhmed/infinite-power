import React, { useEffect, useState } from 'react';

const PopularInstractor = () => {
    const [popularInstractor, setPopularInstractor] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-silk.vercel.app/popularInstractor')
            .then((res) => res.json())
            .then((data) => {
                setPopularInstractor(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className='pt-8'>
            <div className="text-center py-1">
                <h2 className="text-3xl font-bold mb-1 uppercase text-gray-400">Popular Instructor</h2>
                <p className="text-lg font-bold mb-8 md:px-0 px-5">Infinite Power Martial Arts School houses certified instructors with vast expertise and exceptional qualifications</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {popularInstractor.slice(0,4).map((instructor) => (
                    <div key={instructor._id} className="flex flex-col items-center">
                        <div className="w-48 h-48 bg-gray-300 overflow-hidden rounded">
                            <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="mt-2 text-lg font-semibold">{instructor.name}</h2>
                        <p className="text-gray-600 text-sm">{instructor.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstractor;