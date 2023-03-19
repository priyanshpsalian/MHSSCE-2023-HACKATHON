import React from 'react';
import { MetaTags } from 'react-meta-tags';
import { Container } from 'reactstrap';
import Selected from '../ManageJobs/Selected';
import BookmarkJobListing from './BookmarkJobListing';
import Section from './Section';

const BookMarkJobs = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Bookmarks Jobs | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section />
            <section className="section">
                <Container>
                    <Selected />
                    <BookmarkJobListing />
                </Container>
            </section>

        </React.Fragment>
    );
};

export default BookMarkJobs;
