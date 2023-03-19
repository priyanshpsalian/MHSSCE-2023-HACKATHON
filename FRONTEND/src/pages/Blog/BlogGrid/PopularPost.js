import React from 'react'
import { Link } from 'react-router-dom'

//Import Images 
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage2 from "../../../assets/images/blog/img-02.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";
import blogImage10 from "../../../assets/images/blog/img-10.jpg";


const PopularPost = () => {
    const popularPost =[
        {
            id:1,
            postText :"Talent Advocate goes above and beyond", 
            postdate : "Aug 10, 2021",
            postImage :blogImage1
        }, 
        {
            id:2,
            postText :"Working with Hired meant multiple companies", 
            postdate : "Jun 24, 2021",
            postImage :blogImage2
        },
        {
            id:3,
            postText :"Talent Advocate helped me through", 
            postdate : "July 13, 2021",
            postImage :blogImage3
        },
        {
            id:4,
            postText :"I never had to wait more than", 
            postdate : "Feb 01, 2021",
            postImage :blogImage10
        }
    ]
    return (
        <React.Fragment>
                                    <div className="mt-4 pt-2">
                                            <div className="sd-title">
                                                <h6 className="fs-16 mb-3">Popular Post</h6>
                                            </div>
                                            <ul className="widget-popular-post list-unstyled my-4">
                                                {(popularPost).map((popularPostDetails,key)=>(
                                                <li className="d-flex mb-3 align-items-center pb-3 border-bottom" key={key}>
                                                    <img src={popularPostDetails.postImage} alt="" className="widget-popular-post-img rounded" />
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <Link to="blog-details" className="text-dark">{popularPostDetails.postText}</Link>
                                                        <span className="d-block text-muted fs-14">{popularPostDetails.postdate}</span>
                                                    </div>
                                                </li>   
                                                ))}                                             
                                            </ul>
                                    </div>
        </React.Fragment>
    )
}

export default PopularPost;
