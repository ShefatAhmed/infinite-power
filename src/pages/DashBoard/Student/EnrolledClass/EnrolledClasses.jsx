import { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const EnrolledClasses = () => {
    const { user } = useAuth();
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    useEffect(() => {
        fetch(`https://summer-camp-server-silk.vercel.app/selectedClass/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setEnrolledClasses(data);
            });
    }, [user]);
    return (
        <div className="flex flex-col items-center my-16">
            <h1 className="text-2xl font-bold my-4 uppercase">All the classes you have selected are shown here</h1>
            <div className='w-10/12'>
                {enrolledClasses.filter((enrolledClass) => enrolledClass.payment !== 'pending')
                    .map((enrolledClass) => (
                        <div
                            key={enrolledClass._id}
                            className=" shadow-lg bg-white m-4 transition duration-300 transform hover:scale-105 flex items-center  justify-between"
                        >
                            <div>
                                <img src={enrolledClass.image} alt="" className="w-16 h-16" />
                            </div>
                            <div>
                                <h1 className='text-xs font-bold text-sky-500'>{enrolledClass.payment}</h1>
                            </div>
                            <div className='w-96'>
                                <h2 className="text-xl font-bold">{enrolledClass.name}</h2>
                            </div>
                            <div className='me-16 font-bold text-red-500'>
                                <h1>enrolled</h1>
                            </div>
                        </div>
                    ))}
            </div>
            <div>
                {
                    enrolledClasses.length == 0 && <p className='text-4xl font-bold'>You are not enrolled in any classes yet</p>
                }
            </div>
        </div>
    );
};

export default EnrolledClasses;