import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
            <div className='bg-gradient-to-r from-purple-100 py-8 border-b-2 border-fuchsia-800 shadow-lg'>
                <div className='flex items-center justify-around'>
                    <Link to="dashboardhome"><h1 className='text-3xl font-bold uppercase text-white bg-sky-600 py-1 px-2 rounded-xl shadow-lg'>DashBoard</h1></Link>
                    <h1 className="text-lg font-bold uppercase text-gray-500">Infinite Power</h1>
                </div>
                <div className='flex justify-around font-bold uppercase mt-8'>
                    <div className='flex gap-3'>
                        <Link to="/dashboard/selectedClass" className='bg-white px-3 py-1 rounded border-sky-500 border-2'>Selected Classes</Link>
                        <Link className='bg-white px-3 py-1 rounded border-sky-500 border-2'>My Enrolled Classes</Link>
                        <Link className='bg-white px-3 py-1 rounded border-sky-500 border-2'>Payment History</Link>
                        {
                            isAdmin && <>
                                <Link to="/dashboard/manageUser" className='bg-white px-3 py-1 rounded border-sky-500 border-2'>Manage Users</Link>
                            </>
                        }
                        {
                            isAdmin && <>
                                <Link to="/dashboard/manageclasses" className='bg-white px-3 py-1 rounded border-sky-500 border-2'>Manage Classes</Link>
                            </>
                        }
                        {
                            isInstructor && <>
                                <Link to="/dashboard/addclass" className='bg-white px-3 py-1 rounded border-sky-500 border-2'>Add Classes</Link>
                            </>
                        }
                        {
                            isInstructor && <>
                                <Link to="/dashboard/myclasses" className='bg-white px-3 py-1 rounded border-sky-500 border-2'>My Classes</Link>
                            </>
                        }
                    </div>
                    <Link to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;