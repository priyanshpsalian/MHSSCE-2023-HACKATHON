import React from 'react';
import { MetaTags } from 'react-meta-tags';
import { Container, Row } from 'reactstrap';
import LeftSideContent from './LeftSideContent';
import RightSideContent from './RightSideContent';
import Section from './Section';

const MyProfile = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>My Profile | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section />
            <section className="section">
                <Container>
                    <Row>
                        <LeftSideContent />
                        <RightSideContent />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default MyProfile
