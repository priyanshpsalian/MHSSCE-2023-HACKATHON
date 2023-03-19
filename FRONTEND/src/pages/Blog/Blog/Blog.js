import React from 'react'
import Section from "../../Blog/Blog/Section";
import BlogContent from '../../Blog/Blog/BlogContent';
import MetaTags from "react-meta-tags";

const Blog = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Blog | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <BlogContent/>
        </React.Fragment>
    )
}

export default Blog;
