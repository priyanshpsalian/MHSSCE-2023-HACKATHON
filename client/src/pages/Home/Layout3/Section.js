import React from 'react';
import {Col, Container, Row,Form} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay} from "swiper";

import homeImage2 from "../../../assets/images/home/img-02.png";
import homeImage3 from "../../../assets/images/home/img-03.png";
import homeImage4 from "../../../assets/images/home/img-04.png";
import JobSearch from '../SubSection/JobSearch';
import CountryOptions from '../SubSection/CountryOptions';


const Section = () => {
    SwiperCore.use([Autoplay]);
    return (
        <React.Fragment>
                        <section className="bg-home3" id="home">
                        <Container >
                            <Row className="align-items-center">
                                <Col lg={7}>
                                    <div className="mb-4 pb-3 me-lg-5">
                                        <h6 className="sub-title">We have 150,000+ live jobs</h6>
                                        <h1 className="display-5 fw-semibold mb-3">Thousand of Jobs is Waiting for you</h1>
                                        <p className="fs-18 text-muted mb-0">Find jobs, create trackable resumes and enrich your applications.Carefully crafted after analyzing the needs of different industries.</p>
                                    </div>
                                    <Form action="#">
                                        <div className="registration-form">
                                            <Row className="g-0">
                                                <Col md={4}>
                                                    <div className="filter-search-form filter-border mt-3 mt-md-0">
                                                        <i className="uil uil-briefcase-alt"></i>
                                                        <JobSearch/>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="filter-search-form mt-3 mt-md-0">
                                                        <i className="uil uil-map-marker"></i>
                                                        <select className="form-select selectForm__inner" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                                            <CountryOptions/>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="mt-3 mt-md-0 h-100">
                                                        <button className="btn btn-primary submit-btn w-100 h-100" type="submit"><i className="uil uil-search me-1"></i> Find Job</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                                </Col>
                                
                                <Col lg={5}>
                                    <div className="mt-5 mt-lg-0 ms-xl-5">
                                        <div className="quote-icon">
                                            <i className="mdi mdi-format-quote-open icon"></i>
                                            <i className="mdi mdi-format-quote-open icon-2 text-primary"></i>
                                        </div>
                                        <Swiper className="homeslider"
                                        loop={true}
                                        slidesPerView={1.68}
                                        spaceBetween={20}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        pagination={{ clickable: true }}
                                        >
                                            
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="home-slide-box text-center">
                                                        <img src={homeImage2} alt="" className="img-fluid rounded-3"/>
                                                        <div className="bg-overlay"></div>
                                                        <div className="home-slide-content p-4">
                                                            <h2 className="slide-para fw-normal text-white">" It looks perfect on all major browsers, tablets,
                                                                and mobile devices."</h2>
                                                            <h6 className="text-white">- MichaeL Drake</h6>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="home-slide-box text-center">
                                                        <img src={homeImage3} alt="" className="img-fluid rounded-3"/>
                                                        <div className="bg-overlay"></div>
                                                        <div className="home-slide-content p-4">
                                                            <h2 className="slide-para fw-normal text-white">" This template is well organized and very easy to
                                                                customize. "</h2>
                                                            <h6 className="text-white">- Charles Dickens</h6>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="home-slide-box text-center">
                                                        <img src={homeImage4} alt="" className="img-fluid rounded-3"/>
                                                        <div className="bg-overlay"></div>
                                                        <div className="home-slide-content p-4">
                                                            <h2 className="slide-para fw-normal text-white">" All your client websites if you are an agency or
                                                                freelancer. "</h2>
                                                            <h6 className="text-white">- Rebecca Swartz</h6>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </Col>
                            </Row>                            
                        </Container>                        
                    </section>
        </React.Fragment>
    )
}

export default Section
