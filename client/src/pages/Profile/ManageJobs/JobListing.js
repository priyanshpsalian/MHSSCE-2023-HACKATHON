import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Modal,ModalBody,  Row } from 'reactstrap';

import Pagination from '../../Jobs/JobList2/Pagination'

//Import Images
import jobImage1 from '../../../assets/images/featured-job/img-01.png';
import jobImage2 from '../../../assets/images/featured-job/img-02.png';
import jobImage3 from '../../../assets/images/featured-job/img-03.png';
import jobImage4 from '../../../assets/images/featured-job/img-04.png';
import jobImage5 from '../../../assets/images/featured-job/img-05.png';
import jobImage6 from '../../../assets/images/featured-job/img-06.png';

const JobListing = () => {
  //Delete Modal
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);
    const jobListing = [
        {
            id: 1,
            companyImg: jobImage1,
            jobDescription: "Business Associate",
            experience: "",
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "California",
            salary : "$250 - $800 / month",
            partTime: true,
            timing: "Part Time",
            badges: [
                {
                    id: 1,
                    badgeclassName: "bg-soft-warning",
                    badgeName: "Urgent",
                }
            ]            
        },
        {
            id: 2,
            companyImg: jobImage2,
            jobDescription: "Marketing Director",
            experience: "2-4 Yrs Exp.",
            companyName: "Creative Agency",
            location: "New York",
            salary : "$250 - $800 / month",
            partTime: true,
            timing: "Part Time",            
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
            salary : "$250 - $800 / month",
            freeLance: true,
            timing: "Freelance",            
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
            jobDescription: "Product Sales Specialist",
            experience: "5+ Yrs Exp.",
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "California",
            salary : "$250 - $800 / month",
            fullTime: true,
            timing: "Freelance",            
            badges: [                
                {
                    id: 1,
                    badgeclassName: "bg-soft-info",
                    badgeName: "Private",
                },
            ],
            
        },
        {
            id: 5,
            companyImg: jobImage5,
            jobDescription: "Product Designer",
            experience: "0-5 Yrs Exp.",
            companyName: "Creative Agency",
            location: "California",
            salary : "$250 - $800 / month",
            internship: true,
            timing: "Internship",            
            badges: [],
            
        },
        {
            id: 6,
            companyImg: jobImage6,
            jobDescription: "Project Manager",
            experience: "0-2 Yrs Exp.",
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "California",
            salary : "$250 - $800 / month",
            fullTime: true,
            timing: "Freelance",            
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
            ],
            
        }
    ]
    return (
        <React.Fragment>
                        <Row>
                                <Col lg={12}>
                                {jobListing.map((jobListingDetails, key) => (
                                    <Card className="job-box card mt-4" key={key}>
                                        <CardBody className="p-4">
                                            <Row>
                                                
                                                <Col lg={1}>
                                                    <Link to="/companydetails"><img src={jobListingDetails.companyImg} alt="" className="img-fluid rounded-3" /></Link>
                                                </Col>
                                                     
                                                
                                                <Col lg={9} >
                                                    <div className="mt-3 mt-lg-0">
                                                        <h5 className="fs-17 mb-1"><Link to="/jobdetails" className="text-dark">{jobListingDetails.jobDescription}</Link></h5>
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item">
                                                                <p className="text-muted fs-14 mb-0">{jobListingDetails.companyName}</p>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <p className="text-muted fs-14 mb-0"><i className="mdi mdi-map-marker"></i> {jobListingDetails.location}</p>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <p className="text-muted fs-14 mb-0"><i className="uil uil-wallet"></i> {jobListingDetails.salary}</p>
                                                            </li>
                                                        </ul>
                                                        <div className="mt-2">
                                                        <span
                                                            className={
                                                                jobListingDetails.fullTime === true
                                                                    ? "badge bg-soft-success fs-13 mt-1 mx-1"
                                                                    : jobListingDetails.partTime === true
                                                                        ? "badge bg-soft-danger fs-13 mt-1 mx-1"
                                                                        : jobListingDetails.freeLance === true
                                                                            ? "badge bg-soft-purple fs-13 mt-1 mx-1"
                                                                            : jobListingDetails.internship === true
                                                                                ? "badge bg-soft-blue fs-13 mt-1"
                                                                                : ""
                                                            }
                                                        >
                                                        {jobListingDetails.timing}
                                                        </span>
                                                        {(jobListingDetails.badges || []).map((badgeInner, key) => (
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
                                                
                                                <Col lg={2} className="align-self-center">
                                                    <ul className="list-inline mt-3 mb-0">
                                                        <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                            <Link to="/bookmarkjobpost" className="avatar-sm bg-soft-success d-inline-block text-center rounded-circle fs-18">
                                                                <i className="uil uil-edit"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                            <Link onClick={openModal} to="#"  className="avatar-sm bg-soft-danger d-inline-block text-center rounded-circle fs-18">
                                                                <i className="uil uil-trash-alt"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Col>
                                                
                                            </Row>
                                        </CardBody>
                                    </Card>  
                                    ))}                
                                </Col>
                          <Pagination />    
                          </Row>            
                    

                    
                    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
                            <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Delete Jobs ?</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <ModalBody>
                                    <div>
                                        <h6 className="text-danger"><i className="uil uil-exclamation-triangle"></i> Warning: Are you sure you want to delete job Post ?</h6>
                                        <p className="text-muted"> Your jobs post will be permenently removed and you won't be able to see them again, including the once you're shared with your friends.</p>
                                    </div>
                                </ModalBody>
                                <div className="modal-footer">
                                    <button type="button" onClick={openModal}className="btn btn-primary btn-sm">Cancel</button>
                                    <button type="button" className="btn btn-danger btn-sm">Yes, delete</button>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    
                    
        </React.Fragment>
    )
}

export default JobListing
