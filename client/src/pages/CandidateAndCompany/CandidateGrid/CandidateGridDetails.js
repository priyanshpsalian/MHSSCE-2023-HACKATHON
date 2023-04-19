import React,{useState} from 'react';
import { Col, Row ,Modal,ModalBody,Input,Label,CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';

import userImage1 from "../../../assets/images/user/img-01.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage3 from "../../../assets/images/user/img-03.jpg";
import userImage4 from "../../../assets/images/user/img-04.jpg";
import userImage5 from "../../../assets/images/user/img-05.jpg";
import userImage6 from "../../../assets/images/user/img-06.jpg";
import userImage7 from "../../../assets/images/user/img-07.jpg";
import userImage8 from "../../../assets/images/user/img-08.jpg";
import userImage9 from "../../../assets/images/user/img-09.jpg";

const CandidateGridDetails = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const candidategridDetails = [
    {
      id: 1,
      userImg: userImage1,
      candidateName: "Charles Dickens",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-success",
      experience: "0-3 Years",
      jobType: "Freelancers",
      salary: "$800 / hours",
      addclassNameBookmark: true,
      label: true,
      statuslabel: "FEATURED",
    },
    {
      id: 2,
      userImg: userImage2,
      candidateName: "Gabriel Palmer",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-success",
      experience: "3.5 Years",
      jobType: "Freelancers",
      salary: "$350 / hours",
      addclassNameBookmark: true,
      label: false,
    },
    {
      id: 3,
      userImg: userImage3,
      candidateName: "James Lemire",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-danger",
      experience: "4 Years",
      jobType: "Freelancers",
      salary: "$280 / hours",
      addclassNameBookmark: false,
      label: true,
      statuslabel: "URGENT",
    },

    {
      id: 4,
      userImg: userImage4,
      candidateName: "Rebecca Swartz",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-success",
      experience: "2 Years",
      jobType: "Freelancers",
      salary: "$240 / hours",
      addclassNameBookmark: false,
      label: false,
    },
    {
      id: 5,
      userImg: userImage5,
      candidateName: "Betty Richards",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-success",
      experience: "2 Years",
      jobType: "Freelancers",
      salary: "$198 / hours",
      addclassNameBookmark: false,
      label: false,
    },
    {
      id: 6,
      userImg: userImage6,
      candidateName: "Jeffrey Montgomery",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-success",
      experience: "7 Years",
      jobType: "Freelancers",
      salary: "$299 / hours",
      addclassNameBookmark: true,
      label: false,
    },
    {
      id: 7,
      userImg: userImage7,
      candidateName: "Brooke Hayes",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-success",
      experience: "4 Years",
      jobType: "Freelancers",
      salary: "$310 / hours",
      addclassNameBookmark: true,
      label: false,
    },
    {
      id: 8,
      userImg: userImage8,
      candidateName: "Cerys Woods",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-danger",
      experience: "4.5 Years",
      jobType: "Freelancers",
      salary: "$450 / hours",
      addclassNameBookmark: false,
      label: false,
    },
    {
      id: 9,
      userImg: userImage9,
      candidateName: "Olivia Murphy",
      candidateStatusClassName:
        "profile-active position-absolute badge rounded-circle bg-success",
      experience: "7 Years",
      jobType: "Freelancers",
      salary: "$300 / hours",
      addclassNameBookmark: false,
      label: false,
    },
  ];
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg={8} md={7}>
          <div>
            <h6 className="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
          </div>
        </Col>

        <Col lg={4} md={5}>
          <div className="candidate-list-widgets">
            <Row>
              <Col md={6}>
                <div className="selection-widget mt-3 mt-md-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Default select example"
                  >
                    <option value="df">Default</option>
                    <option value="ne">Newest</option>
                    <option value="od">Oldest</option>
                    <option value="rd">Random</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="selection-widget mt-3 mt-md-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Default select example"
                  >
                    <option value="all">All</option>
                    <option value="4">4 per Page</option>
                    <option value="8">8 per Page</option>
                    <option value="12">12 per Page</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="candidate-list">
        <Row>
          {candidategridDetails.map((candidategridDetailsNew, key) => (
            <Col lg={4} md={6} key={key}>
              <div
                className={
                  candidategridDetailsNew.addclassNameBookmark === true
                    ? "candidate-grid-box bookmark-post card mt-4"
                    : "candidate-grid-box card mt-4"
                }
              >
                <CardBody className="p-4">
                  {candidategridDetailsNew.label && (
                    <div className="featured-label">
                      <span className="featured">{candidategridDetailsNew.statuslabel}</span>
                    </div>
                  )}

                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0 position-relative">
                      <img
                        src={candidategridDetailsNew.userImg}
                        alt=""
                        className="avatar-md rounded"
                      />
                      <span
                        className={
                          candidategridDetailsNew.candidateStatusClassName
                        }
                      >
                        <span className="visually-hidden">active</span>
                      </span>
                    </div>
                    <div className="ms-3">
                      <Link to="/candidate-details" className="primary-link">
                        <h5 className="fs-17">
                          {candidategridDetailsNew.candidateName}
                        </h5>
                      </Link>
                      <span className="badge bg-soft-info fs-13">
                        {candidategridDetailsNew.salary}
                      </span>
                    </div>
                  </div>
                  <ul className="list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item text-warning fs-17">
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star-half-full"></i>
                    </li>
                    <li className="list-inline-item">
                      <div className="favorite-icon">
                        <Link to="#">
                          <i className="uil uil-heart-alt fs-18"></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <div className="border rounded mb-4">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="border-end px-3 py-2">
                          <p className="text-muted mb-0">
                            Exp. : {candidategridDetailsNew.experience}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="px-3 py-2">
                          <p className="text-muted mb-0">
                            {candidategridDetailsNew.jobType}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    Some quick example text to build on the card title and bulk
                    the card's content Moltin gives you platform.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="#hireNow"
                      onClick={openModal}
                      data-bs-toggle="modal"
                      className="btn btn-primary btn-hover w-100 mt-2"
                    >
                      <i className="mdi mdi-account-check"></i> Hire Now
                    </Link>
                    <Link
                      to="/candidatedetails"
                      className="btn btn-soft-primary btn-hover w-100 mt-2"
                    >
                      <i className="mdi mdi-eye"></i> View Profile
                    </Link>
                  </div>
                </CardBody>
              </div>
            </Col>
          ))}
        </Row>
        
          <div className="modal fade" id="hireNow" tabIndex="-1" aria-labelledby="hireNow" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
              <Modal isOpen={modal} toggle={openModal} centered>
                      <ModalBody className="p-5">
                          <div className="text-center mb-4">
                              <h5 className="modal-title" id="staticBackdropLabel">Hire Now</h5>
                          </div>
                          <div className="position-absolute end-0 top-0 p-3">
                              <button type="button" onClick={openModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="mb-3">
                              <Label for="namrFormControlInput" className="form-label">Company Name</Label>
                              <Input type="text" className="form-control" id="namrFormControlInput" placeholder="Enter your company name" />
                          </div>
                          <div className="mb-3">
                              <Label for="emailFormControlInput" className="form-label">Email Address</Label>
                              <Input type="email" className="form-control" id="emailFormControlInput" placeholder="Enter your email" />
                          </div>
                          <div className="mb-4">
                              <Label for="messageFormControlTextarea" className="form-label">Message</Label>
                              <textarea className="form-control" id="messageFormControlTextarea" rows="4" placeholder="Enter your message"></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary w-100">Send Message</button>
                      </ModalBody>
                </Modal>
              </div>
          </div>
      </div>
    </React.Fragment>
  );
};

export default CandidateGridDetails;
