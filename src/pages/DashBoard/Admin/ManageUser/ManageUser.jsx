import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-server-silk.vercel.app/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, [users]);

    const handleMakeInstructor = (user) => {
        fetch(`https://summer-camp-server-silk.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    const instructor = {
                        _id: user._id,
                        image: user.image,
                        number_of_students: 50,
                        instructor_name: user.name,
                        instructor_email: user.email
                    };
                    fetch('https://summer-camp-server-silk.vercel.app/addinstructor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(instructor)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `${user.name} is now an instructor`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        });
                }
            });
    };


    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-server-silk.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin from now on`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-8 text-center">Manage User</h1>
            <div className="flex flex-wrap justify-center w-full max-w-7xl overflow-y-auto">
                {users.map((user) => (
                    <div
                        key={user._id}
                        className="rounded-lg shadow-lg p-4 m-4 flex flex-col items-center bg-gradient-to-r from-purple-50 to-red-50 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
                        style={{ maxWidth: '100%' }}
                    >
                        <img
                            className="w-24 h-24 rounded-lg mb-4"
                            src={user.image}
                            alt="User Avatar"
                        />
                        <div className="text-center">
                            <p className="text-gray-500 mb-2">{user.role}</p>
                        </div>
                        <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
                        <p className="text-gray-500 mb-4">{user.email}</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                className="border border-sky-300 bg-white font-bold py-2 px-8 rounded-lg hover:bg-sky-50 text-sm sm:text-base w-full max-w-xs"
                                onClick={() => handleMakeInstructor(user)}
                                disabled={user.role === 'Instructor' || user.role === 'Admin'}
                            >
                                Make Instructor
                            </button>
                            <button
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-500 font-bold text-white py-2 px-8 rounded-lg text-sm sm:text-base w-full max-w-xs"
                                onClick={() => handleMakeAdmin(user)}
                                disabled={user.role === 'Instructor' || user.role === 'Admin'}
                            >
                                Make Admin
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUser;