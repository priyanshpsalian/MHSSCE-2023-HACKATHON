import React from 'react';
import { Link } from 'react-router-dom';

const Popular = () => {
    const popular =[
        {
            id :1,
            count: 20,
            jobTitle : "UI/UX designer"
        },
        {
            id :2,
            count: 18,
            jobTitle : "HR Manager"
        },
        {
            id :3,
            count: 10,
            jobTitle : "Product Manager"
        },
        {
            id :4,
            count: 15,
            jobTitle : "Sales manager"
        },
        {
            id :5,
            count: 28,
            jobTitle : "Developer"
        }
    ]
    return (
        <React.Fragment>
            <div className="wedget-popular-title mt-4">
                <h6>Popular</h6>
                <ul className="list-inline">
                {(popular || []).map((popularDetails ,key) => (
                    <li className="list-inline-item" key={key}>
                        <div className="popular-box d-flex align-items-center">
                            <div className="number flex-shrink-0 me-2">
                                {popularDetails.count} 
                            </div>
                            <Link to="#" className="primary-link stretched-link"><h6 className="fs-14 mb-0">{popularDetails.jobTitle}</h6></Link>
                        </div>
                    </li>
                ))}                       
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Popular;
