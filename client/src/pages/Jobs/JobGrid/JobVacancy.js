import React,{useState} from 'react';
import { Col, Row ,Modal,ModalBody,Input,Label} from 'reactstrap';
import { Link } from 'react-router-dom';

//Job Images
import jobImage1 from '../../../assets/images/featured-job/img-01.png';
import jobImage2 from '../../../assets/images/featured-job/img-02.png';
import jobImage3 from '../../../assets/images/featured-job/img-03.png';
import jobImage4 from '../../../assets/images/featured-job/img-04.png';


const JobVacancy = () => {
    //Apply Now Model
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);

    const jobVacancy = [
        {
            id: 1,
            companyImg: jobImage1,
            jobDescription: "Magento Developer",
            experience: "0-2 Yrs Exp.",
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "California",
            salary : "$250 - $800 / month",
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
            companyName: "Jobcy Technology Pvt.Ltd",
            location: "New York",
            salary : "$250 - $800 / month",
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
            salary : "$250 - $800 / month",
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
            addclassNameBookmark: true,
            badges: [                
                {
                    id: 1,
                    badgeclassName: "bg-soft-info",
                    badgeName: "Private",
                },
            ],
            
        },
    ]
    
    return (
        <React.Fragment>
                                    {jobVacancy.map((jobVacancyDetails, key) => (
                                        <div
                                        key={key}
                                        className={
                                            jobVacancyDetails.addclassNameBookmark === true
                                                ? "job-box bookmark-post card mt-4"
                                                : "job-box card mt-4"
                                        }
                                        >
                                        <div className="p-4">
                                            <Row >
                                                <Col lg={2}>
                                                    <Link to="/companydetails"><img src={jobVacancyDetails.companyImg} alt="" className="img-fluid rounded-3" /></Link>
                                                </Col>
                                                <Col lg={10}>
                                                    <div className="mt-3 mt-lg-0">
                                                        <h5 className="fs-17 mb-1"><Link to="/jobdetails" className="text-dark">{jobVacancyDetails.jobDescription}</Link> <small className="text-muted fw-normal">({jobVacancyDetails.experience})</small></h5>
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item">
                                                                <p className="text-muted fs-14 mb-0">{jobVacancyDetails.companyName}</p>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <p className="text-muted fs-14 mb-0"><i className="mdi mdi-map-marker"></i> {jobVacancyDetails.location}</p>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <p className="text-muted fs-14 mb-0"><i className="uil uil-wallet"></i> {jobVacancyDetails.salary}</p>
                                                            </li>
                                                        </ul>
                                                        <div className="mt-2">
                                                        <span
                                                            className={
                                                                jobVacancyDetails.fullTime === true
                                                                    ? "badge bg-soft-success fs-13 mt-1 mx-1"
                                                                    : jobVacancyDetails.partTime === true
                                                                        ? "badge bg-soft-danger fs-13 mt-1 mx-1"
                                                                        : jobVacancyDetails.freeLance === true
                                                                            ? "badge bg-soft-purple fs-13 mt-1 mx-1"
                                                                            : jobVacancyDetails.internship === true
                                                                                ? "badge bg-soft-blue fs-13 mt-1"
                                                                                : ""
                                                            }
                                                        >
                                                            {jobVacancyDetails.timing}
                                                        </span>
                                                        {(jobVacancyDetails.badges || []).map((badgeInner, key) => (
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
                                            <Row className="justify-content-between">
                                                <Col md={8}>
                                                    <div>
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item"><i className="uil uil-tag"></i> Keywords :</li>
                                                            <li className="list-inline-item"><Link to="#" className="primary-link text-muted">Ui designer</Link>,</li>
                                                            <li className="list-inline-item"><Link to="#" className="primary-link text-muted">developer</Link></li>
                                                        </ul>
                                                    </div>
                                                </Col>                                                
                                                
                                                <Col md={4} >
                                                    <div className="text-md-end">
                                                        <Link to="#applyNow" onClick={openModal} className="primary-link">Apply Now <i className="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </Col>                                                
                                            </Row>                                            
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
                                                            <Input type="text" className="form-control" id="nameControlInput" placeholder="Enter your name"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <Label for="emailControlInput2" className="form-label">Email Address</Label>
                                                            <Input type="email" className="form-control" id="emailControlInput2" placeholder="Enter your email"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <Label for="messageControlTextarea" className="form-label">Message</Label>
                                                            <textarea className="form-control" id="messageControlTextarea" rows="4" placeholder="Enter your message"></textarea>
                                                        </div>
                                                        <div className="mb-4">
                                                            <Label className="form-label" for="inputGroupFile01">Resume Upload</Label>
                                                            <Input type="file" className="form-control" id="inputGroupFile01"/>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary w-100">Send Application</button>
                                                    </ModalBody>
                                                </Modal>
                                            </div>
                                        </div>  
                                
        </React.Fragment>
    )
}

export default JobVacancy
