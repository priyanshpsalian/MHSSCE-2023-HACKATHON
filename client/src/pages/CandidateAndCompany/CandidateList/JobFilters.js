import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col, Input, Row } from 'reactstrap';
import CountryOptions from '../../Home/SubSection/CountryOptions';
import JobType from '../../Home/SubSection/JobType';

const JobFilters = () => {
    return (
        <React.Fragment>
                            <Row className="justify-content-center">
                                <Col lg={12} >
                                    <div className="candidate-list-widgets mb-5">
                                        <Form action="#">
                                            <Row className="g-2">
                                                <Col lg={3}>
                                                    <div className="filler-job-form">
                                                        <i className="uil uil-briefcase-alt"></i>
                                                        <Input type="search" className="form-control filler-job-input-box" id="exampleFormControlInput1" placeholder="Job, Company name... " />
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="filler-job-form">
                                                        <i className="uil uil-location-point"></i>
                                                        <select className="form-select selectForm__inner" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                                           <CountryOptions />
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="filler-job-form">
                                                        <i className="uil uil-clipboard-notes"></i>
                                                        <select className="form-select selectForm__inner" data-trigger name="choices-single-categories" id="choices-single-categories" aria-label="Default select example">
                                                            <JobType/>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div>
                                                        <Link to="#" className="btn btn-primary"><i className="uil uil-filter"></i> Filter</Link>
                                                        {/* <Link to="#" className="btn btn-success ms-2"><i className="uil uil-cog"></i> Advance</Link> */}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
        </React.Fragment>
    )
}

export default JobFilters
