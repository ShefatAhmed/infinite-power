import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const backgroundImage = 'https://i.ibb.co/tqRXfLt/h3-img-3-1.png';

    return (
        <div>
            <footer style={{ backgroundImage: `url(${backgroundImage})` }}  className="bg-gray-200 pt-16 pb-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h1 className="text-lg font-bold text-center uppercase text-red-500"><span className='text-indigo-700 font-bold'>Infinite</span>Power</h1>
                            <img src="https://i.ibb.co/D1wRtGJ/pngkey-com-karate-silhouette-png-3209052.png" alt="" className='w-1/5 mx-auto' />
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0 italic">
                            <h4 className="text-lg text-black font-semibold mb-4">Contact</h4>
                            <p className="text-gray-600">Email: contact@infinitepower.com</p>
                            <p className="text-gray-600">Phone: +880113-456-789</p>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0 italic">
                            <h4 className="text-lg text-black font-semibold mb-4">Address</h4>
                            <p className="text-gray-600">5460 Kuptola, Mithapukur</p>
                            <p className="text-gray-600">Gaibandha, Bangladesh</p>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h4 className="text-lg text-black font-semibold mb-4">Follow Us</h4>
                            <div className="flex text-2xl">
                                <Link href="#" className="text-blue-500 mr-4"><i className="fab fa-twitter"></i></Link>
                                <Link href="#" className="text-sky-500 mr-4"><i className="fab fa-facebook"></i></Link>
                                <Link href="#" className="text-amber-900 mr-4"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-gray-300 py-2 text-center text-sm text-gray-600">
                <p>
                    &copy; {currentYear} InfinitePower. All rights reserved. | Delveloped by Shefat Ahmed
                </p>
            </div>
        </div>
    );
};

export default Footer;