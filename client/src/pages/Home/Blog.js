import React from 'react';
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

//Import Blog 
import BlogImage1 from "../../assets/images/blog/img-01.jpg";
import BlogImage2 from "../../assets/images/blog/img-02.jpg";
import BlogImage3 from "../../assets/images/blog/img-03.jpg";

const Blog = () => {
    const blog = [
        {
            id: 1,
            image: BlogImage1 ,          
            userName: "Dirio Walls",          
            date : "01 July, 2021",
            likesCount : "33",
            commnetCount : "08",
            blogTitle : "How apps is the IT world ?",
            blogContent : "The final text is not yet avaibookmark-label. Dummy texts have Internet tend been in use by typesetters since century."         
        },
        {
            id: 2,
            image: BlogImage2 ,          
            userName: "Brandon Carney",          
            date : "25 June, 2021",
            likesCount : 44,
            commnetCount : 25,
            blogTitle : "Smartest Apps for Business ?",
            blogContent : "The final text is not yet avaibookmark-label. Dummy texts have Internet tend been in use by typesetters since century."
        },
        {
            id: 3,
            image: BlogImage3 ,          
            userName: "William Mooneyhan",
            date : "16 March, 2021",
            likesCount : 68,
            commnetCount : 20,
            blogTitle : "Design your apps in your own way ?",
            blogContent : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."
        },
      ];

    return (
        <React.Fragment>
            <section className="section bg-light">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={6}>
                                    <div className="section-title text-center mb-5">
                                        <h3 className="title mb-3">Quick Career Tips</h3>
                                        <p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
                                            right freelancers.</p>
                                    </div>
                                </Col>                                
                            </Row>                            
                            <Row>
                            {(blog || []).map((blogDetails, key) => (                                
                                <Col lg={4} md={6} key={key}>
                                    <div className="blog-box card p-2 mt-3">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img src={blogDetails.image} alt="" className="img-fluid" />
                                            <div className="bg-overlay"></div>
                                            <div className="author">
                                                <p className=" mb-0"><i className="mdi mdi-account text-light"></i><Link to="#"
                                                        className="text-light user">{blogDetails.userName}</Link></p>
                                                <p className="text-light mb-0 date"><i className="mdi mdi-calendar-check"></i> {blogDetails.date}</p>
                                            </div>
                                            <div className="likes">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><Link to="#" className="text-white"><i
                                                                className="mdi mdi-heart-outline me-1"></i> {blogDetails.likesCount}</Link></li>
                                                    <li className="list-inline-item"><Link to="#" className="text-white"><i
                                                                className="mdi mdi-comment-outline me-1"></i> {blogDetails.commnetCount}</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <Link to="/blogdetails" className="primary-link">
                                                <h5 className="fs-17">{blogDetails.blogTitle}</h5>
                                            </Link>
                                            <p className="text-muted">{blogDetails.blogContent}</p>
                                            <Link to="/blogdetails" className="form-text text-primary">Read more <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                                ))}                                
                            </Row>                            
                        </Container>                        
                    </section>
        </React.Fragment>
    )
}

export default Blog;