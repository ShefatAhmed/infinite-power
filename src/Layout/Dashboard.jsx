import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { Fade, Reveal } from 'react-awesome-reveal';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
                <div className='bg-gradient-to-r from-purple-100 py-8 border-b-2 border-fuchsia-800 shadow-lg'>
                    <div className='flex items-center justify-around'>
                        <Reveal className="my-component" effect="fadeInUp" duration={10000} delay={200}>
                            <Link to="dashboardhome"><h1 className='text-3xl font-bold uppercase text-white bg-sky-600 py-1 px-2 rounded-xl shadow-lg'>DashBoard</h1></Link>
                        </Reveal>
                        <h1 className="text-lg font-bold uppercase text-gray-500">Infinite Power</h1>
                    </div>
                    <div className='flex justify-around font-bold uppercase mt-8'>
                        <Reveal className="my-component" effect="fadeUpIn" duration={1000} delay={200}>
                            <div className='flex gap-3'>
                                {
                                    isAdmin && (
                                        <>
                                            <Link to="/dashboard/manageUser" className='bg-white px-3 py-1 rounded border-2 hover:bg-sky-100 border-sky-500'><i class="fa-solid fa-user-pen"></i> Manage Users</Link>
                                            <Link to="/dashboard/manageclasses" className='bg-white px-3 py-1 rounded border-2 hover:bg-sky-100 border-sky-500'>Manage Classes</Link>
                                        </>
                                    )
                                }
                                {
                                    isInstructor && (
                                        <>
                                            <Link to="/dashboard/myclasses" className='bg-white px-3 py-1 rounded border-2 hover:bg-sky-100 border-sky-500'>My Classes</Link>
                                            <Link to="/dashboard/addclass" className='bg-white px-3 py-1 rounded border-2 hover:bg-sky-100 border-sky-500'><i class="fa-solid fa-plus"></i> Add Classes</Link>
                                        </>
                                    )
                                }
                                {
                                    !(isAdmin || isInstructor) && (
                                        <>
                                            <Link to="/dashboard/selectedClass" className='bg-white px-3 py-1 rounded border-2 hover:bg-sky-100 border-sky-500'>Selected Classes</Link>
                                            <Link to="/dashboard/myenrolledclass" className='bg-white px-3 py-1 rounded border-2 hover:bg-sky-100 border-sky-500'>My Enrolled Classes</Link>
                                            <Link to="/dashboard/paymenthistory" className='bg-white px-3 py-1 rounded border-2 hover:bg-sky-100 border-sky-500'>Payment History</Link>
                                        </>
                                    )
                                }

                            </div>
                        </Reveal>
                        <Reveal className="my-component" cascade effect="fadeIn slideInLeft" duration={500} delay={200}>
                        <Link to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link>
                        </Reveal>
                    </div>
                </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;