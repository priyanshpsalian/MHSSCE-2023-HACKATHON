import React from 'react';
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const PricingPage = () => {
    const pricingpage = [
        {
            id: 1,
            pricingIcon: "uim-telegram-alt",
            pricingName: "Starter",
            pricingPrice: "$35.99",
            pricingsuccessclass: "btn-soft-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Unlimited file recovery"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Professional reports"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Sell on marketplaces"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Unlimited Builds"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Job displayed for 30 days"
                },
                {
                    id: 6,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Premium Support 24/7"
                },
            ]

        },
        {
            id: 2,
            pricingIcon: "uim-rocket",
            pricingName: "Professional",
            pricingPrice: "$49.99",
            pricingsuccessclass: "btn-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Unlimited file recovery"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Professional reports"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Sell on marketplaces"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Unlimited Builds"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Job displayed for 30 days"
                },
                {
                    id: 6,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Premium Support 24/7"
                },
            ]

        },
        {
            id: 3,
            pricingIcon: "uim-bag ",
            pricingName: "Enterprice",
            pricingPrice: "$59.99",
            pricingsuccessclass: "btn-soft-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Unlimited file recovery"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Professional reports"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Sell on marketplaces"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Unlimited Builds"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Job displayed for 30 days"
                },
                {
                    id: 6,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Premium Support 24/7"
                },
            ]

        }
    ];
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <span className="badge bg-soft-warning  fs-15 mb-2">Choose Your Plan</span>
                                <h3>Save up to 15%</h3>
                                <p className="text-muted">The faster, most seamless CI & development you'll find anywhere.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {(pricingpage).map((pricingpageDetails, key) => (
                            <Col lg={4} md={6} className="mt-5 pt-2" key={key}>
                                <Card className="pricing-box bg-light">
                                    <CardBody className="p-4 px-lg-5">
                                        <div className="pricing-icon bg-light rounded-circle icons-md">
                                            <Icon icon={pricingpageDetails.pricingIcon} className="text-primary" />
                                        </div>
                                        <div className="pricing-name text-center mt-4 pt-2">
                                            <h4 className="fs-18">{pricingpageDetails.pricingName}</h4>
                                        </div>
                                        <div className="pricing-price text-center mt-4">
                                            <h2 className="fw-semibold">{pricingpageDetails.pricingPrice}<small className="fs-16">/mo</small></h2>
                                        </div>
                                        <ul className="list-unstyled pricing-details text-muted mt-4">
                                            {(pricingpageDetails.pricingDetails || []).map((pricingpageInnerDetails, key) => (
                                                <li key={key} className={pricingpageInnerDetails.pricingInnerClassName}><i className={pricingpageInnerDetails.pricingInnerIcon}></i> {pricingpageInnerDetails.pricingInnerText}</li>
                                            ))}
                                        </ul>
                                        <div className="text-center mt-4 mb-2">
                                            <Link to="#" className={`btn ${pricingpageDetails.pricingsuccessclass} rounded-pill`}>Purchase Now <i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default PricingPage;
