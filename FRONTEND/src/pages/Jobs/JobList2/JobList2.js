import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import JobVacancyPost2 from './JobVacancyPost2'

const JobList2 = () => {
    return (
        <React.Fragment>
            {/* <MetaTags>
                <title>Job List2 | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section /> */}
            <section className="section">
                <Container >
                    <div className="me-lg-5">
                        <JobVacancyPost2 />
                    </div>
                </Container>
            </section>


        </React.Fragment>
    )
}

export default JobList2;
