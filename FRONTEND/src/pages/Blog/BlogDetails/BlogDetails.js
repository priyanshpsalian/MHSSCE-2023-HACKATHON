import React from "react";
import { Container, Col, Row } from "reactstrap";
import Section from "../BlogDetails/Section";
import BlogTitle from "../BlogDetails/BlogTitle";
import BlogCategory from "../BlogGrid/BlogCategory";
import PopularPost from "../BlogGrid/PopularPost";
import TextWidget from "../BlogGrid/TextWidget";
import Archives from "../BlogGrid/Archives";
import Tags from "../BlogGrid/Tags";
import SocialConnect from "../BlogGrid/SocialConnect";
import BlogSwiper from "../BlogDetails/BlogSwiper";
import BlogColumn from "../BlogDetails/BlogColumn";
import BlogComments from "../BlogDetails/BlogComments";
import BlogForm from "../BlogDetails/BlogForm";
import BlogPost from "../BlogDetails/BlogPost";
import MetaTags from "react-meta-tags";

const BlogDetails = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Blog Details | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <BlogTitle />
          <Row>
            <Col lg={8}>
              <div className="blog-post">
                <BlogSwiper />
                <BlogColumn />
                <BlogComments />
                {/* <BlogForm /> */}
                <BlogPost />
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
                <BlogCategory />
                <PopularPost />
                <TextWidget />
                <Archives />
                <Tags />
                <SocialConnect />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
