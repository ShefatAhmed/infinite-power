import React from 'react';
import useInstructor from '../hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const InstructorRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-0 rounded-full animate-spin"></div>
        </div>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoutes;