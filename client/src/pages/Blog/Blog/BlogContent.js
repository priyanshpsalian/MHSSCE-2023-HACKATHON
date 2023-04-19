import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Col,Row } from 'reactstrap';

//User Images
import userImage1 from "../../../assets/images/user/img-01.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage3 from "../../../assets/images/user/img-03.jpg";

//Blog Images
import blogImage4 from "../../../assets/images/blog/img-04.jpg";
import blogImage5 from "../../../assets/images/blog/img-05.jpg";
import blogImage6 from "../../../assets/images/blog/img-06.jpg";
import blogImage7 from "../../../assets/images/blog/img-07.jpg";
import blogImage8 from "../../../assets/images/blog/img-08.jpg";
import blogImage9 from "../../../assets/images/blog/img-09.jpg";
import blogImage10 from "../../../assets/images/blog/img-10.jpg";



const BlogContent = () => {
    const blogContentText = [
        {
        id:1,
        blogRow :[                   
        {
            id:1,
            blogImage : blogImage6,
            blogTitle : "Fashion",
            blogDate : "July 29, 2021",
            blogHeading : "A day in the of a professional fashion designer",
            blogText :"Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
            blogAutherImage : userImage2, 
            blogAutherName : "Rebecca Swartz",
            BlogAutherPosition : "Fashion Designer"
        },
        {
            id:2,
            blogImage : blogImage5,
            blogTitle : "Business",
            blogDate : "July 25, 2021",
            blogHeading : "Stack designer Olivia Murphy offers freelancing advice",
            blogText :"Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
            blogAutherImage : userImage3, 
            blogAutherName : "Olivia Murphy",
            BlogAutherPosition : "Product Leader"
        }   
        ] 
        },
        {
            id:2,
            blogRow :[
                       
            {
                id:1,
                blogImage : blogImage7,
                blogTitle : "Business",
                blogDate : "July 25, 2021",
                blogHeading : "Manage white space in responsive layouts ?",
                blogText :"Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
                blogAutherImage : userImage2, 
                blogAutherName : "Olivia Murphy",
                BlogAutherPosition : "Product Leader"
            },
            {
                id:2,
                blogImage : blogImage8,
                blogTitle : "Development",
                blogDate : "July 29, 2021",
                blogHeading : "How to get creative in your work ?",
                blogText :"Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
                blogAutherImage : userImage3, 
                blogAutherName : "Rebecca Swartz",
                BlogAutherPosition : "Fashion Designer"
            }   
            ] 
            },
            {
                id:3,
                blogRow :[
                           
                {
                    id:1,
                    blogImage : blogImage9,
                    blogTitle : "Business",
                    blogDate : "July 25, 2021",
                    blogHeading : "What planning process needs ?",
                    blogText :"Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
                    blogAutherImage : userImage3, 
                    blogAutherName : "Olivia Murphy",
                    BlogAutherPosition : "Product Leader"
                },
                {
                    id:2,
                    blogImage : blogImage10,
                    blogTitle : "Development",
                    blogDate : "July 29, 2021",
                    blogHeading : "How to become a best sale marketer in a year!",
                    blogText :"Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
                    blogAutherImage : userImage3, 
                    blogAutherName : "Rebecca Swartz",
                    BlogAutherPosition : "Fashion Designer"
                }   
                ] 
                }
    ]
    return (
        <React.Fragment>        
            <section className="section">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={12}>
                                    <div className="mb-4">
                                        <h4>Latest & Trending Blog Post</h4>
                                    </div>
                                </Col>
                                <Col lg={7}>
                                    <div className="post-preview overflow-hidden rounded-3 mb-3 mb-lg-0">
                                        <Link to="/blogdetails"><img src={blogImage4} alt="Blog" className="img-fluid blog-img" /></Link>
                                    </div>
                                </Col>
                                <Col lg={5}>                                   
                                    <article className="post position-relative">
                                        <div className="post ms-lg-4">
                                            <p className="text-muted mb-2"><b>Product</b> - Aug 01, 2021</p>
                                            <h5 className="mb-3"><Link to="/blogdetails" className="primary-link">Do traditional landing pages work for Saas startups?</Link></h5>
                                            <p className="text-muted">
                                                Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                            </p>
                                            <div className="d-flex align-items-center mt-4">
                                                <div className="flex-shrink-0">
                                                    <img src={userImage1} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-0">James Lemire </h6></Link>
                                                    <p className="text-muted mb-0">Product Manager</p>
                                                </div>
                                            </div>    
                                        </div>
                                    </article>
                                </Col>
                            </Row>
                           
                            <Col lg={12}>
                                    <div className="mt-4">
                                        <h4>All Blog Post</h4>
                                    </div>
                            </Col> 

                            {(blogContentText).map((blogContentDetails,key) => (  
                            <Row key={key}> 
                            {(blogContentDetails.blogRow).map((blogContentInner,key) => (
                                <Col lg={6} key={key}>    
                                <article className="post position-relative mt-4" key={key}>
                                    <div className="post-preview overflow-hidden mb-3 rounded-3">
                                        <Link to="blog-details"><img src={blogContentInner.blogImage} alt="" className="img-fluid blog-img" /></Link>
                                    </div>
                                    <p className="text-muted mb-2"><b>{blogContentInner.blogTitle}</b> - {blogContentInner.blogDate}</p>
                                    <h5 className="mb-3"><Link to="/blogdetails" className="primary-link">{blogContentInner.blogHeading}</Link></h5>
                                    <p className="text-muted">{blogContentInner.blogText}</p>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src={blogContentInner.blogAutherImage} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-0">{blogContentInner.blogAutherName}</h6></Link>
                                            <p className="text-muted mb-0">{blogContentInner.BlogAutherPosition}</p>
                                        </div>
                                    </div> 
                                </article>                                    
                            </Col> 
                            ))}
                            </Row>                                  
                            ))} 

                             <Row >
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

export default BlogContent;