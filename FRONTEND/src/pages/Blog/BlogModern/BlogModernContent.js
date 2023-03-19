import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row,Col ,Card} from 'reactstrap'

//Import images
import blogImage4 from '../../../assets/images/blog/img-04.jpg';
import blogImage5 from '../../../assets/images/blog/img-05.jpg';
import blogImage6 from '../../../assets/images/blog/img-06.jpg';
import blogImage7 from '../../../assets/images/blog/img-07.jpg';
import blogImage8 from '../../../assets/images/blog/img-08.jpg';
import blogImage9 from '../../../assets/images/blog/img-09.jpg';
import blogImage10 from '../../../assets/images/blog/img-10.jpg';
import blogImage11 from '../../../assets/images/blog/img-11.jpg';
import blogImage12 from '../../../assets/images/blog/img-12.jpg';
import blogImage13 from '../../../assets/images/blog/img-13.jpg';

const BlogModernContent = () => {
    const blogModern = [
        {
            id:1,
            blogImage : blogImage8,
            blogTitle : "How to become a best sale marketer in a year!",
            blogAuther : "Harvey Bird",
            blogTime : "3 hrs ago"
        },
        {
            id:2,
            blogImage : blogImage9,
            blogTitle : "A day in the of a professional fashion designer",
            blogAuther : "Leon Davey",
            blogTime : "2 days ago"
        },
        {
            id:3,
            blogImage : blogImage10,
            blogTitle : "How To Increase Trade Show Traffic",
            blogAuther : "Dominic Potter",
            blogTime : "5 days ago"
        },

    ]
    return (
        <React.Fragment>
            <section className="section">
                        <Container >
                            <Row >
                                <Col lg={8} className="mt-4">
                                    <Card className="card blog-modern-box overflow-hidden">
                                        <img src={blogImage4} alt="" className="img-fluid" />
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">How to get creative in your work ?</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">Rebecca Swartz</Link> - 5 mins ago</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={4} className="mt-4">
                                    <Card className="blog-modern-box overflow-hidden border-0">
                                        <img src={blogImage6} alt="" className="img-fluid" />
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">Smartest Applications for Business</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">Olivia Murphy</Link> - 30 mins ago</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={5} className="mt-4">
                                    <Card className="blog-modern-box overflow-hidden border-0">
                                        <img src={blogImage5} alt="" className="img-fluid"/>
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">How apps is changing the IT world</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">Adam Gibson</Link> - 3 mins ago</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={7} className="mt-4">
                                    <Card className="card blog-modern-box overflow-hidden border-0">
                                        <img src={blogImage7} alt="" className="img-fluid" />
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">Design your apps in your own way</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">Sienna Rogers</Link> - 1 hrs ago</p>
                                        </div>
                                    </Card>
                                </Col>
                                {(blogModern).map((blogModernDetails,key)=>(
                                <Col lg={4} className="mt-4" key={key}>
                                    <Card className="card blog-modern-box overflow-hidden border-0">
                                        <img src={blogModernDetails.blogImage} alt="" className="img-fluid" />
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">{blogModernDetails.blogTitle}</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">{blogModernDetails.blogAuther}</Link> - {blogModernDetails.blogTime}</p>
                                        </div>
                                    </Card>
                                </Col>
                                ))}
                                <Col lg={12} className="mt-4">
                                    <Card className="blog-modern-box overflow-hidden border-0">
                                        <img src={blogImage11} alt="" className="img-fluid" />
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">Stack designer Olivia Murphy offers freelancing advice</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">Toby Lees</Link> - 1 months ago</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={6} className="mt-4">
                                    <Card className="blog-modern-box overflow-hidden border-0">
                                        <img src={blogImage12} alt="" className="" />
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">Manage white space in responsive layouts ?</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">Kiera Finch</Link> - 1 years ago</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={6} className="mt-4">
                                    <Card className="blog-modern-box overflow-hidden border-0">
                                        <img src={blogImage13} alt="" className="" />
                                        <div className="bg-overlay"></div>
                                        <div className="card-img-overlay">
                                            <Link to="/blogdetails" className="text-white"><h5 className="card-title">Do traditional landing pages work for Saas startups?</h5></Link>
                                            <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50 fw-bold">Alice Mellor</Link> - 3 years ago</p>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="mt-5">
                                    <nav aria-label="Page navigation example">
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
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    
        </React.Fragment>
    )
}

export default BlogModernContent
