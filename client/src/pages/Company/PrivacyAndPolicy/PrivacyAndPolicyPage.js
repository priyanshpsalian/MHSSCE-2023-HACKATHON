import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const PrivacyAndPolicyPage = () => {
    const privacyandpolicyPage = [
        {
            id: 1,
            policyTitle: "Use for Jobcy",
            policyRules: [
                {
                    id: 1,
                    policyInnerRule: " At Jobcy, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Jobcy and how we use If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <b className=`text-danger`>Jobcytechnologypvt.ltd.com"
                },
                {
                    id: 2,
                    policyInnerRule: " If you have additional questions or require more information about our Privacy Policy."
                },
                {
                    id: 3,
                    policyInnerRule: " This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Jobcy. This policy is not applicable to any information collected offline or via channels other than this website."
                },
                {
                    id: 4,
                    policyInnerRule: " Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity to our website with regards to the information that they shared and/or collect in Jobcy. This policy is not applicable to any information collected offline or via channels other than this website."
                }
            ]
        },
        {
            id: 2,
            policyTitle: "We use your information to :",
            policyRules: [
                {
                    id: 1,
                    policyInnerRule: "  Digital Marketing Solutions for Tomorrow"
                },
                {
                    id: 2,
                    policyInnerRule: " Our Talented & Experienced Marketing Agency"
                },
                {
                    id: 3,
                    policyInnerRule: " It is said that song composers of the past used texts."
                },
                {
                    id: 4,
                    policyInnerRule: " Create your own skin to match your brand"
                }
            ]
        },
        {
            id: 3,
            policyTitle: "Privacy and copyright protection",
            policyRules: [
                {
                    id: 1,
                    policyInnerRule: "  There is now an <b className=text-danger>\"abundance</b> of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories."
                },
                {
                    id: 2,
                    policyInnerRule: " It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text."
                }
            ]
        }
    ];
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        {(privacyandpolicyPage).map((privacyandpolicyDetails, key) => (
                            <Col lg={12} key={key}>
                                <h5 className="mb-4">{privacyandpolicyDetails.policyTitle}</h5>
                                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                                    {(privacyandpolicyDetails.policyRules).map((privacyandpolicyInner, key) => (
                                        <li key={key}>{privacyandpolicyInner.policyInnerRule}</li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                        <div className="text-end">
                            <Link to="#" className="btn btn-primary"><i className="uil uil-print"></i> Print</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default PrivacyAndPolicyPage;
