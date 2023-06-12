import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassesPage = ({ classItem }) => {
    const { name, image, Price, _id } = classItem;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const isAdmin = useAdmin();
    const isInstructor = useInstructor();
    const handleSelectClass = classItem => {
        console.log(classItem);
        if (user && user.email) {
            const selectedClass = { selectedClassId: _id, name, image, Price, email: user.email }
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'This class has been successfully selected.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Must login before selecting any class.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ffad00',
                cancelButtonColor: '#fe0000',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
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
                    onClick={() => handleSelectClass(classItem)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white text-white font-medium py-2 px-4 rounded-full uppercase text-bold"
                    disabled={classItem.Available_seats === 0 || (isAdmin || isInstructor)}
                >
                    Select The Class
                </button>
            </div>
        </div>
    );
};

export default ClassesPage;