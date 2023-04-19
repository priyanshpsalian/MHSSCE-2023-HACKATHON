import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import JobGridHeader from './JobGridHeader';
import JobVacancy from './JobVacancy';
import JobVacancyNew from './JobVacancyNew';
import Section from './Section';
import Selected from './Selected';
import Pagination from '../JobList2/Pagination';
import MetaTags from "react-meta-tags";

const JobGrid = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Job Grid | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>            
            <section className="section">
            <Container>
            <JobGridHeader />
            <Selected/>
            <Row>
            <Col lg={6} >
            <JobVacancy/>         
            </Col>
            <Col lg={6} >
            <JobVacancyNew/>         
            </Col>
            </Row>
            <Pagination/>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default JobGrid;
