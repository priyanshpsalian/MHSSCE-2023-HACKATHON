import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

//Import Job Images
import jobImage1 from '../../../assets/images/featured-job/img-01.png';
import jobImage2 from '../../../assets/images/featured-job/img-02.png';
import jobImage3 from '../../../assets/images/featured-job/img-03.png';
import jobImage5 from '../../../assets/images/featured-job/img-05.png';
import jobImage6 from '../../../assets/images/featured-job/img-06.png';
import jobImage7 from '../../../assets/images/featured-job/img-07.png';
import jobImage8 from '../../../assets/images/featured-job/img-08.png';
import jobImage9 from '../../../assets/images/featured-job/img-09.png';
import jobImage10 from '../../../assets/images/featured-job/img-10.png';

const CompanyDetails = () => {
    const companyDetails = [
        {
            id: 1,
            jobImg: jobImage1,
            compnayName: "Jobcy Consulting",
            location: "New York",
            numberOfVacancy: 52,
            label: true,
            labelRating: 4.9

        },
        {
            id: 2,
            jobImg: jobImage2,
            compnayName: "Creative Agency",
            location: "UK",
            numberOfVacancy: 11,
            label: false,
            labelRating: null

        },
        {
            id: 3,
            jobImg: jobImage3,
            compnayName: "DootTech Solution",
            location: "London",
            numberOfVacancy: "09",
            label: false,
            labelRating: null

        },
        {
            id: 4,
            jobImg: jobImage5,
            compnayName: "Apple School & College",
            location: "Canada",
            numberOfVacancy: 27,
            label: false,
            labelRating: null

        },
        {
            id: 5,
            jobImg: jobImage6,
            compnayName: "Hunter Hospital",
            location: "America",
            numberOfVacancy: "07",
            label: true,
            labelRating: 4.8

        },
        {
            id: 6,
            jobImg: jobImage7,
            compnayName: "Jshop Agency",
            location: "California",
            numberOfVacancy: 20,
            label: false,
            labelRating: null

        },
        {
            id: 7,
            jobImg: jobImage8,
            compnayName: "Adobe Agency",
            location: "New York",
            numberOfVacancy: 27,
            label: false,
            labelRating: null

        },
        {
            id: 8,
            jobImg: jobImage9,
            compnayName: "Creative Agency",
            location: "Uk",
            numberOfVacancy: 35,
            label: false,
            labelRating: null

        },
        {
            id: 9,
            jobImg: jobImage10,
            compnayName: "Kshop Agency",
            location: "America",
            numberOfVacancy: 14,
            label: true,
            labelRating: 3.0

        },
    ];
    return (
        <React.Fragment>
            <Row className="align-items-center mb-4">
                <Col lg={8}>
                    <div className="mb-3 mb-lg-0">
                        <h6 className="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="candidate-list-widgets">
                        <Row>
                            <Col lg={6}>
                                <div className="selection-widget">
                                    <select className="form-select" data-trigger name="choices-single-filter-orderby" id="choices-single-filter-orderby" aria-label="Default select example">
                                        <option value="df">Default</option>
                                        <option value="ne">Newest</option>
                                        <option value="od">Oldest</option>
                                        <option value="rd">Random</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="selection-widget mt-2 mt-lg-0">
                                    <select className="form-select" data-trigger name="choices-candidate-page" id="choices-candidate-page" aria-label="Default select example">
                                        <option value="df">All</option>
                                        <option value="ne">8 per Page</option>
                                        <option value="ne">12 per Page</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row>
                {companyDetails.map((companyDetailsNew, key) => (
                    <Col lg={4} md={6} key={key}>
                        <Card className="text-center mb-4">
                            <CardBody className="px-4 py-5">
                                {companyDetailsNew.label && (
                                    <div className="featured-label">
                                        <span className="featured">{companyDetailsNew.labelRating} <i className="mdi mdi-star-outline"></i></span>
                                    </div>
                                )}
                                <img src={companyDetailsNew.jobImg} alt="" className="img-fluid rounded-3" />
                                <div className="mt-4">
                                    <Link to="/companydetails" className="primary-link"><h6 className="fs-18 mb-2">{companyDetailsNew.compnayName}</h6></Link>
                                    <p className="text-muted mb-4">{companyDetailsNew.location}</p>
                                    <Link to="/companydetails" className="btn btn-primary">{companyDetailsNew.numberOfVacancy} Opening Jobs</Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>


        </React.Fragment>
    );
};

export default CompanyDetails;
