import React, { useState } from 'react';
import { Col, Card, CardBody, Row, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


//Import Images
import UserImage3 from '../../../assets/images/user/img-03.jpg';

//blogImages
import blogImages1 from '../../../assets/images/blog/img-01.jpg';
import blogImages2 from '../../../assets/images/blog/img-02.jpg';
import blogImages3 from '../../../assets/images/blog/img-03.jpg';
import blogImages4 from '../../../assets/images/blog/img-04.jpg';
import blogImages5 from '../../../assets/images/blog/img-05.jpg';
import blogImages6 from '../../../assets/images/blog/img-06.jpg';
import blogImages7 from '../../../assets/images/blog/img-07.jpg';
import blogImages8 from '../../../assets/images/blog/img-08.jpg';
import blogImages10 from '../../../assets/images/blog/img-10.jpg';

const images = [blogImages1, blogImages2, blogImages3, blogImages4, blogImages5, blogImages6, blogImages7, blogImages8, blogImages10];

const LeftSideContent = () => {
    const [isChecked, setIsChecked] = useState(true);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

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
            <Col lg={4}>
                <Card className="blog-author-sidebar  border-0 bg-light">
                    <CardBody className="card-bod p-4">
                        <div className="mb-5">
                            <h5 className="blog-title mb-4">About Me</h5>
                            <div className="text-center">
                                <img src={UserImage3} alt="" className="avatar-lg img-thumbnail mb-4 rounded-circle" />
                                <h6 className="fs-17">Gabriel Palmer</h6>
                                <p className="text-muted">Start working with Jobcy that can provide you need drive everything to generate awareness, traffic, connect.</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h5 className="blog-title mb-4">Follow & Connect</h5>
                            <ul className="widget-social-menu text-center list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="#"><i className="uil uil-facebook-f"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><i className="uil uil-whatsapp"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><i className="uil uil-twitter-alt"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><i className="uil uil-dribbble"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><i className="uil uil-envelope"></i></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-5">
                            <h5 className="blog-title mb-4">Follow @ Instagram</h5>
                            <Row className="g-3">
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages1}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(0);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages2}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(1);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages3}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(2);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages4}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(3);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages5}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(4);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages6}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(5);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages7}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(6);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages8}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(7);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                                <Col sm={4} >
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImages10}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(8);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <h6 className="blog-title mb-4">Categories</h6>
                            <div className="mt-3">
                                <div className="form-check mb-2">
                                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked={isChecked} onChange={handleOnChange} />
                                    <label className="form-check-label ms-2" htmlFor="flexCheckChecked1">Business</label>
                                </div>
                                <div className="form-check mb-2">
                                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                    <label className="form-check-label ms-2" htmlFor="flexCheckChecked2">Information</label>
                                </div>
                                <div className="form-check mb-2">
                                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                    <label className="form-check-label ms-2" htmlFor="flexCheckChecked3">Design</label>
                                </div>
                                <div className="form-check mb-2">
                                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                                    <label className="form-check-label ms-2" htmlFor="flexCheckChecked4">Travel</label>
                                </div>
                                <div className="form-check mb-2">
                                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckChecked5" />
                                    <label className="form-check-label ms-2" htmlFor="flexCheckChecked5">Jobs</label>
                                </div>
                                <div className="form-check mb-2">
                                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckChecked6" />
                                    <label className="form-check-label ms-2" htmlFor="flexCheckChecked6">Fashion</label>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default LeftSideContent;
