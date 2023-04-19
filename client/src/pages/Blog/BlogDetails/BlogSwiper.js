import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

//swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Import Blog images
import blogImage11 from "../../../assets/images/blog/img-11.jpg";
import blogImage14 from "../../../assets/images/blog/img-12.jpg";
import blogImage15 from "../../../assets/images/blog/img-15.jpg";

const BlogSwiper = () => {
    const blogSwiper = [
        {
            id: 1,
            blogImage: blogImage11
        },
        {
            id: 2,
            blogImage: blogImage14
        },
        {
            id: 3,
            blogImage: blogImage15
        },
    ];

    SwiperCore.use([Autoplay, Pagination]);
    return (
        <React.Fragment>
            <Swiper
                loop={true}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                autoHeight={true}
                pagination={{ clickable: true }}
            >
                <div className="swiper-wrapper">
                    {(blogSwiper || []).map((blogSwiperDetails, key) => (
                        <SwiperSlide key={key}>
                            <img src={blogSwiperDetails.blogImage} alt="" className="img-fluid rounded-3" />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>


        </React.Fragment>
    );
};

export default BlogSwiper;
