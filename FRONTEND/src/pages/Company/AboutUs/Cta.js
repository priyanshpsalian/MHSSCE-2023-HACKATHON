import React from 'react';
import { Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

const Cta = () => {
    return (
        <React.Fragment>
            <section className="section bg-light">
                        <Container>
                            <Row className="justify-content-center">
                                <div className="section-title text-center">
                                    <h3 className="title mb-4 pb-2">See everything about your employee at one place.</h3>
                                    <p className="para-desc text-muted mx-auto">Start working with Jobcy that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary btn-hover mt-2"><i className="uil uil-rocket me-1"></i> Get Started Now</Link>
                                        <Link to="#" className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"><i className="uil uil-capsule me-1"></i> Free Trial</Link>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </section>
        </React.Fragment>
    )
}

export default Cta;
