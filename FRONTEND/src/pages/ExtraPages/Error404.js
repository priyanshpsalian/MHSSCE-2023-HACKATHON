import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import MetaTags from "react-meta-tags";

//import Images
import Error404Image from '../../assets/images/404.png';

const Error404 = () => {
    return (
        <React.Fragment>
            <div>           
            <div className="main-content">
                <div className="page-content"> 
                <MetaTags>
                    <title>Error 404 | Jobcy - Job Listing Template | Themesdesign</title>
                </MetaTags>        
                <section className="bg-error bg-auth text-dark">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="text-center">
                                    <img src={Error404Image} alt="" className="img-fluid" />
                                    <div className="mt-5">                                        
                                        <h4 className="text-uppercase mt-3">Sorry, page not found</h4>
                                        <p className="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                                        <div className="mt-4">
                                            <Link className="btn btn-primary waves-effect waves-light" to="/"><i className="mdi mdi-home"></i> Back to Home</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>       
                </div>
            </div>
        </div>

        </React.Fragment>
    )
}

export default Error404;
