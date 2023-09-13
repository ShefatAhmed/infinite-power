import React, { useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';
const Banner = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }, []);
    return (
        <div>
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide flex flex-col justify-center items-center text-center relative">
                    <div className="slide-content absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-items p-5 rounded" style={{ backdropFilter: 'blur(100px)' }}>
                        <h5 className="text-xl text-radiant font-bold uppercase animate-fade-in">Welcome, learn about our work style</h5>
                        <p className='text-left'><span className='font-bold text-black'>Teaching Session:</span> Infinite Power Martial Arts School operates exclusively during the summer, offering a concentrated training experience for students.
                        </p>
                        <p className="text-sm text-left"> <span className='font-bold text-black'>Message:</span> Unleash your inner warrior this summer at InfinitePower Martial Arts School. Empowerment, discipline, and growth await students of all ages. Join us for a transformative martial arts experience!
                        </p>
                    </div>
                    <img src="https://i.ibb.co/8YMYN9t/lc-Pd1-Un-PRdu3-FOLwk-NHW-stock-photo-small-group-of-kids-in-doboks-practicing-with-their-trainers-t.jpg" alt="Banner Image" className="w-full" />
                </div>
                <div className="swiper-slide flex flex-col justify-center items-center text-center relative">
                    <div className="slide-content absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-items2 p-5 rounded" style={{ backdropFilter: 'blur(100px)' }}>
                        <h5 className="font-bold uppercase text-radiant">We have a wide range of curriculum which is different from others</h5>
                        <hr />
                        <p className='text-left'><span className='font-bold'>Comprehensive Curriculum:</span> Our program incorporates various martial arts disciplines, allowing students to learn a diverse range of techniques and styles.
                        </p>
                        <hr />
                        <p className="text-sm text-left"> <span className='font-bold'>::</span> Experience our comprehensive curriculum at Infinite Power Martial Arts School. From karate to kung fu, our diverse program ensures a well-rounded training experience. Join us this summer and elevate your martial arts skills.
                        <span className='font-bold'>::</span>
                        </p>
                    </div>
                    <img src="https://i.ibb.co/wKQVjXV/6194f415c5c6cbd110185b42-URSOR-7-best-martial-arts-taekwondo.jpg" alt="Banner Image" className="w-full" />
                </div>
                <div className="swiper-slide flex flex-col justify-center items-center text-center relative">
                    <div className="slide-content absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-items p-5 rounded" style={{ backdropFilter: 'blur(100px)' }}>
                        <h5 className="text-xl text-radiant font-bold uppercase">About Our instructors</h5>
                        <p className='text-left'><span className='font-bold'>Experienced Instructors:</span> Our instructors are highly skilled and experienced in their respective disciplines, providing expert guidance and support to students.
                        </p>
                        <p className="text-sm text-left"> <span className='font-bold'>Message:</span> Train with our skilled instructors at Infinite Power Martial Arts School. They are passionate, experienced, and committed to guiding you on your martial arts journey. Unlock your potential under their expert guidance this summer.
                        </p>
                    </div>
                    <img src="https://i.ibb.co/YpgrzWY/martial-arts-training-partners.webp" alt="Banner Image" className="w-full" />
                </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-scrollbar"></div>
            <div className="arrow-container">
                <div className="arrow-icon"></div>
            </div>
        </div>
    </div>
    );
};

export default Banner;