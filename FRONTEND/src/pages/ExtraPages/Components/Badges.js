import React from 'react';
import { Card, CardBody } from 'reactstrap';

const Badges = () => {
    return (
        <React.Fragment>
            <Card className="mt-4" id="badges">
                <div className="p-4 border-bottom">
                    <h5 className="mb-0">Badges</h5>
                </div>
                <CardBody className="p-4">
                    <h6 className="card-title">Basic</h6>
                    <p className="text-muted">
                        Add any of the below mentioned modifier classes to change the appearance of a badge.
                    </p>
                    <div className="d-flex flex-wrap align-items-start gap-1">
                        <span className="badge bg-primary">Primary</span>
                        <span className="badge bg-secondary">Secondary</span>
                        <span className="badge bg-success">Success</span>
                        <span className="badge bg-info">Info</span>
                        <span className="badge bg-warning">Warning</span>
                        <span className="badge bg-danger">Danger</span>
                        <span className="badge bg-dark">Dark</span>
                    </div>
                    <div className="mt-5">
                        <h6 className="card-title">Soft Badges</h6>
                        <p className="text-muted">
                            Use <code>.bg-soft-*</code> class for a pill badge.
                        </p>
                        <div className="d-flex flex-wrap align-items-start gap-1">
                            <span className="badge bg-soft-primary">Primary</span>
                            <span className="badge bg-soft-success">Success</span>
                            <span className="badge bg-soft-info">Info</span>
                            <span className="badge bg-soft-warning">Warning</span>
                            <span className="badge bg-soft-danger">Danger</span>
                            <span className="badge bg-soft-dark">Dark</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h6 className="card-title">Soft Badges</h6>
                        <p className="text-muted">
                            Use <code>.bg-soft-*</code> class for a pill badge.
                        </p>
                        <div className="d-flex flex-wrap align-items-start gap-1">
                            <span className="badge rounded-pill bg-primary">Primary</span>
                            <span className="badge rounded-pill bg-secondary">Secondary</span>
                            <span className="badge rounded-pill bg-success">Success</span>
                            <span className="badge rounded-pill bg-info">Info</span>
                            <span className="badge rounded-pill bg-warning">Warning</span>
                            <span className="badge rounded-pill bg-danger">Danger</span>
                            <span className="badge rounded-pill bg-dark">Dark</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Badges;
