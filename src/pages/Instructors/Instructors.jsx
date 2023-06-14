import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setinstructors] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-silk.vercel.app/instructor')
            .then((res) => res.json())
            .then((data) => {
                setinstructors(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="flex flex-col items-center my-16">
            <h1 className="text-2xl font-bold my-4">Meet Our Instructors</h1>
            <div className="flex flex-wrap justify-center">
                {instructors.map((instructor) => (
                    <div
                        key={instructor._id}
                        className="w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-4"
                    >
                        <div className="flex items-center p-4">
                            <img src={instructor.image} alt="Instructor" className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h2 className="text-xl font-bold">{instructor.instructor_name}</h2>
                                <p className="text-gray-500">Email: {instructor.instructor_email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructors;