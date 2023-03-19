import React, { useState } from 'react';
import { Col, Card, CardBody, Row, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Blog Imgaes
import blogImage1 from '../../../assets/images/blog/img-01.jpg';
import blogImage2 from '../../../assets/images/blog/img-02.jpg';
import blogImage3 from '../../../assets/images/blog/img-03.jpg';

//Import user Images
import userImage4 from '../../../assets/images/user/img-04.jpg';
import userImage2 from '../../../assets/images/user/img-02.jpg';

const images = [blogImage1, blogImage1, blogImage3];

const RightSideContent = () => {
    const [photoIndex, setphotoIndex] = useState(0);
    const [isGallery, setisGallery] = useState(false);
    return (
        <React.Fragment>
            {isGallery ? (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    enableZoom={true}
                    onCloseRequest={() => {
                        setisGallery(false);
                    }}
                    onMovePrevRequest={() => {
                        setphotoIndex((photoIndex + images.length - 1) % images.length);
                    }}
                    onMoveNextRequest={() => {
                        setphotoIndex((photoIndex + 1) % images.length);
                    }}
                    imageCaption={"Project " + parseFloat(photoIndex + 1)}
                />
            ) : null}
            <Col lg={8}>
                <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
                    <CardBody className="p-4 candidate-personal-detail">
                        <div>
                            <h6 className="fs-17 fw-semibold mb-3">About Me</h6>
                            <p className="text-muted mb-2">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                                shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                            <p className="text-muted mb-0">As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>
                        </div>
                        <div className="candidate-education-details mt-4 pt-3">
                            <h6 className="fs-17 fw-bold mb-0">Education</h6>
                            <div className="candidate-education-content mt-4 d-flex">
                                <div className="circle flex-shrink-0 bg-soft-primary"> B </div>
                                <div className="ms-4">
                                    <h6 className="fs-16 mb-1">BCA - Bachelor of Computer Applications</h6>
                                    <p className="mb-2 text-muted">International University - (2004 - 2010)</p>
                                    <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                </div>
                            </div>
                            <div className="candidate-education-content mt-4 d-flex">
                                <div className="circle flex-shrink-0 bg-soft-primary"> M </div>
                                <div className="ms-4">
                                    <h6 className="fs-16 mb-1">MCA - Master of Computer Application</h6>
                                    <p className="mb-2 text-muted">International University - (2010 - 2012)</p>
                                    <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                </div>
                            </div>
                            <div className="candidate-education-content mt-4 d-flex">
                                <div className="circle flex-shrink-0 bg-soft-primary"> D </div>
                                <div className="ms-4">
                                    <h6 className="fs-16 mb-1">Design Communication Visual</h6>
                                    <p className="text-muted mb-2">International University - (2012-2015)</p>
                                    <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="candidate-education-details mt-4 pt-3">
                            <h6 className="fs-17 fw-bold mb-0">Experience</h6>
                            <div className="candidate-education-content mt-4 d-flex">
                                <div className="circle flex-shrink-0 bg-soft-primary"> W </div>
                                <div className="ms-4">
                                    <h6 className="fs-16 mb-1">Web Design & Development Team Leader</h6>
                                    <p className="mb-2 text-muted">Creative Agency - (2013 - 2016)</p>
                                    <p className="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                </div>
                            </div>
                            <div className="candidate-education-content mt-4 d-flex">
                                <div className="circle flex-shrink-0 bg-soft-primary"> P </div>
                                <div className="ms-4">
                                    <h6 className="fs-16 mb-1">Project Manager</h6>
                                    <p className="mb-2 text-muted">Jobcy Technology Pvt.Ltd - (Pressent)</p>
                                    <p className="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="candidate-portfolio mt-4 pt-3">
                            <h6 className="fs-17 fw-bold mb-0">Projects</h6>
                            <Row>
                                <Col lg={4} className="mt-4">
                                    <div className="candidate-portfolio-box card border-0">
                                        <Link to="#" className="image-popup">
                                            <img
                                                src={blogImage1}
                                                onClick={() => {
                                                    setisGallery(true);
                                                    setphotoIndex(0);
                                                }}
                                                alt=""
                                                className="img-fluid"
                                            /></Link>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4">
                                    <div className="candidate-portfolio-box card border-0">
                                        <Link to="#" className="image-popup">
                                            <img
                                                src={blogImage2}
                                                onClick={() => {
                                                    setisGallery(true);
                                                    setphotoIndex(1);
                                                }}
                                                alt=""
                                                className="img-fluid"
                                            /></Link>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4">
                                    <div className="candidate-portfolio-box card border-0">
                                        <Link to="#" className="image-popup">
                                            <img
                                                src={blogImage3}
                                                onClick={() => {
                                                    setisGallery(true);
                                                    setphotoIndex(1);
                                                }}
                                                alt=""
                                                className="img-fluid"
                                            /></Link>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-4 pt-3">
                            <div className="d-sm-flex align-items-top">
                                <div className="flex-shrink-0">
                                    <img className="rounded-circle avatar-md img-thumbnail" src={userImage4} alt="img" />
                                </div>
                                <div className="flex-grow-1 ms-sm-3">
                                    <div>
                                        <p className="text-muted float-end fs-14 mb-2">Jun 23, 2021</p>
                                        <h6 className="mt-sm-0 mt-3 mb-1">Michelle Durant</h6>
                                        <div className="text-warning review-rating mb-2">
                                            <i className="mdi mdi-star"></i>
                                            <i className="mdi mdi-star"></i>
                                            <i className="mdi mdi-star"></i>
                                            <i className="mdi mdi-star"></i>
                                            <i className="mdi mdi-star-half-full"></i>
                                        </div>
                                        <p className="text-muted fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-sm-flex align-items-top mt-4">
                                <div className="flex-shrink-0">
                                    <img className="rounded-circle avatar-md img-thumbnail" src={userImage2} alt="img" />
                                </div>
                                <div className="flex-grow-1 ms-sm-3">
                                    <div>
                                        <p className="text-muted float-end fs-14 mb-2">Jun 25, 2021</p>
                                        <h6 className="mt-sm-0 mt-3 mb-1">Jeffrey Montgomery</h6>
                                        <div className="text-warning review-rating mb-2">
                                            <i className="mdi mdi-star"></i>
                                            <i className="mdi mdi-star"></i>
                                            <i className="mdi mdi-star"></i>
                                            <i className="mdi mdi-star-half-full"></i>
                                            <i className="mdi mdi-star-outline"></i>
                                        </div>
                                        <p className="text-muted fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="#" className="mt-4 pt-3">
                            <h6 className="fs-17 fw-semibold mb-2">Add a review</h6>
                            <p className="text-muted mb-3">Your Rating for this listing</p>
                            <Row>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <label htmlFor="inputname" className="form-label">Your Name</label>
                                        <Input type="text" className="form-control" id="inputname" placeholder="Enter your name" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <label htmlFor="inputemail" className="form-label">Email</label>
                                        <Input type="email" className="form-control" id="inputemail" placeholder="Enter your email" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <label htmlFor="inputsubject" className="form-label">Subject</label>
                                        <Input type="text" className="form-control" id="inputsubject" placeholder="Subject" />
                                    </div>
                                </Col>
                                <Col lg={12} >
                                    <div className="mb-3">
                                        <label htmlFor="inputcoment" className="form-label">Review</label>
                                        <textarea className="form-control" id="inputcoment" rows="3" placeholder="Add your review"></textarea>
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary btn-hover">Submit Review <i className="uil uil-angle-right-b"></i></button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RightSideContent;
