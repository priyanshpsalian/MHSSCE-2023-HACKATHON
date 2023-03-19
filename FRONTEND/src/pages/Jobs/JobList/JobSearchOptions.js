import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input, Row } from 'reactstrap'
import CountryOptions from '../../Home/SubSection/CountryOptions'
import JobType from '../../Home/SubSection/JobType'


const JobSearchOptions = () => {
    return (
        <React.Fragment>
            <div className="job-list-header">
                <Form action="#">
                    <Row className="g-2">
                        <Col lg={3} md={6}>
                            <div className="filler-job-form">
                                <i className="uil uil-briefcase-alt"></i>
                                <Input type="search" className="form-control filter-job-input-box-option" id="exampleFormControlInput1" placeholder="Job, company... " />
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="filler-job-form">
                                <i className="uil uil-location-point"></i>
                                <select className="form-select form-select-option" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                    <CountryOptions />
                                </select>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="filler-job-form">
                                <i className="uil uil-clipboard-notes"></i>
                                <select className="form-select form-select-option" data-trigger name="choices-single-categories" id="choices-single-categories" aria-label="Default select example">
                                    <JobType />
                                </select>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <Link to="#" className="btn btn-primary w-100"><i className="uil uil-filter"></i> Fliter</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </React.Fragment>
    )
}

export default JobSearchOptions
