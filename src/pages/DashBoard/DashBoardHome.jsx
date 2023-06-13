import React from 'react';
import useAuth from '../../hooks/useAuth';
const DashBoardHome = () => {
    const { user } = useAuth();
    return (
        <div className='flex items-center justify-center gap-3 mt-24'>
            <div>
                <img className='w-80 h-80 shadow-lg rounded-lg' src={user.photoURL} alt="" />
            </div>
            <div>  
            <h1 className='text-4xl font-bold uppercase'>{user.displayName}</h1>
            <h5>Email: {user.email}</h5>
            </div>
        </div>
    );
};

export default DashBoardHome;