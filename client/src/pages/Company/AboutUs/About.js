import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


//Import Images
import AboutImage from "../../../assets/images/about/img-01.jpg";


const About = () => {
    return (
        <React.Fragment>
            <section className="section overflow-hidden">
                <Container>
                    <Row className="align-items-center g-0">
                        <Col lg={6}>
                            <div className="section-title me-lg-5">
                                <h6 className="sub-title">About Us</h6>
                                <h2 className="title mb-4">Why <span className="text-warning fw-bold">35,000+</span> People Trust On Jobcy?</h2>
                                <p className="text-muted">Start working with Jobcy that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                                <Row mt={4} pt={2}>
                                    <Col md={6}>
                                        <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                                            <li> Digital Marketing Solutions</li>
                                            <li> Our Talented & Experienced Marketing Agency</li>
                                            <li> Creative Design</li>
                                            <li> New jobs Innovation</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="list-unstyled about-list text-muted">
                                            <li> Create Resume</li>
                                            <li> 5000+ Comnpanies</li>
                                            <li> Our Blog</li>
                                            <li> and more...</li>
                                        </ul>
                                    </Col>
                                </Row>
                                <div className="mt-3">
                                    <Link to="#" className="btn btn-primary btn-hover">Learn More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about-img mt-4 mt-lg-0">
                                <img src={AboutImage} alt="" className="img-fluid rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;
