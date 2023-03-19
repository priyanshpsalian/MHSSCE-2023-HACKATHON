import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Card, Col, Input, Row,CardBody } from 'reactstrap';
import MetaTags from "react-meta-tags";

import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import signUpImage from "../../assets/images/auth/sign-up.png";
import { Form } from 'react-bootstrap';

const SignUp = () => {
    return (
        <React.Fragment>
            <div>            
                <div className="main-content">
                <div className="page-content">     
                <MetaTags>
                <title>Sign Up | Jobcy - Job Listing Template | Themesdesign</title>
                </MetaTags>   
                    <section className="bg-auth">
                        <Container>
                            <Row className="justify-content-center">
                                <Col xl={10} lg={12}>
                                    <Card className="auth-box">
                                        <Row className="align-items-center">
                                            <Col lg={6} className="text-center">
                                                <CardBody className="p-4">
                                                    <Link to="/">
                                                        <img src={lightLogo} alt="" className="logo-light" />
                                                        <img src={darkLogo} alt="" className="logo-dark"/>
                                                    </Link>
                                                    <div className="mt-5">
                                                        <img src={signUpImage} alt="" className="img-fluid" />
                                                    </div>
                                                </CardBody>
                                            </Col>
                                            <Col lg={6} >
                                                <CardBody className="auth-content p-5 text-white">
                                                    <div className="w-100">
                                                        <div className="text-center">
                                                            <h5>Let's Get Started</h5>
                                                            <p className="text-white-70">Sign Up and get access to all the features of Jobcy</p>
                                                        </div>
                                                        <Form action="/" className="auth-form">
                                                            <div className="mb-3">
                                                                <label htmlFor="usernameInput" className="form-label">Username</label>
                                                                <Input type="text" className="form-control" required id="usernameInput" placeholder="Enter your username" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="passwordInput" className="form-label">Email</label>
                                                                <Input type="email" className="form-control" required id="emailInput" placeholder="Enter your email" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="emailInput" className="form-label">Password</label>
                                                                <Input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="form-check"><Input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault">I agree to the <Link to="#" className="text-white text-decoration-underline">Terms and conditions</Link></label>
                                                                </div>
                                                            </div>
                                                            <div className="text-center">
                                                                <button type="submit" className="btn btn-white btn-hover w-100">Sign Up</button>
                                                            </div>
                                                        </Form>
                                                        <div className="mt-3 text-center">
                                                            <p className="mb-0">Already a member ? <Link to="/signin" className="fw-medium text-white text-decoration-underline"> Sign In </Link></p>
                                                        </div>
                                                    </div>
                                                </CardBody>
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

export default SignUp
