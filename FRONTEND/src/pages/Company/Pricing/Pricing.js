import React from 'react';
import Section from '../../Company/Pricing/Section';
import PricingPage from '../../Company/Pricing/PricingPage';
import Cta from '../../Company/Pricing/Cta';
import MetaTags from "react-meta-tags";

const Pricing = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Pricing | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <PricingPage/>
            <Cta/>
        </React.Fragment>
    )
}

export default Pricing
