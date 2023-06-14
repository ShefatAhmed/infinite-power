import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import SelcetedClass from "../pages/DashBoard/Student/SelcetedClass/SelcetedClass";
import Pay from "../pages/DashBoard/Student/Pay/Pay";
import ManageUser from "../pages/DashBoard/Admin/ManageUser/ManageUser";
import DashBoardHome from "../pages/DashBoard/DashBoardHome";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import AddClasses from "../pages/DashBoard/Instructor/AddClasses/AddClasses";
import MyClasses from "../pages/DashBoard/Instructor/MyClasses/MyClasses";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses/ManageClasses";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'singup',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'dashboardhome',
                element: <DashBoardHome></DashBoardHome>
            },
            {
                path: 'selectedClass',
                element: <SelcetedClass></SelcetedClass>
            },
            {
                path: 'pay/:id',
                element: <Pay></Pay>
            },
            {
                path: 'manageUser',
                element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
            },
            {
                path: 'addclass',
                element: <InstructorRoutes><AddClasses></AddClasses></InstructorRoutes>
            },
            {
                path: 'myclasses',
                element: <InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
            },
            {
                path:  'manageclasses',
                element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
            }
        ]
    }
]);