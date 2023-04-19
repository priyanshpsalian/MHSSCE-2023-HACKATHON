import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const Pagination = () => {
    return (
        <React.Fragment>
         <Row>
            <Col lg={12} className="mt-4 pt-2">
                <nav aria-label="Page navigation example">
                    <div className="pagination job-pagination mb-0 justify-content-center">
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
                    </div>
                </nav>
            </Col>
        </Row>
        </React.Fragment>
    )
}

export default Pagination;
