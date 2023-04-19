import React from 'react';
import { Container, Row } from 'reactstrap';
import JobVacancy2 from './JobVacancy2';
import Section from './Section';
import Pagination from '../JobList2/Pagination';
import MetaTags from "react-meta-tags";


const JobGrid2 = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Job Grid2 | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <Row>
            <JobVacancy2/>
            </Row>
            <Pagination/>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default JobGrid2;
