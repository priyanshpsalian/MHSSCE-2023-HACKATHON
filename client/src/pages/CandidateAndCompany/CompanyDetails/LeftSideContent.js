import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

//Import images
import featureImage from '../../../assets/images/featured-job/img-01.png';

const LeftSideContent = () => {
    return (
        <React.Fragment>
            <Col lg={4}>
                <Card className="side-bar">
                    <CardBody className="p-4">
                        <div className="candidate-profile text-center">
                            <img src={featureImage} alt="" className="avatar-lg rounded-circle" />
                            <h6 className="fs-18 mb-1 mt-4">Jobcy Technology Pvt.Ltd</h6>
                            <p className="text-muted mb-4">Since July 2017</p>
                            <ul className="candidate-detail-social-menu list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="#" className="social-link"><i className="uil uil-twitter-alt"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="social-link"><i className="uil uil-whatsapp"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="social-link"><i className="uil uil-phone-alt"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </CardBody>

                    <CardBody className="candidate-profile-overview border-top p-4">
                        <h6 className="fs-17 fw-semibold mb-3">Profile Overview</h6>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Owner Name</label>
                                    <div>
                                        <p className="text-muted mb-0">Charles Dickens</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Employees</label>
                                    <div>
                                        <p className="text-muted mb-0">1500 - 1850</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Location</label>
                                    <div>
                                        <p className="text-muted mb-0">New York</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Website</label>
                                    <div>
                                        <p className="text-muted text-break mb-0">www.Jobcytecnologypvt.ltd.com</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Established</label>
                                    <div>
                                        <p className="text-muted mb-0">July 10 2017</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-3">
                            <Link to="#" className="btn btn-danger btn-hover w-100"><i className="uil uil-phone"></i> Contact</Link>
                        </div>
                    </CardBody>
                    <CardBody className="p-4 border-top">
                        <div className="ur-detail-wrap">
                            <div className="ur-detail-wrap-header">
                                <h6 className="fs-17 fw-semibold mb-3">Working Days</h6>
                            </div>
                            <div className="ur-detail-wrap-body">
                                <ul className="working-days">
                                    <li>Monday<span>9AM - 5PM</span></li>
                                    <li>Tuesday<span>9AM - 5PM</span></li>
                                    <li>Wednesday<span>9AM - 5PM</span></li>
                                    <li>Thursday<span>9AM - 5PM</span></li>
                                    <li>Friday<span>9AM - 5PM</span></li>
                                    <li>Saturday<span>9AM - 5PM</span></li>
                                    <li>Sunday<span className="text-danger">Close</span></li>
                                </ul>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody className="p-4 border-top">
                        <h6 className="fs-17 fw-semibold mb-4">Company Location</h6>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"
                            title="title" style={{ width: `100%`, height: `250` }} allowFullScreen="" loading="lazy"></iframe>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default LeftSideContent;
