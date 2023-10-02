import React from 'react';

const Improve = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center py-6">
            <div className="container mx-auto p-8">
                <div>
                    <h1 className="text-6xl font-bold"><span className="text-gray-400">What you improve</span> <br />
                        on my workouts?</h1>
                    <div className="flex justify-left items-left my-5">
                        <hr
                            className="w-1/12 border-t-2 border-gray-400"
                            style={{ borderTopWidth: '5px' }}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Self Defense</h1>
                        <p className="text-gray-600">Morbi sit amet ante tincidunt, scelerisque ex nec, elementum ante. Donec egestas enim sit amet mauris faucibus feugiat.</p>
                        <button className='text-red-500 font-bold mt-1 uppercase'>Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Rapidity</h1>
                        <p className="text-gray-600">Nam imperdiet est nisi, a convallis nunc maximus et. Pellentesque sollicitudin sem rhoncus lectus sagittis, id dignissim purus lacinia.</p>
                        <button className='text-red-500 font-bold mt-1 uppercase'>Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Self Discipline</h1>
                        <p className="text-gray-600">Morbi sit amet ante tincidunt, scelerisque ex nec, elementum ante. Donec egestas enim sit amet mauris faucibus feugiat. In mattis velit et hendrerit auctor.</p>
                        <button className='text-red-500 font-bold mt-1 uppercase'>Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Tactics and Reaction</h1>
                        <p className="text-gray-600">Suspendisse pretium auctor libero, id vehicula velit pellentesque ac. In consequat dui non congue congue.</p>
                        <button className='text-red-500 font-bold mt-1 uppercase'>Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="ml-auto md:mr-8 md:ml-auto md:mb-8 md:mt-0 text-center">
                <img className="max-w-xs md:max-w-md mx-auto" src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/383237278_122119986560035162_3388259139969022579_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=zHQtBC30KBMAX9XQv4H&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCbeam5dvfGwb4np-lSVDMFqzfnERT64i1E42eyQhtoig&oe=651F7E7A" alt="" />
            </div>
        </div>
    );
};

export default Improve;
