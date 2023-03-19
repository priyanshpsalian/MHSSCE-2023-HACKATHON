import React from 'react';
import { Col, Row } from 'reactstrap';

const BlogTitle = () => {
    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Col lg={7}>
                    <div className="text-center mb-5">
                        <p className="text-danger fw-semibold mb-0">Fashion</p>
                        <h3>How to get creative in your work ?</h3>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BlogTitle;
