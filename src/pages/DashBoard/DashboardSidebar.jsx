import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const DashboardSidebar = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="col-span-4 md:col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5 flex flex-col justify-between shadow-2xl">
            <nav className="flex flex-col gap-5">
                <NavLink to="/dashboard">
                    <span className="truncate text-2xl font-extrabold">Dashboard</span>
                </NavLink>
                {
                    isAdmin && (
                        <>
                            <NavLink to="/dashboard/manageUser"><i className="fa-solid fa-user-pen"></i> Manage Users</NavLink>
                            <NavLink to="/dashboard/manageclasses">Manage Classes</NavLink>
                        </>
                    )
                }
                {
                    isInstructor && (
                        <>
                            <NavLink to="/dashboard/myclasses">My Classes</NavLink>
                            <NavLink to="/dashboard/addclass"><i className="fa-solid fa-plus"></i> Add Classes</NavLink>
                        </>
                    )
                }
                {
                    !(isAdmin || isInstructor) && (
                        <>
                            <NavLink to="/dashboard/selectedClass">Selected Classes</NavLink>
                            <NavLink to="/dashboard/myenrolledclass">My Enrolled Classes</NavLink>
                            <NavLink to="/dashboard/paymenthistory">Payment History</NavLink>
                        </>
                    )
                }
            </nav>
            <div className="bottom-0">
                <NavLink to="/" className="flex justify-center items-center gap-2">
                    <i className="fa-solid fa-house"></i> Home
                </NavLink>
            </div>
        </div>
    );
};

export default DashboardSidebar;