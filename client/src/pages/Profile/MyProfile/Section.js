import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Section = () => {
    return (
        <React.Fragment>
            <section className="page-title-box">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">Job Grid</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page"> My Profile </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="#FFFFFF" fillOpacity="1"
                            d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Section;
