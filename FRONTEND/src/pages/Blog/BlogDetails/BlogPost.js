import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

//swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Import Blog images
import blogImage4 from "../../../assets/images/blog/img-04.jpg";
import blogImage5 from "../../../assets/images/blog/img-05.jpg";
import blogImage6 from "../../../assets/images/blog/img-06.jpg";
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';

const BlogPost = () => {
    const blogPost = [
        {
            id: 1,
            blogPostImage: blogImage4,
            blogTitle: "Manage white space in responsive layouts ?",
            blogAuther: "Rebecca Swartz",
            blogDate: "5 mins ago",
        },
        {
            id: 2,
            blogPostImage: blogImage5,
            blogTitle: "A day in the of a professional fashion designer",
            blogAuther: "Rebecca Swartz",
            blogDate: "5 mins ago",
        },
        {
            id: 3,
            blogPostImage: blogImage6,
            blogTitle: "Manage white space in responsive layouts ?",
            blogAuther: "Rebecca Swartz",
            blogDate: "5 mins ago",
        },
    ];

    SwiperCore.use([Autoplay, Pagination]);
    return (
        <React.Fragment>
            <div className="mt-5">
                <h5 className="border-bottom pb-3"> Related Blog Posts</h5>
                <Swiper
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={20}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    autoHeight={true}
                    pagination={{ clickable: true }}
                    className="pb-5 mt-4"
                >
                    <div className="swiper-wrapper">
                        {(blogPost || []).map((blogPostDetails, key) => (
                            <SwiperSlide key={key}>
                                <Card className="blog-modern-box overflow-hidden border-0">
                                    <img src={blogPostDetails.blogPostImage} alt="" className="img-fluid" />
                                    <div className="bg-overlay"></div>
                                    <div className="card-img-overlay">
                                        <Link to="/blogdetails" className="text-white"><h5 className="card-title">{blogPostDetails.blogTitle}</h5></Link>
                                        <p className="card-text text-white-50"> <Link to="/blogauther" className="text-white-50">{blogPostDetails.blogAuther}</Link> - {blogPostDetails.blogDate}</p>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>

        </React.Fragment>
    );
};

export default BlogPost;
