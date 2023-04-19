import React from 'react';
import MetaTags from "react-meta-tags";

import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const SignOut = () => {
    return (
        <React.Fragment>
             <div>            
                <div className="main-content">
                    <div className="page-content">  
                    <MetaTags>
                        <title>Sign Out | Jobcy - Job Listing Template | Themesdesign</title>
                    </MetaTags>        
                    <section className="bg-auth">
                        <Container>
                            <Row className="justify-content-center">
                                <Col xl={10} lg={12} >
                                    <Card className="auth-box">
                                        <Row>
                                            <Col lg={6} className="text-center">
                                                <CardBody className="p-4">
                                                    <Link to="/">
                                                        <img src={lightLogo} alt="" className="logo-light" />
                                                        <img src={darkLogo} alt="" className="logo-dark"/>
                                                    </Link>
                                                    <div className="mt-5">
                                                        <img src={signInImage} alt="" className="img-fluid"/>
                                                    </div>
                                                </CardBody>
                                            </Col>
                                            <Col lg={6} >
                                                <div className="auth-content card-body p-5 text-white">
                                                    <div className="w-100">
                                                        <div className="text-center mb-4">
                                                            <h5>You are Logged Out</h5>
                                                            <p className="text-white-70">Thank you for using Jobcy</p> 
                                                        </div>
                                                        <Link to="/signin" className="btn btn-white btn-hover w-100">Sign In</Link>
                                                        <div className="mt-3 text-center">
                                                            <p className="mb-0">Don't have an account ? <Link to="/signup" className="fw-medium text-white text-decoration-underline"> Sign Up </Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
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

export default SignOut;
