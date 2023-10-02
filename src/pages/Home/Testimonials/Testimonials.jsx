import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Anastasia Stone',
            image: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/384789411_122120176580035162_8209312730550177095_n.jpg?stp=cp0_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=DUxTFnigBYoAX9GL-ES&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCCj9CN0CzzCu5osmJlM6KBS-Yz6TLnkdB46kAoYILI3A&oe=651F9C89',
            text: 'InfinitePower Karate Training School impresses with its expert instructors, personalized approach for all levels, and commitment to safety. The clean and inviting facility, coupled with a strong sense of camaraderie among students, creates an ideal environment for mastering karate skills while instilling valuable life lessons. Highly recommended for holistic growth.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            image: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/383312108_122120176556035162_4451632888694731936_n.jpg?stp=cp0_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=lg9YedEzEYUAX-5C4Ip&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCCsOwg2elsP0tullIS9-Ph-7UEbOW6SGYFvG0bbCQ2vg&oe=651F7363',
            text: 'InfinitePower Karate Training School stands out as a beacon of excellence. The instructors mastery, tailored instruction, and inclusive ambiance create an unparalleled experience. Safety protocols are meticulously upheld, ensuring a worry-free environment. Beyond karate proficiency, the school cultivates character and unity among students, making it a prime destination for martial arts enthusiasts.',
        },
        {
            id: 3,
            name: 'Alex Johnson',
            image: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/384666932_122120176550035162_2354227560748023993_n.jpg?stp=cp0_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=zdSAFeHi1XUAX-PV254&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfAXfG0Rq7AU-ftI6PHzBcnI2DS_qbexuW5AI6Zv14zZQw&oe=651EF26F',
            text: 'Exceptional training institution! The adept instructors offer personalized guidance in a welcoming setting. Emphasizing safety, the facility provides a secure space for holistic development. Beyond skill enhancement, the school fosters camaraderie and character growth among participants. A premier choice for those seeking comprehensive martial arts education.',
        },
    ];
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center uppercase">
                    <h3 className="text-2xl">Testimonials</h3>
                    <h2 className="text-3xl font-extrabold text-gray-900">What our clients say</h2>
                    <div className="flex justify-center items-center my-1">
                        <hr
                            className="w-2/12 border-t-2 border-gray-400"
                            style={{ borderTopWidth: '5px' }}
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <Slider {...sliderSettings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex flex-col items-center space-y-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <p className="mt-2 text-gray-900 font-medium">{testimonial.name}</p>
                                    <p className="text-gray-600 text-center">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;