import React, { useEffect, useState } from 'react';
import ClassesPage from './ClassesPage';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="flex flex-wrap justify-center py-16">
            <h1 className="text-3xl font-bold text-center w-full mb-8 uppercase">All Classes Is Here</h1>
            {
                classes.map(classItem => <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4`}
                ><ClassesPage
                    key={classItem._id}
                    classItem={classItem}>
                    </ClassesPage>
                </div>)
            }
        </div>
    );
};

export default Classes;