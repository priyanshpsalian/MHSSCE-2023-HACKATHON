import React from 'react';
import MetaTags from "react-meta-tags";

//Import Image
import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import resetPasswordImage from "../../assets/images/auth/reset-password.png";
import { Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const ResetPassword = () => {
    return (
        <React.Fragment>
            <div>            
                <div className="main-content">
                    <div className="page-content">
                    <MetaTags>
                        <title>Reset Password | Jobcy - Job Listing Template | Themesdesign</title>
                    </MetaTags>   
                        <section className="bg-auth">
                                <Container >
                                    <Row className="justify-content-center">
                                        <Col xl={10} lg={12}>
                                            <Card className="auth-box">
                                                <Row className="g-0">
                                                    <Col lg={6} className="text-center">
                                                        <CardBody className="p-4">
                                                            <Link to="/">
                                                                <img src={lightLogo} alt="" className="logo-light" />
                                                                <img src={darkLogo} alt="" className="logo-dark" />
                                                            </Link>
                                                            <div className="mt-5">
                                                                <img src={resetPasswordImage} alt="" className="img-fluid" />
                                                            </div>
                                                        </CardBody>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <CardBody className="auth-content p-5 h-100 text-white">
                                                            <div className="text-center mb-4">
                                                                <h5>Reset Password</h5>
                                                                <p className="text-white-50">Reset your password with Jobcy.</p>
                                                            </div>
                                                            <Form className="auth-form text-white">
                                                                <div className="alert alert-warning text-center mb-4" role="alert">  Enter your Email and instructions will be sent to you!  </div>
                                                                <div className="mb-4">
                                                                    <label className="form-label" htmlFor="email">Username/Email</label>
                                                                    <Input type="email" className="form-control" id="email"
                                                                        placeholder="Enter username or email" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <button type="submit" className="btn btn-white w-100">Send Request</button>
                                                                </div>
                                                            </Form>
                                                            <div className="mt-5 text-center text-white-50">
                                                                <p>Remembered It ? <Link to="/signin" className="fw-medium text-white text-decoration-underline"> Go to Login </Link></p>
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

export default ResetPassword
