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
            <h1 className='text-center font-bold text-xl my-4 uppercase'>Manage Classes</h1>
            <div className="overflow-x-auto w-[1000px] bg-gradient-to-r from-purple-50 to-red-50">
                <table className="table">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Class Name</th>
                        <th>Status</th>
                        <th className='text-center'>Total Enrolled Students</th>
                        <th className='text-center'>Feedback</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myClasses.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <img src={item.image} className="w-12 h-12 rounded-full" alt="Class" />
                                </td>
                                <td>
                                    <h3>{item.name}</h3>
                                </td>
                                <td>
                                    <h3 className="text-xs text-sky-500 font-semibold">{item.Status}</h3>
                                </td>
                                <td>
                                    <p className='text-center'>{item.number_of_student}</p>
                                </td>
                                <td>
                                    <p className='text-center'>
                                        {item.feedback}
                                    </p>
                                </td>
                                <td>
                                    <button className="px-5 py-2 bg-gradient-to-l from-fuchsia-500 to-blue-500 text-white font-bold rounded">
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;