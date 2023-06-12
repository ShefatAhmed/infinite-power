import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyClasses = () => {
    const [myClasses, setMyClasses] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myclasses/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyClasses(data);
            });
    }, [user?.email]);
    return (
        <div className="flex flex-col items-center my-16">
            <h1 className="text-2xl font-bold my-4 uppercase">The classes you added are shown here</h1>
            <div className='w-10/12'>
                {myClasses.map(item => (
                    <div
                        key={item._id}
                        className="flex items-center justify-evenly bg-white rounded-lg p-4 shadow-md"
                    >
                        <img src={item.image} className="w-12 h-12 rounded-full" />
                        <h3>{item.name}</h3>
                        <h3 className="text-xs text-sky-500 font-semibold">{item.Status}</h3>
                        <p>Total Enrolled Students: {item.number_of_student}</p>
                        {item.feedback === 'pending' && (
                            <p className='text-center'>
                                <span>Feedback</span> <br />
                                {item.feedback}
                            </p>
                        )}
                        <button className="px-5 py-2 bg-gradient-to-l from-fuchsia-500 to-blue-500 text-white font-bold rounded">
                            Update
                        </button>
                    </div>
                ))}
                {
                    myClasses.length === 0 && <p className='text-4xl font-bold text-center'>You have not added any classes yet</p>
                }
            </div>
        </div>
    );
};

export default MyClasses;