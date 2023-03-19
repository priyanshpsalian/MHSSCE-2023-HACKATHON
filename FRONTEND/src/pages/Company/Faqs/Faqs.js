import React from 'react';
import Section from '../../Company/Faqs/Section';
import FaqContent from '../../Company/Faqs/FaqContent';
import MetaTags from "react-meta-tags";

const Faqs = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>FAQs | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <FaqContent/>
        </React.Fragment>
    )
}

export default Faqs;
