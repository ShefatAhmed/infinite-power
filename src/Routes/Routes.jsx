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
import StudentDashboard from "../pages/DashBoard/StudentDashboard/StudentDashboard";
import Dashboard from "../Layout/Dashboard";
import SelcetedClass from "../pages/DashBoard/SelcetedClass/SelcetedClass";
import Pay from "../pages/DashBoard/Pay/Pay"

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
                path: 'studentDashboard',
                element: <StudentDashboard></StudentDashboard>
            },
            {
                path: 'pay',
                element: <Pay></Pay>
            },
            {
                path: 'selectedClass',
                element: <SelcetedClass></SelcetedClass>
            }
        ]
    }
]);