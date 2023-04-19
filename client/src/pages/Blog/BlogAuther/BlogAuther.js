import React from 'react';
import { Container, Row } from 'reactstrap';
import Section from '../../Blog/BlogAuther/Section';
import LeftSideContent from '../../Blog/BlogAuther/LeftSideContent';
import RightSideContent from '../../Blog/BlogAuther/RightSideContent';
import MetaTags from "react-meta-tags";

const BlogAuther = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Blog Auther | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container>
            <Row>
            <LeftSideContent/>
            <RightSideContent/>
            </Row>
            </Container>
            </section>
        </React.Fragment>
    )
}

export default BlogAuther;
