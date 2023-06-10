import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const StudentDashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='flex items-center justify-center gap-3 mt-24'>
            <div>
                <img className='w-80 h-80 rounded-lg' src={user.photoURL} alt="" />
            </div>
            <div>  
            <h1 className='text-4xl font-bold uppercase'>{user.displayName}</h1>
            <h5>Email: {user.email}</h5>
            </div>
        </div>
    );
};

export default StudentDashboard;