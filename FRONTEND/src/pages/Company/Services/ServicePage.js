import React from 'react';
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const ServicePage = () => {
    const servicePage = [
        {
            id: 1,
            serviceIcon: "uim-object-ungroup",
            serviceName: "Manage Job Ads",
            serviceText: "We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds."
        },
        {
            id: 2,
            serviceIcon: "uim-telegram-alt",
            serviceName: "Temp Search",
            serviceText: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today."
        },
        {
            id: 3,
            serviceIcon: "uim-airplay",
            serviceName: "Display Jobs",
            serviceText: "Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology."
        },
        {
            id: 4,
            serviceIcon: "uim-rocket",
            serviceName: "For Agencies",
            serviceText: "At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called."
        },
        {
            id: 5,
            serviceIcon: "uim-history",
            serviceName: "Quick Support",
            serviceText: "Designers have a lot of tools to make a story more intersting. You can align your image to the leftcenter with a caption."
        },
        {
            id: 6,
            serviceIcon: "uim-bookmark",
            serviceName: "Bookmark Jobs",
            serviceText: "Becomes an interactive story that can engage users. Designers have a lot of tools to make a story more intersting."
        },
        {
            id: 7,
            serviceIcon: "uim-layers-alt",
            serviceName: "Creative Design",
            serviceText: "A business consulting agency is involved in the planning, implementation, and education of businesses. We work directly."
        },
        {
            id: 8,
            serviceIcon: "uim-anchor",
            serviceName: "Stratagy & Research",
            serviceText: "The most important aspect of beauty was, therefore, an inherent part of an object, rather than something."
        },
        {
            id: 9,
            serviceIcon: "uim-graph-bar",
            serviceName: "Real-time Analytics",
            serviceText: "This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism."
        },

    ];
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="section-title text-center">
                                <h3 className="title mb-3">Providing our trusted <span className="text-warning">Services</span></h3>
                                <p className="text-muted">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {(servicePage).map((servicePageDetails, key) => (
                            <Col lg={4} md={6} key={key}>
                                <Card className="service-box mt-4 border-0">
                                    <CardBody className="p-4">
                                        <div className="service-icon icons-md">
                                            <Icon icom={servicePageDetails.serviceIcon} color="#02af74" />
                                        </div>
                                        <div className="mt-4">
                                            <h5>{servicePageDetails.serviceName}</h5>
                                            <p className="text-muted">{servicePageDetails.serviceText}</p>
                                        </div>
                                        <div className="learn-more">
                                            <Link to="#" className="form-text text-primary">Learn More <i className="uil uil-angle-right-b"></i></Link>
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

export default ServicePage;
