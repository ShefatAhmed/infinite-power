import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const AddClasses = () => {
    const {user} = useAuth();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const instructor_name = user.displayName;
        const instructor_email = user.email;
        const Available_seats = form.Available_seats.value;
        const Price = form.Price.value;
        const newClass = {name, image,  instructor_name, instructor_email, Available_seats, Price, Status: "pending"};

        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        text: 'Successfully added this class. If an admin approve this class then its show classes page',
                        icon: 'success',
                      })
                }
            })
        event.target.reset('');
    }
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-2xl text-center font-bold mb-8 uppercase">Add A Class</h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-gradient-to-r from-purple-50 to-red-50 rounded-lg p-8 shadow-lg"
            >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Class name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 p-2 w-full rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Class Image</label>
                    <input
                        type="text"
                        name="image"
                        required
                        className="mt-1 p-2 w-full rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Instructor name</label>
                    <p className="mt-1 p-2 block w-full rounded-lg">{user.displayName}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Instructor email</label>
                    <p className="mt-1 p-2 block w-full rounded-lg">{user.email}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Available seats</label>
                    <input
                        type="number"
                        name="Available_seats"
                        required
                        className="mt-1 p-2 w-full rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="Price"
                        required
                        className="mt-1 p-2 w-full rounded-lg"
                    />
                </div>
                <div className="mb-4 text-center">
                    <button
                        type="submit"
                        className="py-1 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white mx-auto w-full rounded-full"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClasses;