import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

//Import Blog images
import blogImage1 from '../../../assets/images/blog/img-01.jpg';
import blogImage2 from '../../../assets/images/blog/img-02.jpg';
import blogImage3 from '../../../assets/images/blog/img-03.jpg';



const Cards = () => {
    return (
        <React.Fragment>
                            <Card className="card mt-4" id="cards">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Card </h5> 
                                        </div>
                                        <CardBody className="p-4">
                                            <Row>
                                                <Col md={6}>
                                                    <Card className="mt-4">
                                                        <img className="card-img-top img-fluid" src={blogImage1} alt="Card cap" />
                                                        <CardBody>
                                                            <h5 className="card-title mb-2">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md={6}>
                                                <Card className="mt-4">
                                                        <img className="card-img-top img-fluid" src={blogImage3} alt="Card cap" />
                                                        <CardBody>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md={6}>
                                                <Card className="mt-4">
                                                        <img className="card-img-top img-fluid" src={blogImage2} alt="Card cap" />
                                                        <CardBody>
                                                            <h5 className="card-title mb-2">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="card-link text-primary">Card link</Link>
                                                            <Link to="#" className="card-link text-primary">Another link</Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md={6}>
                                                <Card className="mt-4">
                                                        <CardBody>
                                                            <h5 className="card-title mb-2">Card title</h5>
                                                            <h6 className="card-subtitle fs-14 text-muted">Support card subtitle</h6>
                                                            </CardBody>
                                                        <img className="img-fluid" src={blogImage1} alt="Card cap" />
                                                        <CardBody>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="card-link text-primary">Card link</Link>
                                                            <Link to="#" className="card-link text-primary">Another link</Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>                                                
                                            </Row>
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default Cards
