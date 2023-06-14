import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-silk.vercel.app/popularClasses')
            .then((res) => res.json())
            .then((data) => {
                setPopularClasses(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className='pt-20 pb-8'>
            <div className="text-center py-1">
                <h2 className="text-3xl font-bold mb-1 uppercase underline text-gray-400">Popular Class</h2>
                <p className="text-lg font-bold text-gray-500 mb-8 md:px-0 px-8">Learn the fundamentals of self-defense and build your strength and agility in our Popular Class</p>
            </div>
            <div className='flex flex-wrap px-16'>
                {popularClasses.slice(0, 6).map((classItem) => (
                    <div
                        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4'
                        key={classItem._id}
                    >
                        <div className='bg-white rounded-lg shadow-lg h-full flex flex-col'>
                            <div className='aspect-w-16 aspect-h-9'>
                                <img
                                    src={classItem.image}
                                    alt={classItem.name}
                                    className='object-cover rounded-t-lg'
                                />
                            </div>
                            <div className='p-4 flex-1'>
                                <p className='text-lg font-semibold mb-2'>{classItem.name}</p>
                                <p>Number of Students: {classItem.number_of_student}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;