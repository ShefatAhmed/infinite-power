import { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const EnrolledClasses = () => {
    const { user } = useAuth();
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    useEffect(() => {
        fetch(`https://summer-camp-server-silk.vercel.app/paymenthistory/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setEnrolledClasses(data);
            });
    }, [user]);
    return (
        <div className="flex flex-col items-center my-16">
            <h1 className="text-2xl font-bold my-4 uppercase text-center">All the classes you have selected are shown here</h1>
            <div className='w-full max-w-4xl overflow-x-auto'>
                {enrolledClasses.map((enrolledClass) => (
                    <div
                        key={enrolledClass._id}
                        className="shadow-lg bg-white m-4 transition duration-300 transform hover:scale-105 flex items-center justify-between min-w-[300px] max-w-[400px] gap-5"
                    >
                        <div>
                            <img src={enrolledClass.image} alt="" className="w-16 h-16" />
                        </div>
                        <div>
                            <h1 className='text-xs font-bold text-sky-500'>paid</h1>
                        </div>
                        <div className='flex-grow mx-4'>
                            <h2 className="text-lg font-bold">{enrolledClass.selectedNames}</h2>
                        </div>
                        <div className='font-bold text-red-500'>
                            <h1>enrolled</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {
                    enrolledClasses.length === 0 && <p className='text-4xl font-bold text-center'>You are not enrolled in any classes yet</p>
                }
            </div>
        </div>
    );
};

export default EnrolledClasses;