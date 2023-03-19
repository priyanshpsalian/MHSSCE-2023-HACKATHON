import React, { useState } from 'react';
import { Col, Card, CardBody, Row, Input, Modal, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


//Import BlogImage
import blogImage1 from '../../../assets/images/blog/img-01.jpg';
import blogImage3 from '../../../assets/images/blog/img-03.jpg';
import blogImage12 from '../../../assets/images/blog/img-12.jpg';



//Job Images
import jobImage1 from '../../../assets/images/featured-job/img-01.png';
import jobImage2 from '../../../assets/images/featured-job/img-02.png';
import jobImage3 from '../../../assets/images/featured-job/img-03.png';
import jobImage4 from '../../../assets/images/featured-job/img-04.png';

const images = [blogImage1, blogImage3, blogImage12];

const RightSideContent = () => {
    //Apply Now Model
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);

    //Lightbox
    const [photoIndex, setphotoIndex] = useState(0);
    const [isGallery, setisGallery] = useState(false);

    const jobVacancyPost = [
        {
            id: 1,
            companyImg: jobImage1,
            jobDescription: "HTML Developer",
            experience: "0-2 Yrs Exp.",
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "California",
            salary: "$250 - $800 / month",
            fullTime: true,
            timing: "Full Time",
            addclassNameBookmark: true,
            badges: [
                {
                    id: 1,
                    badgeclassName: "bg-soft-warning",
                    badgeName: "Urgent",
                },
                {
                    id: 2,
                    badgeclassName: "bg-soft-info",
                    badgeName: "Private",
                },
            ]
        },
        {
            id: 2,
            companyImg: jobImage2,
            jobDescription: "Marketing Director",
            experience: "2-4 Yrs Exp.",
            companyName: "Creative Agency",
            location: "New York",
            salary: "$250 - $800 / month",
            partTime: true,
            timing: "Full Time",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeclassName: "bg-soft-info",
                    badgeName: "Private",
                },
            ]
        },
        {
            id: 3,
            companyImg: jobImage3,
            jobDescription: "HTML Developer",
            experience: "2-4 Yrs Exp.",
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "California",
            salary: "$250 - $800 / month",
            freeLance: true,
            timing: "Freelance",
            addclassNameBookmark: true,
            badges: [
                {
                    id: 1,
                    badgeclassName: "bg-soft-blue",
                    badgeName: "Internship",
                },
            ],

        },
        {
            id: 4,
            companyImg: jobImage4,
            jobDescription: "Java Developer",
            experience: "0-2 Yrs Exp.",
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "California",
            salary: "$450 - $800 / month",
            freeLance: true,
            timing: "Freelance",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeclassName: "bg-soft-blue",
                    badgeName: "Internship",
                },
            ],

        }
    ];
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
                <Card className="ms-lg-4 mt-4 mt-lg-0">
                    <CardBody className="p-4">
                        <div className="mb-5">
                            <h6 className="fs-17 fw-semibold mb-4">About Company</h6>
                            <p className="text-muted"> Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer
                                revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and
                                real-time potentialities. Appropriately communicate one-to-one technology.</p>

                            <p className="text-muted">Intrinsically incubate intuitive opportunities and real-time potentialities Appropriately communicate
                                one-to-one technology.</p>

                            <p className="text-muted"> Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit
                                seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa
                                eiusmod Pinterest in do umami readymade swag.</p>
                        </div>
                        <div className="candidate-portfolio mb-5">
                            <h6 className="fs-17 fw-semibold mb-4">Gallery</h6>
                            <Row className="g-3">
                                <Col lg={6} >
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
                                </Col>
                                <Col lg={6} >
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
                                </Col>
                                <Col lg={12}>
                                    <Link to="#" className="image-popup">
                                        <img
                                            src={blogImage12}
                                            onClick={() => {
                                                setisGallery(true);
                                                setphotoIndex(2);
                                            }}
                                            alt=""
                                            className="img-fluid"
                                        /></Link>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <h6 className="fs-17 fw-semibold mb-4">Current Opening</h6>

                            {jobVacancyPost.map((jobVacancyPostDetails, key) => (
                                <div
                                    key={key}
                                    className={
                                        jobVacancyPostDetails.addclassNameBookmark === true
                                            ? "job-box bookmark-post card mt-4"
                                            : "job-box card mt-4"
                                    }
                                >
                                    <div className="p-4">
                                        <Row>
                                            <Col lg={1}>
                                                <Link to="/companydetails"><img src={jobVacancyPostDetails.companyImg} alt="" className="img-fluid rounded-3" /></Link>
                                            </Col>
                                            <Col lg={10}>
                                                <div className="mt-3 mt-lg-0">
                                                    <h5 className="fs-17 mb-1"><Link to="/jobdetails" className="text-dark">{jobVacancyPostDetails.jobDescription}</Link> <small className="text-muted fw-normal">({jobVacancyPostDetails.experience})</small></h5>
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <p className="text-muted fs-14 mb-0">{jobVacancyPostDetails.companyName}</p>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <p className="text-muted fs-14 mb-0"><i className="mdi mdi-map-marker"></i>{jobVacancyPostDetails.location}</p>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <p className="text-muted fs-14 mb-0"><i className="uil uil-wallet"></i> {jobVacancyPostDetails.salary}</p>
                                                        </li>
                                                    </ul>
                                                    <div className="mt-2">
                                                        <span
                                                            className={
                                                                jobVacancyPostDetails.fullTime === true
                                                                    ? "badge bg-soft-success fs-13 mt-1 mx-1"
                                                                    : jobVacancyPostDetails.partTime === true
                                                                        ? "badge bg-soft-danger fs-13 mt-1 mx-1"
                                                                        : jobVacancyPostDetails.freeLance === true
                                                                            ? "badge bg-soft-purple fs-13 mt-1 mx-1"
                                                                            : jobVacancyPostDetails.internship === true
                                                                                ? "badge bg-soft-blue fs-13 mt-1"
                                                                                : ""
                                                            }
                                                        >
                                                            {jobVacancyPostDetails.timing}
                                                        </span>
                                                        {(jobVacancyPostDetails.badges || []).map((badgeInner, key) => (
                                                            <span
                                                                className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                                                                key={key}
                                                            >
                                                                {badgeInner.badgeName}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="favorite-icon">
                                            <Link to="#"><i className="uil uil-heart-alt fs-18"></i></Link>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                        <div className="row justify-content-between">
                                            <div className="col-md-8">
                                                <div>
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item"><i className="uil uil-tag"></i> Keywords :</li>
                                                        <li className="list-inline-item"><Link to="#" className="primary-link text-muted">Ui designer</Link>,</li>
                                                        <li className="list-inline-item"><Link to="#" className="primary-link text-muted">developer</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="text-md-end">
                                                    <Link to="#applyNow" onClick={openModal} className="primary-link">Apply Now <i className="mdi mdi-chevron-double-right"></i></Link>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))}
                            <div className="modal fade" id="applyNow" tabIndex="-1" aria-labelledby="applyNow" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <Modal isOpen={modal} toggle={openModal} centered>
                                        <ModalBody className="modal-body p-5">
                                            <div className="text-center mb-4">
                                                <h5 className="modal-title" id="staticBackdropLabel">Apply For This Job</h5>
                                            </div>
                                            <div className="position-absolute end-0 top-0 p-3">
                                                <button type="button" onClick={openModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="mb-3">
                                                <Label for="nameControlInput" className="form-label">Name</Label>
                                                <Input type="text" className="form-control" id="nameControlInput" placeholder="Enter your name" />
                                            </div>
                                            <div className="mb-3">
                                                <Label for="emailControlInput2" className="form-label">Email Address</Label>
                                                <Input type="email" className="form-control" id="emailControlInput2" placeholder="Enter your email" />
                                            </div>
                                            <div className="mb-3">
                                                <Label for="messageControlTextarea" className="form-label">Message</Label>
                                                <textarea className="form-control" id="messageControlTextarea" rows="4" placeholder="Enter your message"></textarea>
                                            </div>
                                            <div className="mb-4">
                                                <Label className="form-label" for="inputGroupFile01">Resume Upload</Label>
                                                <Input type="file" className="form-control" id="inputGroupFile01" />
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Send Application</button>
                                        </ModalBody>
                                    </Modal>
                                </div>
                            </div>

                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RightSideContent;
