import React,{useState} from 'react';
import { Col, Modal,ModalBody,Input,Label} from 'reactstrap';
import { Link } from 'react-router-dom';

import jobImage1 from '../../../assets/images/featured-job/img-01.png';
import jobImage2 from '../../../assets/images/featured-job/img-02.png';
import jobImage3 from '../../../assets/images/featured-job/img-03.png';
import jobImage4 from '../../../assets/images/featured-job/img-04.png';
import jobImage5 from '../../../assets/images/featured-job/img-05.png';
import jobImage6 from '../../../assets/images/featured-job/img-06.png';
import jobImage7 from '../../../assets/images/featured-job/img-07.png';
import jobImage8 from '../../../assets/images/featured-job/img-08.png';
import jobImage9 from '../../../assets/images/featured-job/img-09.png'

const JobVacancy2 = () => {
    //Apply Now Model
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);

    const jobVacancy2 = [
        {
            id: 1,
            companyImg: jobImage1,
            jobDescription: "Magento Developer",
            experience: "Min. 1 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Developer",            
            salary : "$500/ month",
            jobTimeDate: "2 min ago",
            addclassNameBookmark: false,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."                   
        },
        {
            id: 2,
            companyImg: jobImage2,
            jobDescription: "Marketing Director",
            experience: "Min. 3 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Director",
            salary : "$850/ month",
            jobTimeDate: "15 days ago",
            addclassNameBookmark: true,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."
        },
        {
            id: 3,
            companyImg: jobImage3,
            jobDescription: "Magento Developer",
            experience: "0-1 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Developer",
            salary : "$780/ month",
            jobTimeDate: "2 hrs ago",
            addclassNameBookmark: false,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."            
        },
        {
            id: 4,
            companyImg: jobImage4,
            jobDescription: "Project Leader",
            experience: "2 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Developer",
            salary : "$900/ month",
            jobTimeDate: "30 min ago",
            addclassNameBookmark: false,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."
            
        },
        {
            id: 5,
            companyImg: jobImage5,
            jobDescription: "Graphic Designer",
            experience: "0.6 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Designer",
            salary : "$350/ month",
            jobTimeDate: "2 days ago",
            addclassNameBookmark: false,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."
            
        },
        {
            id: 6,
            companyImg: jobImage6,
            jobDescription: "Store Manager",
            experience: "Min. 1.5 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Manager",
            salary : "$950/ month",
            jobTimeDate: "2 days ago",
            addclassNameBookmark: true,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."
            
        },
        {
            id: 7,
            companyImg: jobImage7,
            jobDescription: "Product Designer",
            experience: "Min. 1 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Developer",
            salary : "$750/ month",
            jobTimeDate: "1 hrs ago",
            addclassNameBookmark: true,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."
            
        },
        {
            id: 8,
            companyImg: jobImage8,
            jobDescription: "Business Associate",
            experience: "Min. 1 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Developer",
            salary : "$780/ month",
            jobTimeDate: "2 days ago",
            addclassNameBookmark: false,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."     
        },
        {
            id: 9,
            companyImg: jobImage9,
            jobDescription: "Product Sales Specialist",
            experience: "Min. 1 Year",
            companyName: "Jobcy Technology Pvt.Ltd",
            jobType : "Developer",
            salary : "$780/ Month",
            jobTimeDate: "2 days ago",  
            addclassNameBookmark: false,
            jobDetails : "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent."
        }    
    ]
    return (
        <React.Fragment>
                                {jobVacancy2.map((jobVacancy2Details, key) => (                                  
                                <Col lg={4} md={6} className="mt-4" key={key}>
                                    <div
                                        
                                        className={
                                            jobVacancy2Details.addclassNameBookmark === true
                                                ? "card job-grid-box bookmark-post"
                                                : "card job-grid-box"
                                        }
                                    >                                    
                                        <div className="card-body p-4">
                                            <div className="favorite-icon">
                                                <Link to="#"><i className="uil uil-heart-alt"></i></Link>
                                            </div>
                                            <div>
                                                <Link to="/companydetails"><img src={jobVacancy2Details.companyImg} alt="" className="img-fluid rounded-3" /></Link>
                                            </div>
                                            <div className="mt-4">
                                                <Link to="/jobdetails" className="primary-link"><h5 className="fs-17 mb-1">{jobVacancy2Details.jobDescription}</h5></Link>
                                                <p className="text-muted">{jobVacancy2Details.companyName}</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="badge bg-soft-success fs-13 mt-1">{jobVacancy2Details.salary}</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="badge bg-soft-purple fs-13 mt-1">{jobVacancy2Details.experience}</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="badge bg-soft-blue fs-13 mt-1">{jobVacancy2Details.jobType}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="job-grid-content mt-3">
                                                <p className="text-muted">{jobVacancy2Details.jobDetails}</p>
                                                <div className="d-flex align-items-center justify-content-between mt-4 border-top pt-3">
                                                    <p className="text-muted float-start mb-0">{jobVacancy2Details.jobTimeDate}</p>
                                                    <div className="text-end">
                                                        <a href="#applyNow" onClick={openModal} className="btn btn-sm btn-primary">Apply Now <i className="uil uil-angle-right-b"></i></a>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </Col>
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

export default JobVacancy2
