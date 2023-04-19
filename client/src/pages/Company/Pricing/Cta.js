import React from 'react';
import { Container, Row, Col} from "reactstrap";
import CountUp from 'react-countup';

const Cta = () => {
    
    return (
        <React.Fragment>
             <section className="section">
                        <Container>
                            <div className="pricing-counter text-white">
                                <Row>
                                    <Col lg={3} md={6}>
                                        <div className="counter-box mt-3">
                                            <div className="counters counter_custom text-center">
                                                <CountUp end={15000}
                                                duration={1}
                                                className="counter counter_custom mb-0">                                   
                                                </CountUp>
                                                <h6 className="fs-16 mt-3">Available Jobs</h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="counter-box mt-3">
                                            <div className="counters counter_custom text-center">
                                                <CountUp end={7500}
                                                duration={1}
                                                className="counter mb-0">                                   
                                                </CountUp>
                                                <h6 className="fs-16 mt-3">Applications</h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="counter-box mt-3">
                                            <div className="counters counter_custom text-center">
                                                <CountUp end={8.85}
                                                duration={1}
                                                decimals={2}
                                                className="counter mb-0">                                   
                                                </CountUp>
                                                <h6 className="fs-16 mt-3">Positive Feedback</h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="counter-box mt-3">
                                            <div className="counters counter_custom text-center">
                                                <CountUp end={9875}
                                                duration={1}
                                                className="counter mb-0">                                   
                                                </CountUp>
                                                <h6 className="fs-16 mt-3">Members</h6>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </section>
                    
        </React.Fragment>
    )
}

export default Cta
