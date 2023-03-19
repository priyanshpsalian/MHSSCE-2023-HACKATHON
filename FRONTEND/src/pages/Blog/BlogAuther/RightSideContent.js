import React from 'react';
import { Col } from 'reactstrap';

import blogimage12 from '../../../assets/images/blog/img-12.jpg';
import blogimage11 from '../../../assets/images/blog/img-11.jpg';
import blogimage13 from '../../../assets/images/blog/img-13.jpg';
import blogimage14 from '../../../assets/images/blog/img-14.jpg';
import { Link } from 'react-router-dom';

const RightSideContent = () => {
    const blogContent = [
        {
            id: 1,
            badgeName: "Business",
            blogTitle: "Smartest Applications for Business ?",
            blogDate: "Sep 06, 2021",
            blogImage: blogimage12,
            blogContent: "Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called."
        },
        {
            id: 2,
            badgeName: "Fashion",
            blogTitle: "How to get creative in your work ?",
            blogDate: "Aug 24, 2021",
            blogImage: blogimage11,
            blogContent: "Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called."
        },
        {
            id: 3,
            badgeName: "Design",
            blogTitle: "How apps is changing the IT world",
            blogDate: "Aug 17, 2021",
            blogImage: blogimage13,
            blogContent: "Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called."
        },
        {
            id: 4,
            badgeName: "Fashion",
            blogTitle: "How to get creative in your work ?",
            blogDate: "July 22, 2020",
            blogImage: blogimage14,
            blogContent: "Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called."
        }
    ];
    return (
        <React.Fragment>
            <Col lg={8}>
                <div className="ms-lg-4 mt-4 mt-lg-0">
                    {(blogContent).map((blogContentDetails, key) => (
                        <div className="blog-post mb-5" key={key}>
                            <div className="text-center">
                                <span className="badge bg-soft-info mb-2">{blogContentDetails.badgeName}</span>
                                <Link to="/blogdetails" className="primary-link"><h5 className="text-center mb-1">{blogContentDetails.blogTitle}</h5></Link>
                                <p className="text-muted">{blogContentDetails.blogDate}</p>
                            </div>
                            <div className="mb-3">
                                <Link to="/blogdetails"><img src={blogContentDetails.blogImage} alt="" className="img-fluid rounded-3" /></Link>
                            </div>
                            <p className="text-muted mb-2">{blogContentDetails.blogContent}</p>
                            <Link to="/blogdetails" className="text-primary">Read More <i className="uil uil-angle-right-b"></i></Link>
                        </div>
                    ))}

                    <nav aria-label="Page navigation example" className="mt-5">
                        <ul className="pagination job-pagination mb-0 justify-content-center">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1">
                                    <i className="mdi mdi-chevron-double-left fs-15"></i>
                                </Link>
                            </li>
                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    <i className="mdi mdi-chevron-double-right fs-15"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Col>
        </React.Fragment>
    );
};

export default RightSideContent;
