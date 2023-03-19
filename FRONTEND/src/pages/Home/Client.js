import React from 'react'
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

//Logo Images
import LogoImage1 from "../../assets/images/logo/logo-01.png";
import LogoImage2 from "../../assets/images/logo/logo-02.png";
import LogoImage3 from "../../assets/images/logo/logo-03.png";
import LogoImage4 from "../../assets/images/logo/logo-04.png";
import LogoImage5 from "../../assets/images/logo/logo-05.png";
import LogoImage6 from "../../assets/images/logo/logo-06.png";


const Client = () => {
    const client=[
        {
            id : 1,
            logoImage : LogoImage1
        },
        {
            id : 2,
            logoImage : LogoImage2
        },
        {
            id : 3,
            logoImage : LogoImage3
        },
        {
            id : 4,
            logoImage : LogoImage4
        },

        {
            id : 5,
            logoImage : LogoImage5
        },
        {
            id : 6,
            logoImage : LogoImage6
        }       

    ]
    return (
        <React.Fragment>
            <div className="py-4">
                        <Container>
                            <Row>
                                {(client || []).map((item,key) => (
                                <Col lg={2} key={key}>
                                    <div className="text-center p-3">
                                        <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Woocommerce">
                                            <img src={item.logoImage} alt="" className="img-fluid" />
                                        </Link>
                                    </div>
                                </Col>
                                ))}
                                
                            </Row>
                            
                        </Container>
                        
                    </div>
        </React.Fragment>
    )
}

export default Client;