import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user, logOut } = useAuth();
    const userSingout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-purple-300 py-8 border-b-4 border-fuchsia-800'>
                <div className='flex items-center justify-around'>
                    <h1 className='text-3xl font-bold uppercase text-white'>DashBoard</h1>
                    <h1 className="text-lg font-bold uppercase text-gray-700">Infinite Power</h1>
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
                            isInstructor && <>
                            <Link to="/dashboard/addclass" className='bg-white px-3 py-1 rounded border-sky-500 border-2'>Add Classes</Link>
                            </>
                        }
                    </div>
                    <Link onClick={userSingout} className='bg-red-500 btn-glass text-white px-4 py-1 rounded'>LogOut</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;


{/* <div className='bg-gray-100'>
            <div className="drawer drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-lg bg-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu p-4 w-72 h-full">
                        <img src={user.photoURL} alt="" />
                    </div>
                </div>
            </div>
        </div> */}