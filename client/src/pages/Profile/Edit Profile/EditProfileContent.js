import React from 'react';
import { Form } from 'react-bootstrap';
import { Col, Container, Row, Input, Label } from 'reactstrap';
import { Calendar } from "react-modern-calendar-datepicker";
import { useState } from 'react';


//Import Images
// import contactImage from "../../assets/images/contact.png";

const ContactContent = () => {
    const defaultValue = {
        year: 2023,
        month: 3,
        day: 19
    }
    const [selectedDay, setSelectedDay] = useState(defaultValue);

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className=" mt-5">
                        <Col lg={6}>
                            <div className="section-title m-4 mt-lg-0">
                                <h3 className="title">Set your preference</h3>
                                <p className="text-muted">Get jobs according to your desired requirements, set your goal here. </p>
                                <Form method="post" className="contact-form mt-4" name="myForm" id="myForm">
                                    <span id="error-msg"></span>
                                    <Row>

                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label" style={{ fontWeight: "bold" }}>Your Email</Label>
                                                <Input type="email" className="form-control" id="emaiol" name="email"
                                                    placeholder="Enter your Email" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label" style={{ fontWeight: "bold" }}>Role</Label>
                                                <Input type="text" className="form-control" name="subject"
                                                    placeholder="Enter your desired Role" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label" style={{ fontWeight: "bold" }}>Title</Label>
                                                <Input type="email" className="form-control" id="emaiol" name="email"
                                                    placeholder="Enter Title" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label" style={{ fontWeight: "bold" }}>Role</Label>
                                                <Input type="text" className="form-control" name="subject"
                                                    placeholder="Enter your desired Role" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label" style={{ fontWeight: "bold" }}>Categories</Label>
                                                <div className="selection-widget mt-2 mt-lg-0">
                                                    <select className="form-select" data-trigger name="choices-candidate-page" id="choices-candidate-page" aria-label="Default select example">
                                                        <option value="df">All</option>
                                                        <option value="ne">Web Developer</option>
                                                        <option value="ne">12 per Page</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label" style={{ fontWeight: "bold" }}>Role</Label>
                                                <Input type="text" className="form-control" name="subject"
                                                    placeholder="Enter your desired Role" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">Minimum Salary</Label>
                                                <Input type="email" className="form-control" id="emaiol" name="email"
                                                    placeholder="Enter your minimum salary expected" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label">Availability</Label>
                                                <Input type="date" className="form-control" name="subject"
                                                    placeholder="Enter " />
                                            </div>
                                        </Col>
                                        {/* <Col lg={12}>
                                                    <div className="mb-3">
                                                        <Label htmlFor="meassageInput" className="form-label">Your Message</Label>
                                                        <textarea className="form-control"  placeholder="Enter your message" name="comments" rows="3"></textarea>
                                                    </div>
                                                </Col> */}
                                        {/* <div className="my-2">
                                            <Calendar
                                                value={selectedDay}
                                                colorPrimary="#422afb" // added this
                                                // onChange={(e) => {
                                                //     console.log(e);
                                                //     setDetails({
                                                //         ...details,
                                                //         expiryDate: {
                                                //             year: e.year,
                                                //             month: e.month,
                                                //             day: e.day,
                                                //         },
                                                //     });
                                                //     setSelectedDay({
                                                //         year: e.year,
                                                //         month: e.month,
                                                //         day: e.day,
                                                //     });
                                                // }}
                                                shouldHighlightWeekends
                                            />
                                        </div> */}
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="section-title m-4 mt-lg-0">
                                <h3 className="title">Set your preference</h3>
                                <p className="text-muted">Get jobs according to your desired requirements, set your goal here. </p>
                                <Form method="post" className="contact-form mt-4" name="myForm" id="myForm">
                                    <span id="error-msg"></span>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="nameInput" className="form-label">Position</Label>
                                                <Input type="text" name="name" id="name" className="form-control"
                                                    placeholder="Enter your desired position" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">Designation</Label>
                                                <Input type="email" className="form-control" id="emaiol" name="email"
                                                    placeholder="Enter your desired Designation" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label">Role</Label>
                                                <Input type="text" className="form-control" name="subject"
                                                    placeholder="Enter your desired Role" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">Minimum Salary</Label>
                                                <Input type="email" className="form-control" id="emaiol" name="email"
                                                    placeholder="Enter your minimum salary expected" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subjectInput" className="form-label">Availability</Label>
                                                <Input type="date" className="form-control" name="subject"
                                                    placeholder="Enter " />
                                            </div>
                                        </Col>
                                        {/* <Col lg={12}>
                                                    <div className="mb-3">
                                                        <Label htmlFor="meassageInput" className="form-label">Your Message</Label>
                                                        <textarea className="form-control"  placeholder="Enter your message" name="comments" rows="3"></textarea>
                                                    </div>
                                                </Col> */}
                                        {/* <div className="my-2">
                                            <Calendar
                                                value={selectedDay}
                                                colorPrimary="#422afb" // added this
                                                // onChange={(e) => {
                                                //     console.log(e);
                                                //     setDetails({
                                                //         ...details,
                                                //         expiryDate: {
                                                //             year: e.year,
                                                //             month: e.month,
                                                //             day: e.day,
                                                //         },
                                                //     });
                                                //     setSelectedDay({
                                                //         year: e.year,
                                                //         month: e.month,
                                                //         day: e.day,
                                                //     });
                                                // }}
                                                shouldHighlightWeekends
                                            />
                                        </div> */}
                                    </Row>
                                    <div className="text-end mt-3">
                                        <button type="button" id="submit" name="submit" className="btn btn-primary"> Set Requirements <i className="uil uil-message ms-1"></i></button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        {/* <Col lg={5} className="ms-auto order-first order-lg-last">
                            <div className="text-center">
                                <img src={contactImage} alt="" className="img-fluid" />
                            </div>
                            <div className="mt-4 pt-3">
                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-primary">
                                        <i className="uil uil-map-marker"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0">245 Clinton StreetLittle Rock, Mumbai, India</p>
                                    </div>
                                </div>
                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-primary">
                                        <i className="uil uil-envelope"></i>
                                    </div>
                                    
                                </div>
                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-primary">
                                        <i className="uil uil-phone-alt"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0">(+91) 8655 011 052</p>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
            {/* <div className="map">
                        <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509157.364974411!2d-123.79641389801948!3d37.193115265681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1628684675253!5m2!1sen!2sin" height="350" style={{border:`0` ,width: `100%`}} allowFullScreen="" loading="lazy"></iframe>
                    </div> */}
        </React.Fragment>
    )
}

export default ContactContent
