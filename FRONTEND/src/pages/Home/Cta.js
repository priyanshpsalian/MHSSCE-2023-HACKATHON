import React from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";


const Cta = () => {
    return (
        <React.Fragment>
             <section className="section bg-light">
                        <Container className="container">
                            <Row className="justify-content-center">
                                <Col lg={7}>
                                    <div className="text-center">
                                        <h2 className="text-primary mb-4">Browse Our <span className="text-warning fw-bold">5,000+</span> Latest
                                            Jobs</h2>
                                        <p className="text-muted">Post a job to tell us about your project. We'll quickly match you with
                                            the right freelancers.</p>
                                        <div className="mt-4 pt-2">
                                            <Link to="#" className="btn btn-primary btn-hover">Started Now <i className="uil uil-rocket align-middle ms-1"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
        </React.Fragment>
    )
}

export default Cta
