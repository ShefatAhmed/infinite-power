import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstractor from '../../PopularInstractor/PopularInstractor';
import ExtraSection from '../ExtraSection/ExtraSection';
import JoinClass from '../JoinClass/JoinClass';
import Improve from '../Improve/Improve';
import GetOffers from '../GetOffers/GetOffers';
import Contact from '../Contact/Contact';
import TnVideo from '../TnVideo/TnVideo';
import Testimonials from '../Testimonials/Testimonials';
import Newsletter from '../Newsletter/Newsletter';
import BuyBooks from '../BuyBooks/BuyBooks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
            <JoinClass></JoinClass>
            <Improve></Improve>
            <TnVideo></TnVideo>
            <BuyBooks></BuyBooks>
            <GetOffers></GetOffers>
            <ExtraSection></ExtraSection>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;