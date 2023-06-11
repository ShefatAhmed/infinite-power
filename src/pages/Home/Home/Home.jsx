import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstractor from '../../PopularInstractor/PopularInstractor';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div className='max-w-screeen'>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;