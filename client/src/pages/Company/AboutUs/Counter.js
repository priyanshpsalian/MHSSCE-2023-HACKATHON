
import React from 'react';
import { Container, Row, Col } from "reactstrap";
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <React.Fragment>
            <section className="section bg-light">
                <Container>
                    <Row >
                        <Col lg={3} md={6}>
                            <div className="counter-box mt-3">
                                <div className="counters counter_custom text-center">
                                    <CountUp end={10000}
                                        duration={1}
                                        className="counter mb-0">
                                    </CountUp>
                                    <h6 className="fs-16 mt-3 ">Available Jobs</h6>
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
                                        decimals={2}
                                        duration={1}
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
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Counter;
