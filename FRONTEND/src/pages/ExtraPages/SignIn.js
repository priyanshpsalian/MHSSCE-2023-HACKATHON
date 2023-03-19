import React from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import MetaTags from "react-meta-tags";

//Import Image
import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <React.Fragment>
    <div>            
    <div className="main-content">
    <div className="page-content">
    <MetaTags>
      <title>Sign In | Jobcy - Job Listing Template | Themesdesign</title>
    </MetaTags>  
      <section className="bg-auth">
        <Container>
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
                        <img src={signInImage} alt="" className="img-fluid" />
                      </div>
                    </CardBody>
                  </Col>
                  <Col lg={6}>
                    <CardBody className="auth-content p-5 h-100 text-white">
                      <div className="w-100">
                        <div className="text-center mb-4">
                          <h5>Welcome Back !</h5>
                          <p className="text-white-70">
                            Sign in to continue to Jobcy.
                          </p>
                        </div>
                        <Form action="/" className="auth-form">
                          <div className="mb-3">
                            <label htmlFor="usernameInput" className="form-label">
                              Username
                            </label>
                            <Input
                              type="text"
                              className="form-control"
                              id="usernameInput"
                              placeholder="Enter your username"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">
                              Password
                            </label>
                            <Input
                              type="password"
                              className="form-control"
                              id="passwordInput"
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <Link
                                to="/resetpassword"
                                className="float-end text-white"
                              >
                                Forgot Password?
                              </Link>
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-white btn-hover w-100"
                            >
                              Sign In
                            </button>
                          </div>
                        </Form>
                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            Don't have an account ?{" "}
                            <Link
                              to="/signup"
                              className="fw-medium text-white text-decoration-underline"
                            >
                              {" "}
                              Sign Up{" "}
                            </Link>
                          </p>
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
  );
};

export default SignIn;
