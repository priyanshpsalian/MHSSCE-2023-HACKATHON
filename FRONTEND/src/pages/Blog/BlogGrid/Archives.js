import React from 'react';
import { Link } from 'react-router-dom';

const Archives = () => {
    const archives = [
        {
            id:1,
            date: "March 2022",
            views : 40
        },
        {
            id:2,
            date: "April 2022",
            views : "08"
        },
        {
            id:3,
            date: "Nov 2021",
            views : 32
        },
        {
            id:4,
            date: "May 2021",
            views : 11
        },
        {
            id:5,
            date: "Jun 2020",
            views : 21
        }
    ]
    return (
        <React.Fragment>
            <div className="mt-4 pt-2">
                <div className="sd-title">
                    <h6 className="fs-16 mb-3">Archives</h6>
                </div>
                <ul className="list-unstyled mb-0 mt-3">
                    {(archives).map((archivesDetails,key)=>(
                    <li className="py-1" key={key}><Link className="me-2 text-muted" to="#"><i className="uil uil-angle-right-b"></i> {archivesDetails.date}</Link> ({archivesDetails.views})</li>
                    ))}                    
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Archives
