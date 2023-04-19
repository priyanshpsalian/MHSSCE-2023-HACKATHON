import React from 'react';
import { Link } from 'react-router-dom';


const SocialConnect = () => {
    const socialConnect = [
        {
            id:1,
            socialIcon : "uil uil-facebook-f"
        },
        {
            id:2,
            socialIcon : "uil uil-whatsapp"
        },
        {
            id:3,
            socialIcon : "uil uil-twitter-alt"
        },
        {
            id:4,
            socialIcon : "uil uil-dribbble"
        },
        {
            id:5,
            socialIcon : "uil uil-envelope"
        }
    ]
    return (
        <React.Fragment>
            <div className="mt-4 pt-2">
                <div className="sd-title">
                    <h6 className="fs-16 mb-3">Follow & Connect</h6>
                </div>
                <ul className="widget-social-menu list-inline mb-0 mt-3">
                {(socialConnect).map((socialConnectDetails,key)=>(
                    <li className="list-inline-item" key={key}>
                        <Link to="#"><i className={socialConnectDetails.socialIcon}></i></Link>
                    </li>
                ))}    
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SocialConnect
