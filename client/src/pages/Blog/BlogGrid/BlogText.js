import React from 'react';
import { Col, Row,Card,CardBody } from 'reactstrap';
import {Link } from 'react-router-dom';

import blogImage4 from '../../../assets/images/blog/img-04.jpg';
import blogImage5 from '../../../assets/images/blog/img-05.jpg';
import blogImage6 from '../../../assets/images/blog/img-06.jpg';
import blogImage7 from '../../../assets/images/blog/img-07.jpg';
import blogImage8 from '../../../assets/images/blog/img-08.jpg';
import blogImage9 from '../../../assets/images/blog/img-09.jpg';

const BlogText = () => {
    const blogText =[        
        {
            id:1,
            blogImage :blogImage4, 
            blogAuther: "Alice Mellor",
            blogDate: "Aug 08, 2022", 
            blogCount : 32,
            blogTitle : "Software Engineer", 
            blogContent : "I can do everything on my own schedule. From picking out interview time slots to selecting only the companies I want to interview with, this is what recruiting should look like."

        },
        {
            id:2,
            blogImage :blogImage5, 
            blogAuther: "Kiera Finch",
            blogDate: "July 23, 2022", 
            blogCount : 47,
            blogTitle : "Senior UX Designer", 
            blogContent : "I've never felt so taken care of by a recruiter in my life. Saying my Talent Advocate goes above and beyond is an understatement. She clearly loves what she does, and that devotion is absolutely contagious."

        },
        {
            id:3,
            blogImage :blogImage6, 
            blogAuther: "Toby Lees",
            blogDate: "July 11, 2022", 
            blogCount : 18,
            blogTitle : "Mechanical Engineer", 
            blogContent : "Finding a new job is tedious and stressful. Working with Hired meant multiple companies that were a good fit were looking to hire me."

        },
        {
            id:4,
            blogImage :blogImage7, 
            blogAuther: "Dominic Potter",
            blogDate: "June 19, 2021", 
            blogCount : 75,
            blogTitle : "Software Engineer", 
            blogContent : "With Hired, companies were highly responsive and moved through the process very quickly. I never had to wait more than a couple days to hear back from anyone."

        },
        {
            id:5,
            blogImage :blogImage8, 
            blogAuther: "Leon Davey",
            blogDate: "June 04, 2022", 
            blogCount : 10,
            blogTitle : "Junior React Developer", 
            blogContent : "Hired is the absolute best way to find a tech or design job. Having a person dedicated to you is very helpful. My Talent Advocate helped me through every step of the process, including negotiating offers and deciding which offer was right for me."

        },
        {
            id:6,
            blogImage :blogImage9, 
            blogAuther: "Harvey Bird",
            blogDate: "Feb 28, 2021", 
            blogCount : 58,
            blogTitle : "IT professional", 
            blogContent : "I've never felt so taken care of by a recruiter in my life. Saying my Talent Advocate goes above and beyond is an understatement. She clearly loves what she does, and that devotion is absolutely contagious."

        }       
    ]
    const blogVideo =[
        // {
        //     id:1,
        //     blogLink :"https://www.youtube.com/embed/1y_kfWUCFDQ", 
        //     blogAuther: "Harvey Bird",
        //     blogDate: "Feb 21, 2021", 
        //     blogCount : 110,
        //     blogTitle : "How to become a best sale marketer in a year!", 
        //     blogContent : "Intrinsically incubate intuitive opportunities and real-time potentialities Appropriately communicate one-to-one technology."

        // },
        // {
        //     id:2,
        //     blogLink :"https://www.youtube.com/embed/1y_kfWUCFDQ", 
        //     blogAuther: "Harvey Bird",
        //     blogDate: "Feb 09, 2021", 
        //     blogCount : 244,
        //     blogTitle : "A day in the of a professional fashion designer", 
        //     blogContent : "Intrinsically incubate intuitive opportunities and real-time potentialities Appropriately communicate one-to-one technology."

        // }
    ]

    return (
                            <React.Fragment>
                                <Row>
                                    {(blogText).map((blogTextDetails, key) => (   
                                            <Col lg={6} className="mb-4" key={key}>
                                                <Card className="blog-grid-box p-2">
                                                    <img src={blogTextDetails.blogImage} alt="" className="img-fluid" />
                                                    <CardBody>
                                                        <ul className="list-inline d-flex justify-content-between mb-3">
                                                            <li className="list-inline-item">
                                                                <p className="text-muted mb-0"><Link to="/blogauther" className="text-muted fw-medium">{blogTextDetails.blogAuther}</Link> - {blogTextDetails.blogDate}</p>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <p className="text-muted mb-0"><i className="mdi mdi-eye"></i> {blogTextDetails.blogCount}</p>
                                                            </li>
                                                        </ul>
                                                        <Link to="/blogdetails" className="primary-link"><h6 className="fs-17">{blogTextDetails.blogTitle}</h6></Link>
                                                        <p className="text-muted">{blogTextDetails.blogContent}</p>
                                                        <div>
                                                            <Link to="/blog-details" className="form-text text-primary">Read More <i className="uil uil-angle-right-b"></i></Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        ))}

                                        {(blogVideo).map((blogVideoDetails, key) => (
                                        <Col lg={6} mb={4} key={key}>
                                                <Card className="blog-grid-box p-2">
                                                    <div className="ratio ratio-16x9">  <iframe src={blogVideoDetails.blogLink} title="YouTube video" allowFullScreen></iframe>  </div>
                                                    <CardBody >
                                                        <ul className="list-inline d-flex justify-content-between mb-3">
                                                            <li className="list-inline-item">
                                                                <p className="text-muted mb-0"><Link to="/blogauther" className="text-muted fw-medium">{blogVideoDetails.blogAuther}</Link> - {blogVideoDetails.blogDate}</p>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <p className="text-muted mb-0"><i className="mdi mdi-eye"></i> {blogVideoDetails.blogCount}</p>
                                                            </li>
                                                        </ul>
                                                        <Link to="/blogdetails" className="primary-link"><h6 className="fs-17">{blogVideoDetails.blogTitle}</h6></Link>
                                                        <p className="text-muted">{blogVideoDetails.blogContent}</p>
                                                        <div>
                                                            <Link to="/blogdetails" className="form-text text-primary">Read More <i className="uil uil-angle-right-b"></i></Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        ))}
                                </Row> 
        </React.Fragment>
    )
}

export default BlogText
