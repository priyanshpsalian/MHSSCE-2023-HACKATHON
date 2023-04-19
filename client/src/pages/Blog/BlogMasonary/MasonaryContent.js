import React from 'react';
import { Col, Container, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-component';

//Pagination 
import Pagination from '../../Jobs/JobList2/Pagination';

//Import BlogImage 
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage2 from "../../../assets/images/blog/img-02.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";
import blogImage6 from "../../../assets/images/blog/img-06.jpg";
import blogImage7 from "../../../assets/images/blog/img-07.jpg";
import blogImage8 from "../../../assets/images/blog/img-08.jpg";
import blogImage9 from "../../../assets/images/blog/img-09.jpg";
import blogImage10 from "../../../assets/images/blog/img-10.jpg";

//Import userImage
import userImage1 from "../../../assets/images/user/img-01.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage3 from "../../../assets/images/user/img-03.jpg";
import userImage4 from "../../../assets/images/user/img-04.jpg";
import userImage5 from "../../../assets/images/user/img-05.jpg";
import userImage6 from "../../../assets/images/user/img-06.jpg";
import userImage7 from "../../../assets/images/user/img-07.jpg";
import userImage8 from "../../../assets/images/user/img-08.jpg";
import userImage9 from "../../../assets/images/user/img-09.jpg";
// import { CardBody } from 'reactstrap';

const MasonaryContent = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Masonry className="row">
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage1} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Creativity</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>What planning process needs</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage1} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Rebecca Swartz</h6></Link>
                                            <p className="text-muted fs-14 mb-0">Project Manager</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage6} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Product</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>How to get creative in your work?</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage2} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Gabriel Palmer </h6></Link>
                                            <p className="text-muted fs-14 mb-0">Education Training</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage2} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Digital</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>Design your apps in your own way</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage3} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Betty Richards </h6></Link>
                                            <p className="text-muted fs-14 mb-0">Executive, HR Operations</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage7} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Business</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>Do traditional landing pages work for Saas startups?</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage4} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">MichaeL Drake </h6></Link>
                                            <p className="text-muted fs-14 mb-0">Full Stack Engineer</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage8} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Design</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>Smartest Applications for Business</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage5} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Olivia Murphy</h6></Link>
                                            <p className="text-muted fs-14 mb-0">Founder & CEO</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="ratio ratio-16x9">  <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>  </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Digital, Business</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>A day in the of a professional fashion designer</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage6} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Brooke Hayes</h6></Link>
                                            <p className="text-muted fs-14 mb-0">Developer</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage3} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Business</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>A day in the of a professional fashion designer</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage7} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Jeffrey Montgomery</h6></Link>
                                            <p className="text-muted fs-14 mb-0">Creative Designer</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage9} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Product</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>A day in the of a professional fashion designer</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage8} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Cerys Woods</h6></Link>
                                            <p className="text-muted fs-14 mb-0">Manager</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="blog-masonry-box shadow overflow-hidden border-0 p-2">
                                <div className="overflow-hidden">
                                    <img src={blogImage10} alt="" className="img-fluid blog-img" />
                                </div>
                                <CardBody className="p-4">
                                    <p className="text-muted mb-2"><b>Fashion, Product</b> <i className="mdi mdi-circle-medium"></i> Aug 10, 2021</p>
                                    <Link to="/blogdetails" className="primary-link"><h5>A day in the of a professional fashion designer</h5></Link>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={userImage9} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-1">Charles Dickens</h6></Link>
                                            <p className="text-muted fs-14 mb-0">Creative Designer</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Masonry>

                    <Pagination />

                </Container>
            </section>


        </React.Fragment>
    );
};

export default MasonaryContent;
