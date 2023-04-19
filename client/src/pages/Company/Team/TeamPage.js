import React from 'react';
import { Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

//Import Images 
import teamMemberImage1 from "../../../assets/images/user/img-01.jpg";
import teamMemberImage2 from "../../../assets/images/user/img-02.jpg";
import teamMemberImage3 from "../../../assets/images/user/img-03.jpg";
import teamMemberImage8 from "../../../assets/images/user/img-08.jpg";
import teamMemberImage7 from "../../../assets/images/user/img-07.jpg";
import teamMemberImage4 from "../../../assets/images/user/img-04.jpg";
import teamMemberImage6 from "../../../assets/images/user/img-06.jpg";
import teamMemberImage10 from "../../../assets/images/user/img-10.jpg";
import teamMemberImage11 from "../../../assets/images/user/img-11.jpg";


const TeamPage = () => {
    const teamPage = [
        {
            id :1,
            teamMemberImage : teamMemberImage1,
            teamMemberName : "Rebecca Swartz",
            teamMemberPosition : "Founder & CEO"
            
        },
        {
            id :2,
            teamMemberImage : teamMemberImage2,
            teamMemberName : "James Lemire",
            teamMemberPosition : "Project Manager"
            
        },
        {
            id :3,
            teamMemberImage : teamMemberImage3,
            teamMemberName : "Charles Dickens",
            teamMemberPosition : "Financial Analyst"
            
        },
        {
            id :4,
            teamMemberImage : teamMemberImage8,
            teamMemberName : "Jeffrey Montgomery",
            teamMemberPosition : "UI/UX Designer"
            
        },        
        {
            id :5,
            teamMemberImage : teamMemberImage7,
            teamMemberName : "Brooke Hayes",
            teamMemberPosition : "Team Leader"
            
        },
        {
            id :6,
            teamMemberImage : teamMemberImage4,
            teamMemberName : "Olivia Murphy",
            teamMemberPosition : "Designer"
            
        },
        {
            id :7,
            teamMemberImage : teamMemberImage6,
            teamMemberName : "Betty Richards",
            teamMemberPosition : "Developer"
            
        },
        {
            id :8,
            teamMemberImage : teamMemberImage10,
            teamMemberName : "Gabriel Palmer",
            teamMemberPosition : "Back End Developer"
            
        },
        {
            id :9,
            teamMemberImage : teamMemberImage11,
            teamMemberName : "Gabriel Palmer",
            teamMemberPosition : "Back End Developer"
            
        },

    ]
    return (
        <React.Fragment>
            <section className="section">
                        <Container>
                            <Row>
                                {(teamPage.map)((teamPageDetails,key)=> (
                                <Col lg={4} md={6} key={key}>
                                    <div className="team-box card border-0 mt-4">
                                        <div className="team-img position-relative mx-auto">
                                            <img src={teamPageDetails.teamMemberImage} alt="" className="img-thumbnail" />
                                            <ul className="team-social list-unstyled">
                                                <li><Link to="#"><i className="mdi mdi-facebook"></i></Link></li>
                                                <li className="my-1"><Link to="#"><i className="mdi mdi-twitter"></i></Link> </li>
                                                <li><Link to="#"><i className="mdi mdi-skype"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="team-content card-body text-center">
                                            <Link to="#" className="primary-link"><h6 className="fs-17 mb-1">{teamPageDetails.teamMemberName}</h6></Link>
                                            <p className="text-muted mb-0">{teamPageDetails.teamMemberPosition}</p>
                                        </div>
                                    </div>
                                </Col>    
                                ))}                           
                            </Row>
                        </Container>
                    </section>
        </React.Fragment>
    )
}

export default TeamPage
