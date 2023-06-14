import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [feedbackText, setFeedbackText] = useState('');

    useEffect(() => {
        fetch('https://summer-camp-server-silk.vercel.app/classes')
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((classItem) => classItem.added_by === 'instructor');
                setClasses(filteredData);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleApprove = (classId) => {
        const updatedClasses = classes.map((classItem) => {
            if (classItem._id === classId) {
                return {
                    ...classItem,
                    Status: 'approve'
                };
            }
            return classItem;
        });
        setClasses(updatedClasses);

        fetch(`https://summer-camp-server-silk.vercel.app/classes/approve/${classId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Status: 'approve' })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        text: 'The status has been updated successfully.',
                        icon: 'success'
                    });
                }
            })
            .catch((error) => console.log(error));
    };

    const handleDeny = (classId) => {
        const updatedClasses = classes.map((classItem) => {
            if (classItem._id === classId) {
                return {
                    ...classItem,
                    Status: 'denied'
                };
            }
            return classItem;
        });
        setClasses(updatedClasses);

        fetch(`https://summer-camp-server-silk.vercel.app/classes/deny/${classId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Status: 'denied' })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Update',
                        text: 'The status has been updated successfully.',
                        confirmButtonColor: '#48D1CC',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    });
                }
            })
            .catch((error) => console.log(error));
    };

    const handleFeedbackModalOpen = (classItem) => {
        setSelectedClass(classItem);
        setFeedbackModalOpen(true);
    };

    const handleFeedbackModalClose = () => {
        setSelectedClass(null);
        setFeedbackText('');
        setFeedbackModalOpen(false);
    };

    const handleFeedbackSubmit = () => {
        if (selectedClass) {
            const classId = selectedClass._id;
            const updatedClasses = classes.map((classItem) => {
                if (classItem._id === classId) {
                    return {
                        ...classItem,
                        feedback: feedbackText
                    };
                }
                return classItem;
            });
            setClasses(updatedClasses);

            fetch(`https://summer-camp-server-silk.vercel.app/classes/feedback/${classId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ feedback: feedbackText })
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.modifiedCount) {
                        Swal.fire({
                            text: 'Feedback has been sent successfully.',
                            icon: 'success'
                        });
                        handleFeedbackModalClose();
                    }
                })
                .catch((error) => console.log(error));
        }
    };


    return (
        <div className="overflow-x-auto">
            <h1 className='text-center font-bold text-xl my-16'>Manage Classes</h1>
            <table className="table">
                <thead>
                    <th></th>
                    <th>Class Name</th>
                    <th>Instructor Name</th>
                    <th>Instructor Email</th>
                    <th>Available Seats</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Feedback</th>
                </thead>
                <tbody>
                    {classes.map((classItem) => (
                        <tr key={classItem._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={classItem.image} alt="Class" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{classItem.name}</td>
                            <td>{classItem.instructor_name}</td>
                            <td>{classItem.instructor_email}</td>
                            <td className='text-center'>{classItem.Available_seats}</td>
                            <td>${classItem.Price}</td>
                            <td className='text-sky-500'>{classItem.Status}</td>
                            <td className='text-sky-500'>{classItem.feedback}</td>
                            <td>
                                <button
                                    onClick={() => handleApprove(classItem._id)}
                                    disabled={classItem.Status === 'approve' || classItem.Status === 'denied'}
                                    className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white px-8 py-2 rounded-full'
                                >
                                    Approve
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeny(classItem._id)}
                                    disabled={classItem.Status === 'approve' || classItem.Status === 'denied'}
                                    className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white px-8 py-2 rounded-full'
                                >
                                    Deny
                                </button>
                            </td>
                            <td className='text-center'>
                                <button
                                    className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white px-8 py-2 rounded-full w-[160px]'
                                    onClick={() => handleFeedbackModalOpen(classItem)}
                                >
                                   Send Feedback
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedClass && (
                <div className={`modal ${feedbackModalOpen ? 'modal-open' : ''}`}>
                    <div className="modal-overlay"></div>
                    <div className="modal-container" style={{ width: '80%', height: '100%' }}>
                        <div className="modal-content">
                            <h3>Provide Feedback</h3>
                            <textarea
                                value={feedbackText}
                                className='rounded-lg w-full h-4/5 p-5'
                                rows={8}
                                onChange={(e) => setFeedbackText(e.target.value)}
                                placeholder="Write your feedback here..."
                            ></textarea>
                        </div>
                        <div className="modal-actions">
                            <button className="border border-sky-300 bg-white font-bold py-2 px-8 rounded" onClick={handleFeedbackModalClose}>
                                Cancel
                            </button>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white font-bold py-2 px-8 rounded ms-5" onClick={handleFeedbackSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;




