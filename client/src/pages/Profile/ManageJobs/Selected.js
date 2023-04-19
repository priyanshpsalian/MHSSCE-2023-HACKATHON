import React from 'react'
import { Col, Row } from 'reactstrap';

const Selected = () => {
    return (
        <React.Fragment>
                            <Row className="align-items-center">
                                <Col lg={8}>
                                    <div className="mb-4 mb-lg-0">
                                        <h6 className="mb-0"> My Job Listings </h6>
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
                                                        <option value="ne">Last 2 Month</option>
                                                        <option value="ne">Last 6 Month</option>
                                                        <option value="ne">Last 12 Month</option>
                                                        <option value="ne">Last 2 Year</option>
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
        </React.Fragment>
    )
}

export default Selected;
