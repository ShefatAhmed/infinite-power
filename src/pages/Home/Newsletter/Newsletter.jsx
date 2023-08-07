import React from 'react';

const Newsletter = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="max-w-4xl px-6 mx-auto flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-700 mb-4">
                        Stay updated with our latest news, promotions, and special offers by subscribing to our newsletter.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-400 rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 flex-grow"
                        />
                        <button className="bg-black text-white rounded-r px-6 py-2 hover:bg-gray-500 focus:outline-none">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 ml-0 lg:ml-8">
                    <img src="https://i.ibb.co/kcm9KgZ/newsletter.png" alt="Newsletter Logo" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;