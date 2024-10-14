import { Outlet } from "react-router-dom";
import DashboardSidebar from "../pages/DashBoard/DashboardSidebar";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <DashboardSidebar />
            <div className="col-span-8 md:col-span-10">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;