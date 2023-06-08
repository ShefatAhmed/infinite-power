import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { user, logOut } = useContext(AuthContext);
    const userSingout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }

    const navItems = <>
        <Link className="navitem" >Home</Link>
        <Link className="navitem" >Instructors</Link>
        <Link className="navitem" >Classes</Link>
        {
            user && <Link className="navitem" >Dashboard</Link>
        }
    </>
    const authentication = <>
        {
            user ? (<button onClick={userSingout} className="navitem">LogOut</button>) : (<button className="navitem"><Link to="/login">Login</Link></button>)
        }
    </>
    return (
        <nav className="shadow-md py-4 px-16">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img className="h-8 w-8" src="https://i.ibb.co/D1wRtGJ/pngkey-com-karate-silhouette-png-3209052.png" alt="Website Logo" />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems}
                            </div>
                        </div>
                    </div>
                    <Link to='/'><h1 className="md:hidden text-lg font-bold uppercase text-red-500"><span className='text-indigo-700 font-bold'>Infinite</span>Power</h1></Link>
                    <div className="hidden md:block">
                        <div className="flex">
                            {
                                user && <img
                                    className="h-10 w-10 rounded-full object-cover me-5"
                                    src={user.photoURL}
                                    alt="Profile"
                                />
                            }
                            {authentication}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems}
                </div>
                <div className="flex ms-5">
                    {
                        user && <img
                            className="h-8 w-8 rounded-full object-cover me-5"
                            src={user.photoURL}
                            alt="Profile"
                        />
                    }
                    {authentication}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;