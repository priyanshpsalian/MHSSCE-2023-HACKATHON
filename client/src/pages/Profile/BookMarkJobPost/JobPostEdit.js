import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Input, Label, Row } from 'reactstrap';

const JobPostEdit = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="bg-soft-primary p-3">
                                <h5 className="mb-0 fs-17">Post a New Job!</h5>
                            </div>
                        </Col>
                    </Row>
                    <form action="#" className="job-post-form shadow mt-4">
                        <div className="job-post-content box-shadow-md rounded-3 p-4">
                            <Row className="row">
                                <Col lg={12}>
                                    <div className="mb-4">
                                        <Label htmlFor="jobtitle" className="form-label">Job Title</Label>
                                        <Input type="text" className="form-control" id="jobtitle" placeholder="Title" />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-4">
                                        <Label htmlFor="jobdescription" className="form-label">Job Description</Label>
                                        <textarea className="form-control" id="jobdescription" rows="3" placeholder="Enter Job Description"></textarea>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <Label htmlFor="email" className="form-label">Email Address</Label>
                                        <Input type="email" className="form-control" id="email" placeholder="Email Address" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <Label htmlFor="phoneNumber" className="form-label">Phone Number</Label>
                                        <Input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="choices-single-categories" className="form-label">Categories</label>
                                        <select className="form-select" data-trigger="" name="choices-single-categories" id="choices-single-categories" aria-label="Default select example">
                                            <option value="ne">Digital & Creative</option>
                                            <option value="df">Retail</option>
                                            <option value="od">Management</option>
                                            <option value="rd">Human Resources</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="jobtype" className="form-label">Job Type</label>
                                        <Input type="text" className="form-control" id="jobtype" placeholder="Job type" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="designation" className="form-label">Designation</label>
                                        <Input type="text" className="form-control" id="designation" placeholder="Designation" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="salary" className="form-label">Salary($)</label>
                                        <Input type="number" className="form-control" id="salary" placeholder="Salary" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="qualification" className="form-label">Qualification</label>
                                        <Input type="text" className="form-control" id="qualification" placeholder="Qualification" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="skills" className="form-label">Job Skills </label>
                                        <Input type="text" className="form-control" id="skills" placeholder="Job skills" />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-4">
                                        <label htmlFor="lastdate" className="form-label">Application Deadline Date</label>
                                        <Input type="date" className="form-control" id="lastdate" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-4">
                                        <label htmlFor="choices-single-location" className="form-label">Country</label>
                                        <select className="form-select" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-4">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <Input type="text" className="form-control" id="city" placeholder="City" />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-4">
                                        <label htmlFor="zipcode" className="form-label">Zipcode</label>
                                        <Input type="text" className="form-control" id="zipcode" placeholder="Zipcode" />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                                        <Link to="#" className="btn btn-success">Back</Link>
                                        <Link to="#" className="btn btn-primary">Post Now <i className="mdi mdi-send"></i></Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </form>
                </Container>
            </section>

        </React.Fragment>
    );
};

export default JobPostEdit;
