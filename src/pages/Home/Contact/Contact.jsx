import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    })
    return (
        <div className='flex flex-col md:flex-row justify-center items-center p-5 md:p-10'>
            <div className='md:w-1/3 pr-6'>
                <img className='mx-auto md:mb-0 md:h-full' src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/384742020_122120168840035162_1269870311604947588_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=Wyvfz3xvaW0AX9PAT3g&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfBZDY9PX48xTbHP96uj8T9pXAu3Qg41KTMuCWaqLfbGTw&oe=65205EA3" alt=""  data-aos="flip-down" />
            </div>
            <div className='md:w-2/3'>
                <div className='w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-6'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold mb-4'>Feel Free to Contact Me to Start Classes</h1>
                        <p className='text-gray-600'>Pellentesque congue quis massa sagittis posuere. Praesent placerat cursus lacus, sed suscipit odio dapibus vel. Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.</p>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center mb-4'>
                            <img className='w-6 h-6 mr-3' src="https://i.ibb.co/BV3xS6b/karate-contact-1.png" alt="" />
                            <p><span className='font-bold'>Address:</span><br />5460 Kuptola, Mithapukur
                                Gaibandha, Bangladesh
                            </p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <img className='w-6 h-6 mr-3' src="https://i.ibb.co/Y7Xw2PH/karate-contact-2.png" alt="" />
                            <p><span className='font-bold'>Contact phones:</span><br />+880113-456-789</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-6 h-6 mr-3' src="https://i.ibb.co/S3HsZcT/email-5-xxl.png" alt="" />
                            <p><span className='font-bold'>Email address:</span><br />Email: contact@infinitepower.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;