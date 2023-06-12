import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((classItem) => classItem.Status === 'pending');
                setClasses(filteredData);
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="overflow-x-auto">
            <h1 className='text-center font-bold text-xl my-5'>Mange Classes</h1>
            <table className="table">
                <tbody>
                    {classes.map(classItem => (
                        <tr key={classItem._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={classItem.image}/>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            {classItem.name}
                            </td>
                            <td>{classItem.instructor_name}</td>
                            <th>
                                {classItem.instructor_email}
                            </th>
                            <th>
                                {classItem.Available_seats}
                            </th>
                            <th>{classItem.Price}</th>
                            <th className='text-sky-500'>{classItem.Status}</th>
                            <th><button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white px-8 py-2 rounded-full'>Approve</button></th>
                            <th><button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white px-8 py-2 rounded-full'>Deny</button></th>
                            <th><button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white px-8 py-2 rounded-full'>Feedback</button></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;




