import React from 'react';
import Jobcatogaries from '../Home/jobCatogaries';
import JobList from './JobList/jobList';
import HowItWorks from './HowItWorks';
import Cta from './Cta';
import Testimonal from './Testimonal';
import Blog from '../Home/Blog';
import Client from './Client';


const Home = () => {
    return (
        <React.Fragment>
            <Jobcatogaries/>
            <JobList/>
            <HowItWorks/>
            <Cta/>
            <Testimonal/>
            <Blog/>
            <Client/>
        </React.Fragment>
    )
}

export default Home;
