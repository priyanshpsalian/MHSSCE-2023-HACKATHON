import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const Typography = () => {
    return (
        <React.Fragment>
                                    <Card  id="typography">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Font Family</h5> 
                                        </div>
                                        <CardBody className="p-4">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-4">
                                                    <h1 className="display-4 mb-0">A</h1>
                                                </div>
                                                <div className="flex-grow-1 align-self-center">
                                                    <p className="text-muted mb-2">Font Family</p>
                                                    <h5 className="mb-0">"Inter", sans-serif</h5>
                                                </div>
                                            </div>
                                        </CardBody>
                                        <CardBody className="p-4">
                                            <Row>
                                                <Col sm={4}>
                                                    <div className="d-flex align-items-center mt-4 mt-sm-0">
                                                        <div className="flex-shrink-0 me-4">
                                                            <h1 className="fw-normal display-4 mb-0">Aa</h1>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="text-muted mb-2">Font Weight</p>
                                                            <h4 className="mb-0">400</h4>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-4">
                                                            <h1 className="fw-medium display-4 mb-0">Aa</h1>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="text-muted mb-2">Font Weight</p>
                                                            <h4 className="mb-0">500</h4>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="d-flex align-items-center mt-4 mt-sm-0">
                                                        <div className="flex-shrink-0 me-4">
                                                            <h1 className="fw-semibold display-4 mb-0">Aa</h1>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="text-muted mb-2">Font Weight</p>
                                                            <h4 className="mb-0">600</h4>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card className="mt-4">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Typography Heading</h5> 
                                        </div>
                                        <CardBody className="p-4">

                                            <h6 className="card-title">Headings</h6>
                                            <p className="text-muted">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>

                                            <h1 className="mb-3">h1. Bootstrap heading</h1>
                                            
                                            <h2 className="mb-3">h2. Bootstrap heading</h2>
                                            
                                            <h3 className="mb-3">h3. Bootstrap heading</h3>
                                            
                                            <h4 className="mb-3">h4. Bootstrap heading</h4>
                                            
                                            <h5 className="mb-3">h5. Bootstrap heading</h5>
                                            
                                            <h6>h6. Bootstrap heading</h6>
                                        </CardBody>
                                    </Card>
                                    <Card className="mt-4">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Display Heading</h5>  
                                        </div>
                                        <CardBody className="p-4">                        
                                            <h6 className="card-title">Display headings</h6>
                                            <p className="text-muted">Traditional heading elements are designed to work best in the meat of your page content. </p>

                                            <h1 className="display-1">Display 1</h1>
                                            <h1 className="display-2">Display 2</h1>
                                            <h1 className="display-3">Display 3</h1>
                                            <h1 className="display-4">Display 4</h1>
                                            <h1 className="display-5">Display 5</h1>
                                            <h1 className="display-6 mb-0">Display 6</h1>
                                        </CardBody>
                                    </Card>

        </React.Fragment>
    )
}

export default Typography
