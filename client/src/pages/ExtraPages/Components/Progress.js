import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Progress = () => {
    return (
        <React.Fragment>
                                    <Card className="mt-4" id="progress">
                                        <div className="p-4 border-bottom">
                                            <h5 className="mb-0">Progress</h5>  
                                        </div>
                                        <CardBody className="p-4">                        
                                            <h6 className="card-title">Basic</h6>
                                            <p className="text-muted">Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

                                            <div>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{width : `25%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{width : `50%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{width : `75%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{width : `100%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="card-title">Striped & Animated</h6>
                                                <p className="text-muted">Add <code>.progress-bar-striped</code>
                                                    to any <code>.progress-bar</code> to apply a
                                                    stripe via CSS gradient over the progress bar’s background color.</p>
                                                <div>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width : `10%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width : `25%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width : `50%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width : `75%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width : `100%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
        </React.Fragment>
    )
}

export default Progress
