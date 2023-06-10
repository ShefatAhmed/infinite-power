import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Classes = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const isAdmin = user && user.isAdmin;
    const isInstructor = user && user.isInstructor;
    return (
        <div className="flex flex-wrap justify-center py-16">
            <h1 className="text-3xl font-bold text-center w-full mb-8 uppercase">All Classes Is Here</h1>
            {classes.map((classItem) => (
                <div
                    key={classItem.id}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4`}
                >
                    <div className={`rounded-lg shadow-lg h-96 overflow-hidden flex flex-col ${classItem.Available_seats === 0 ? 'bg-red-300' : 'bg-white'
                        }`}>
                        <img
                            className="w-full h-40 object-cover object-center"
                            src={classItem.image}
                            alt="Course Image"
                        />
                        <div className="flex-grow p-4">
                            <h3 className="text-lg font-medium text-gray-800">{classItem.name}</h3>
                            <p className="text-gray-600">Instructor: {classItem.instructor}</p>
                            <p className="text-gray-600">Available Seats: {classItem.Available_seats}</p>
                            <p className="text-gray-600">Price: ${classItem.Price}</p>
                        </div>
                        <div className="p-4">
                            <button
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white text-white font-medium py-2 px-4 rounded-full uppercase text-bold"
                                disabled={classItem.Available_seats === 0 || (isAdmin || isInstructor)}
                            >
                                Select The Class
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Classes;