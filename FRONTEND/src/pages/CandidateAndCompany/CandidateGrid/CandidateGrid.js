import React from 'react';
import { Container } from 'reactstrap';
import JobFilters from '../CandidateList/JobFilters';
import CandidateGridDetails from './CandidateGridDetails';
import Section from './Section';
import Pagination from '../../Jobs/JobList2/Pagination';
import MetaTags from "react-meta-tags";

const CandidateGrid = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Candidate Grid | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <JobFilters/>
            <CandidateGridDetails/>
            <Pagination/>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default CandidateGrid
