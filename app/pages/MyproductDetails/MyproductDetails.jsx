import React from 'react';
import SectionOne from './SectionOne/SectionOne'
import Banner from "../../../app/component/Banner/Banner";
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from  './SectionThree/SectionThree'
const MyproductDetails = () => {
    return (
        <>
            <Banner title=" What We Have" subTitle=" As a Products ?"  route='Products' route2='Mozzarella cheese' />
            <SectionThree/>
<SectionOne/>
            <SectionTwo/>

        </>
    );
};

export default MyproductDetails;