import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
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
                                <Link className="navitem" >Home</Link>
                                <Link className="navitem" >Instructors</Link>
                                <Link className="navitem" >Classes</Link>
                                <Link className="navitem" >Dashboard</Link>
                            </div>
                        </div>
                    </div>
                    <Link to='/'><h1 className="md:hidden text-lg font-bold uppercase text-red-500"><span className='text-indigo-700 font-bold'>Infinite</span>Power</h1></Link>
                    <div className="hidden md:block">
                        <div className="flex">
                            <img
                                className="h-10 w-10 rounded-full object-cover me-5"
                                src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/328757685_5721952471193516_4000729686070616427_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lIjQ6847tjoAX8htcOh&_nc_ht=scontent.fdac22-1.fna&oh=00_AfDNn0Wj_E1lyU3JNQ3qbCYoynnB1p1y10diPQba6Hn9cg&oe=64849DBE"
                                alt="Profile"
                            />
                            <button className="navitem">Login</button>
                            <button className="navitem">LogOut</button>
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
                    <Link className="navitem" >Home</Link>
                    <Link className="navitem" >Instructors</Link>
                    <Link className="navitem" >Classes</Link>
                    <Link className="navitem" >Dashboard</Link>
                </div>
                <div className="flex ms-5">
                    <img
                        className="h-8 w-8 rounded-full object-cover me-5"
                        src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/328757685_5721952471193516_4000729686070616427_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lIjQ6847tjoAX8htcOh&_nc_ht=scontent.fdac22-1.fna&oh=00_AfDNn0Wj_E1lyU3JNQ3qbCYoynnB1p1y10diPQba6Hn9cg&oe=64849DBE"
                        alt="Profile"
                    />
                    <button className="navitem">Login</button>
                    <button className="navitem">LogOut</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;