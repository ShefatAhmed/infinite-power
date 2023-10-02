import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BuyBooks = () => {
    const images = [
        { id: 1, name: 'Art Kombat', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/384776080_122120172524035162_4765774485250132325_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=1fMF5Vldo9gAX-Hi-HN&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfBQB1JHC6hbTs6SOwALM-0-MW66ceELUUuUoT3O9HQJ2w&oe=651F934F' },
        { id: 2, name: 'Boxing Classes', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/383346966_122120172560035162_1242056412080044149_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=9Q-GOkiEozIAX_0MvcM&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfC5FZzuSNZOzIqxv9uj5eDt_dL9Z2CLe55i7UtHMzsKCw&oe=6520B73B' },
        { id: 3, name: 'Karate School', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/386180534_122120172494035162_8235803225634019937_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=9n9yDZFunhAAX-VFsjs&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfDmyGKXAnHsAMghmH_vquyAGBQsg3QTOKehMM00ty0HdA&oe=651EFE64' },
        { id: 4, name: 'Kickboxing', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/386085492_122120172578035162_1222332053093824509_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=Sc5xyIYnWKkAX-r8kkE&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfABTaoDMszEHy9e6ah26yCRE5Pat7y_JC8D6TZ2E_kmRQ&oe=651F24B2' },
        { id: 5, name: 'Martial arts', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/384772277_122120172668035162_2946179984254693776_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=v-MedWvtqaEAX_TceCE&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCw9A0of0Uj4Eh5okpjGyDH8uTJBQtooYDeiMUgMTwhZQ&oe=652097F2' },
        { id: 6, name: 'Aikido', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/386355582_122120172704035162_7711350726307172163_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=pU8dei4GF1IAX8CQz53&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfDpAYCzi9FQQmTKJV1PkfJ-SWpRqM4K4HXS637zk0HT_Q&oe=651F4383' },
        { id: 7, name: 'Kung Fu', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/384792553_122120172722035162_6717825112940287348_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=sFi590dxUxQAX9bcUTG&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfAvBDMAIxgmqJTPXNLGKUgVGmrc27dyoUqmkObS0bPInA&oe=65209A7A' },
        { id: 8, name: 'Jujutsu', url: 'https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/383441724_122120172860035162_3352438711262847838_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=WjP8JEyQIfEAX9JgMvr&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCIDOHJYTDzTbmfHMJ9dtmvZj86SIA-k9Uu5xVvcwthzg&oe=652098DA' },
    ];
    useEffect(() => {
        Aos.init({duration: 1000});
    })
    return (
        <div className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-800 text-center">
                    Training Gallery
                </h2>
                <div className="flex justify-center items-center mt-1 mb-5">
                    <hr
                        className="w-2/12 border-t-2 border-gray-900"
                        style={{ borderTopWidth: '5px' }}
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                    {images.map((image) => (
                        <div key={image.id} className="flex flex-col items-center p-2 sm:p-4">
                            <img src={image.url} alt={image.name} className="w-56 sm:w-64 h-56 sm:h-64 rounded mb-2" data-aos="zoom-out"/>
                            <p className="text-gray-700 font-bold text-center uppercase">{image.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyBooks;