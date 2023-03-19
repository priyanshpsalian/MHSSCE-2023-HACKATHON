import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import JobDetailsDescription from './JobDetailsDescription';
import JobVacancyPost from './JobVacancyPost';
import RightSideContent from './RightSideContent';
import Section from './Section';
import MetaTags from "react-meta-tags";

const JobDetails = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Job Details | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <Row>
            <Col lg={8}>
            <JobDetailsDescription/>
            <JobVacancyPost/>
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
            <RightSideContent/>
            </Col>
            </Row>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default JobDetails;
