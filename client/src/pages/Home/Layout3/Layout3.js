import React from 'react';
import Home from '../Home';
import Section from '../Layout3/Section';
import MetaTags from "react-meta-tags";

const Layout3 = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Home | Jobcy - Job Listing Template | Themesdesign</title>            
            </MetaTags>
            <Section/>
            <Home/>
        </React.Fragment>
    )
}
export default Layout3;