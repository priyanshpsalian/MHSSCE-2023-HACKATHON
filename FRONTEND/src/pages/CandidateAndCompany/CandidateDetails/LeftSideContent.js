import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

//Import userImage
import userImage1 from '../../../assets/images/user/img-01.jpg';

const LeftSideContent = () => {
    return (
        <React.Fragment>
            <Col lg={4}>
                <Card className="side-bar">
                    <CardBody className="p-4">
                        <div className="candidate-profile text-center">
                            <img src={userImage1} alt="" className="avatar-lg rounded-circle" />
                            <h6 className="fs-18 mb-0 mt-4">Gabriel Palmer</h6>
                            <p className="text-muted mb-4">Creative Designer</p>
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
                                    <label className="text-dark">Categories</label>
                                    <div>
                                        <p className="text-muted mb-0">Accounting / Finance</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Offered Salary</label>
                                    <div>
                                        <p className="text-muted mb-0">$450 per hour</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Languages</label>
                                    <div>
                                        <p className="text-muted mb-0">English, Turkish, Japanese</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Experience</label>
                                    <div>
                                        <p className="text-muted mb-0">3 Years</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Qualification</label>
                                    <div>
                                        <p className="text-muted mb-0">Associate Degree</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <label className="text-dark">Views</label>
                                    <div>
                                        <p className="text-muted mb-0">2574</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-3">
                            <Link to="#" className="btn btn-danger btn-hover w-100"><i className="uil uil-phone"></i> Contact Me</Link>
                            <Link to="#" className="btn btn-primary btn-hover w-100 mt-2"><i className="uil uil-import"></i> Download CV</Link>
                        </div>
                        <ul className="list-inline d-flex justify-content-between align-items-center mb-0 mt-2">
                            <li className="list-inline-item text-warning review-rating">
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star-half-full"></i>
                            </li>
                            <li className="list-inline-item">
                                <div className="favorite-icon">
                                    <Link to="#"><i className="uil uil-heart-alt fs-18"></i></Link>
                                </div>
                            </li>
                        </ul>
                    </CardBody>
                    <CardBody className="p-4 border-top">
                        <h6 className="fs-17 fw-semibold mb-3">Professional Skills</h6>
                        <div className="d-flex flex-wrap align-items-start gap-1">
                            <span className="badge bg-soft-success fs-13 mt-1">User Interface Design</span>
                            <span className="badge bg-soft-success fs-13 mt-1">Web Design</span>
                            <span className="badge bg-soft-success fs-13 mt-1">Responsive Design</span>
                            <span className="badge bg-soft-success fs-13 mt-1">Mobile App Design</span>
                            <span className="badge bg-soft-success fs-13 mt-1">UI Design</span>
                        </div>
                    </CardBody>
                    <CardBody className="candidate-contact-details p-4 border-top">
                        <h6 className="fs-17 fw-semibold mb-3">Contact Details</h6>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="icon bg-soft-primary flex-shrink-0">
                                        <i className="uil uil-envelope-alt"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-1">Email</h6>
                                        <p className="text-muted mb-0">gabrielpalmer@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="icon bg-soft-primary flex-shrink-0">
                                        <i className="uil uil-map-marker"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-1">Address</h6>
                                        <p className="text-muted mb-0">Dodge City, Louisiana</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="icon bg-soft-primary flex-shrink-0">
                                        <i className="uil uil-phone"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-1">Phone</h6>
                                        <p className="text-muted mb-0">+1(452) 125-6789</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="icon bg-soft-primary flex-shrink-0">
                                        <i className="uil uil-skype-alt"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-1">Skype</h6>
                                        <p className="text-muted mb-0">@gabrielpalmer</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default LeftSideContent;
