import React from 'react'
import { MetaTags } from 'react-meta-tags';
import { Container } from 'reactstrap';
import JobListing from './JobListing';
import Section from './Section'
import Selected from './Selected';

const ManageJobs = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Manage Jobs | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <Selected/>
            <JobListing/>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default ManageJobs;
